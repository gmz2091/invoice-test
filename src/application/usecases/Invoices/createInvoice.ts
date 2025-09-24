import { type Invoice } from "../../../domain/Invoice";
import { useInvoiceStore } from "../../../store/invoiceStore";

export function createInvoice(invoice: Invoice): Promise<void> {
  const { addInvoice } = useInvoiceStore.getState();
  return new Promise((resolve) => {
    addInvoice(invoice);
    resolve();
  });
};
