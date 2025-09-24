import type { Invoice } from "../../../domain/Invoice";
import { useInvoiceStore } from "../../../store/invoiceStore";

export const updateInvoice = (invoice: Invoice): Promise<void> => {
  return new Promise((resolve) => {
    useInvoiceStore.getState().updateInvoice(invoice);
    resolve();
  });
}