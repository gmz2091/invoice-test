export type InvoiceStatus = "paid" | "unpaid";

export interface Invoice {
  id?: string;
  client: string;
  date: string;
  amount: number;
  status: InvoiceStatus;
}
