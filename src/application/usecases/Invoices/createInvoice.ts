import { type Invoice } from "../../../domain/Invoice";
import { invoiceApi } from "../../../infrastructure/api/invoiceApi";
import { getInvoices } from "./getInvoices";

export async function createInvoice(invoice: Invoice): Promise<void> {
  await invoiceApi.createInvoiceApi(invoice);
  getInvoices();
};
