import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchInvoicesByUser } from "../redux/firebaseActions";
import { useNavigate } from "react-router-dom";
import { logout } from "../redux/authSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth); // Access the authenticated user from Redux state
  const invoices = useSelector((state) => state.invoice.invoices); // Access invoices from Redux state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      navigate("/"); // Redirect to login if user is not authenticated
    } else {
      // Fetch invoices from Firestore when the component mounts
      dispatch(fetchInvoicesByUser(user.uid));
      setLoading(false);
    }
  }, [dispatch, user, navigate]);

  const handleLogout = () => {
    // Dispatch the logout action to clear user state
    dispatch(logout());
    navigate("/"); // Redirect to login page after logout
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Welcome, {user?.email}</h2>
      <button onClick={handleLogout}>Logout</button>

      <h3>Your Invoices:</h3>
      <div>
        {invoices.length === 0 ? (
          <p>No invoices found.</p>
        ) : (
          <ul>
            {invoices.map((invoice) => (
              <li key={invoice.id}>
                <div>
                  <h4>{invoice.clientName}</h4>
                  <p>Status: {invoice.status}</p>
                  <p>Total: ${invoice.total}</p>
                  {/* Add more invoice details here */}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
