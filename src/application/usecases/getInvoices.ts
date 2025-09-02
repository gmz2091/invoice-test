import { type Invoice } from "../../domain/Invoice";
import { mockInvoices } from "../../infrastructure/api/mockInvoices";

export const getInvoices = async (): Promise<Invoice[]> => {
  return Promise.resolve(mockInvoices);
};
