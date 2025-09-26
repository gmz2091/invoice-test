import type { JSX } from "react";
import { CButton } from "@coreui/react";
import { AgGridReact } from "ag-grid-react";
import { type ColDef } from "ag-grid-community";
import { type Invoice } from "../../../domain/Invoice";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useInvoiceStore } from "../../../store/invoiceStore";

const InvoiceTable = ({ setInvoiceToEdit, setVisible, deleteInvoice }: { setInvoiceToEdit: (invoice: Invoice) => void, setVisible: (visible: boolean) => void, deleteInvoice: (id: string) => void }): JSX.Element => {
  const invoices = useInvoiceStore((state) => state.invoices);

  const columnDefs: ColDef<Invoice>[] = [
    { headerName: "Invoice #", field: "id" },
    { headerName: "Client", field: "client" },
    { headerName: "Date", field: "date" },
    { headerName: "Status", field: "status" },
    { headerName: "Amount (USD)", field: "amount" },
    {
      headerName: "Actions",
      cellRenderer: (params: { data: Invoice }) => {
        const invoice: Invoice = params.data;
        return (
          <div className="flex gap-2">
            <CButton
              size="sm"
              color="info"
              onClick={() => {
                setInvoiceToEdit(invoice);
                setVisible(true);
              }}
            >
              Edit
            </CButton>
            <CButton
              size="sm"
              color="danger"
              onClick={() => deleteInvoice(invoice.id as string)}
            >
              Delete
            </CButton>
          </div>
        );
      },
    },
  ];

  return (
    <div className="ag-theme-alpine" style={{ height: 400 }}>
      <AgGridReact rowData={invoices} columnDefs={columnDefs} />
    </div>
  );
}

export default InvoiceTable;
