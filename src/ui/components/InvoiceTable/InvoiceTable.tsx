import { useEffect, useState, type JSX } from "react";
import { CButton, CFormInput, CFormSelect } from "@coreui/react";
import { AgGridReact } from "ag-grid-react";
import { type ColDef } from "ag-grid-community";
import { type Invoice } from "../../../domain/Invoice";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useInvoiceStore } from "../../../store/invoiceStore";

const InvoiceTable = ({ setInvoiceToEdit, setVisible, deleteInvoice }: { setInvoiceToEdit: (invoice: Invoice) => void, setVisible: (visible: boolean) => void, deleteInvoice: (id: string) => void }): JSX.Element => {
  const invoices = useInvoiceStore((state) => state.invoices);

  const [statusFilter, setStatusFilter] = useState<string>("");
  const [dateFrom, setDateFrom] = useState<string>("");
  const [dateTo, setDateTo] = useState<string>("");
  const [filteredInvoices, setFilteredInvoices] = useState<Invoice[]>(invoices);

  useEffect(() => {
    if (invoices) {
      let tempInvoices = [...invoices];

      if (statusFilter) {
        tempInvoices = tempInvoices.filter((inv) => inv.status.toLowerCase() === statusFilter.toLowerCase());
      }

      if (dateFrom) {
        tempInvoices = tempInvoices.filter((inv) => new Date(inv.date) >= new Date(dateFrom));
      }

      if (dateTo) {
        tempInvoices = tempInvoices.filter((inv) => new Date(inv.date) <= new Date(dateTo));
      }

      setFilteredInvoices(tempInvoices);

    }
  }, [statusFilter, dateFrom, dateTo, invoices])

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
    <div>
      <div className="flex gap-3 mb-3">
        <CFormSelect
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="">All Status</option>
          <option value="Paid">Paid</option>
          <option value="Unpaid">Unpaid</option>
        </CFormSelect>

        <CFormInput
          type="date"
          value={dateFrom}
          onChange={(e) => setDateFrom(e.target.value)}
        />
        <CFormInput
          type="date"
          value={dateTo}
          onChange={(e) => setDateTo(e.target.value)}
        />

        <CButton
          color="secondary"
          onClick={() => {
            setStatusFilter("");
            setDateFrom("");
            setDateTo("");
          }}
        >
          Clear
        </CButton>
      </div>

      <div className="ag-theme-alpine" style={{ height: 400 }}>
        <AgGridReact rowData={filteredInvoices} columnDefs={columnDefs} />
      </div>
    </div>
  );
}

export default InvoiceTable;
