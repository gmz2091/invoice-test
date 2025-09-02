import { type Invoice } from "../../domain/Invoice";
import { useInvoiceStore } from "../../store/invoiceStore";

export const createInvoice = (invoice: Invoice) => {
  const { addInvoice } = useInvoiceStore.getState();
  addInvoice(invoice);
};
