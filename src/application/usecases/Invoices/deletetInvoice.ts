import { invoiceApi } from "../../../infrastructure/api/invoiceApi";
import { useInvoiceStore } from "../../../store/invoiceStore";

export const deleteInvoice = async (id: string): Promise<void> => {
  await invoiceApi.deleteInvoiceApi(id);
  const { deleteInvoice } = useInvoiceStore.getState();
  deleteInvoice(id);
};
