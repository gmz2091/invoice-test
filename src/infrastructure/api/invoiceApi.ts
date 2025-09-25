import axios from "axios";
import { type Invoice } from "../../domain/Invoice";
import { config } from "../../config/environment";

const BASE_URL = config.apiUrl;

async function createInvoiceApi(invoice: Invoice): Promise<void> {
  const response = await axios.post(`${BASE_URL}/invoices`, invoice);
  if (response.status !== 201) {
    throw new Error("Failed to create invoice");
  }
  fetchInvoicesApi();
}

async function updateInvoiceApi(invoice: Invoice): Promise<void> {
  const response = await axios.put(`${BASE_URL}/invoices/${invoice.id}`, invoice);
  if (response.status !== 200) {
    throw new Error("Failed to update invoice");
  }
}

async function deleteInvoiceApi(id: string): Promise<void> {
  const response = await axios.delete(`${BASE_URL}/invoices/${id}`);
  if (response.status !== 200) {
    throw new Error("Failed to delete invoice");
  }
}

async function fetchInvoicesApi(): Promise<Invoice[]> {
  const response = await axios.get(`${BASE_URL}/invoices`);
  if (response.status !== 200) {
    throw new Error("Failed to fetch invoices");
  }
  return response.data;
}

export const invoiceApi = {
  createInvoiceApi,
  updateInvoiceApi,
  deleteInvoiceApi,
  fetchInvoicesApi,
};