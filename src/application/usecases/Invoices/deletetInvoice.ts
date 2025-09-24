import { useInvoiceStore } from "../../../store/invoiceStore";

export const deleteInvoice = (id: string): Promise<void> => {
  const { deleteInvoice } = useInvoiceStore.getState();
  return new Promise((resolve) => {
    deleteInvoice(id);
    resolve();
  });
};
