import { createSlice } from "@reduxjs/toolkit";

const invoiceSlice = createSlice({
  name: "invoices",
  initialState: { invoices: [], error: null },
  reducers: {
    setInvoicesByUser: (state, action) => {
      state.invoices = action.payload;
    },
    addInvoice: (state, action) => {
      state.invoices.push(action.payload);
    },
    editInvoice: (state, action) => {
      const index = state.invoices.findIndex((i) => i.id === action.payload.id);
      if (index !== -1) state.invoices[index] = action.payload;
    },
  },
});

export const { setInvoicesByUser, addInvoice, editInvoice } =
  invoiceSlice.actions;
export default invoiceSlice.reducer;
