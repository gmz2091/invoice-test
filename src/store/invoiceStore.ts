import { create } from "zustand";
import { type Invoice } from "../domain/Invoice";

interface InvoiceStore {
  invoices: Invoice[];
  addInvoice: (invoice: Invoice) => void;
  setInvoices: (invoices: Invoice[]) => void;
  updateInvoice: (updatedInvoice: Invoice) => void;
  deleteInvoice: (id: string) => void;
}

const useInvoiceStore = create<InvoiceStore>((set) => ({
  invoices: [],
  addInvoice: (invoice) =>
    set((state) => ({ invoices: [...state.invoices, invoice] })),
  setInvoices: (invoices) => set({ invoices }),
  updateInvoice: (updatedInvoice: Invoice) => {
    set((state) => ({
      invoices: state.invoices.map((invoice) =>
        invoice.id === updatedInvoice.id ? updatedInvoice : invoice
      ),
    }));
  },
  deleteInvoice: (id: string) => set((state) => ({
    invoices: state.invoices.filter((invoice) => invoice.id !== id),
  })),

}));


export { useInvoiceStore };