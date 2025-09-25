import { type Invoice } from "../../../domain/Invoice";
import { invoiceApi } from "../../../infrastructure/api/invoiceApi";
import { useInvoiceStore } from "../../../store/invoiceStore";

export const getInvoices = async (): Promise<Invoice[]> => {
  const invoices = await invoiceApi.fetchInvoicesApi();
  const { setInvoices } = useInvoiceStore.getState();
  setInvoices(invoices);
  return invoices;
};
