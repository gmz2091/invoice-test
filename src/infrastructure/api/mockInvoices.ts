import { type  Invoice } from "../../domain/Invoice";

export const mockInvoices: Invoice[] = [
  {
    id: "1",
    client: "ACME Corp",
    date: "2023-08-01",
    amount: 1200,
    status: "Paid",
  },
  {
    id: "2",
    client: "Globex",
    date: "2023-08-15",
    amount: 850,
    status: "Unpaid",
  },
];
