import type { JSX } from "react";
import { AgGridReact } from "ag-grid-react";
import { type ColDef } from "ag-grid-community";
import { type Invoice } from "../../../domain/Invoice";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useInvoiceStore } from "../../../store/invoiceStore";

const InvoiceTable = (): JSX.Element => {
  const invoices = useInvoiceStore((state) => state.invoices);

  const columnDefs: ColDef<Invoice>[] = [
    { headerName: "Invoice #", field: "id" },
    { headerName: "Client", field: "client" },
    { headerName: "Date", field: "date" },
    { headerName: "Status", field: "status" },
    { headerName: "Amount (USD)", field: "amount" },
  ];

  return (
    <div className="ag-theme-alpine" style={{ height: 400 }}>
      <AgGridReact rowData={invoices} columnDefs={columnDefs} />
    </div>
  );
}

export default InvoiceTable;
