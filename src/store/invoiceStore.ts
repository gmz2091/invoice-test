import { create } from "zustand";
import { type Invoice } from "../domain/Invoice";

interface InvoiceStore {
  invoices: Invoice[];
  addInvoice: (invoice: Invoice) => void;
  setInvoices: (invoices: Invoice[]) => void;
}

export const useInvoiceStore = create<InvoiceStore>((set) => ({
  invoices: [],
  addInvoice: (invoice) =>
    set((state) => ({ invoices: [...state.invoices, invoice] })),
  setInvoices: (invoices) => set({ invoices }),
}));
