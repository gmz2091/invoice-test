import type { Invoice } from "../../../domain/Invoice";
import { invoiceApi } from "../../../infrastructure/api/invoiceApi";
import { useInvoiceStore } from "../../../store/invoiceStore";

export const updateInvoice = async (invoice: Invoice): Promise<void> => {
  await invoiceApi.updateInvoiceApi(invoice);
  const { updateInvoice } = useInvoiceStore.getState();
  updateInvoice(invoice);
}