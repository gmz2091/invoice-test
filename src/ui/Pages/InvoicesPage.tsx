import { useEffect, type JSX } from "react";
import { useInvoiceStore } from "../../store/invoiceStore";
import { getInvoices } from "../../application/usecases/getInvoices";
import { InvoiceForm, InvoiceTable } from "../components";

const InvoicesPage = (): JSX.Element => {
  const setInvoices = useInvoiceStore((state) => state.setInvoices);

  useEffect(() => {
    getInvoices().then(setInvoices);
  }, [setInvoices]);

  return (
    <div className="p-4 flex flex-col gap-6">
      <h1 className="text-2xl font-bold">Invoices</h1>
      <InvoiceForm />
      <InvoiceTable />
    </div>
  );
}

export default InvoicesPage;
