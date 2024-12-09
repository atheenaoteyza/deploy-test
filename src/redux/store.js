import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import invoiceSlice from "./invoiceSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    invoices: invoiceSlice,
  },
});

export default store;
