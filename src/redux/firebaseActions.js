import { auth, db } from "../firebase/config";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { login, setError } from "./authSlice";
import { setInvoicesByUser, addInvoice, editInvoice } from "./invoiceSlice";

export const registerUser = (credentials) => async (dispatch) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      credentials.email,
      credentials.password
    );
    const user = userCredential.user;

    // Store user data in Firestore
    const userRef = doc(db, "users", user.uid);
    await setDoc(userRef, { invoices: [], email: credentials.email });

    // Dispatch login action
    dispatch(login(user));
  } catch (error) {
    dispatch(setError(error.message));
  }
};

// Authentication
export const authenticateUser = (credentials) => async (dispatch) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      credentials.email,
      credentials.password
    );
    const user = userCredential.user;
    console.log(user.invoices);

    // Dispatch only essential data
    dispatch(
      login({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        accessToken: user.accessToken,
      })
    );
  } catch (error) {
    dispatch(setError(error.message));
  }
};

// Fetch Invoices
export const fetchInvoicesByUser = (userId) => async (dispatch) => {
  try {
    const userDoc = await getDoc(doc(db, "users", userId));
    if (userDoc.exists()) {
      dispatch(setInvoicesByUser(userDoc.data().invoices || []));
    }
  } catch (error) {
    console.error("Error fetching invoices:", error);
  }
};

// Add Invoice
export const addInvoiceAsync = (invoice, userId) => async (dispatch) => {
  try {
    const userRef = doc(db, "users", userId);
    const userDoc = await getDoc(userRef);
    const currentInvoices = userDoc.exists()
      ? userDoc.data().invoices || []
      : [];

    const updatedInvoices = [...currentInvoices, invoice];
    await setDoc(userRef, { invoices: updatedInvoices });

    dispatch(addInvoice(invoice));
  } catch (error) {
    console.error("Error adding invoice:", error);
  }
};
