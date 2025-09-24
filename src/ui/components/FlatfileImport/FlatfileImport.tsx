import type { JSX } from "react";
import type { Flatfile } from "@flatfile/api";
import { useFlatfile, Sheet } from "@flatfile/react";
import { useInvoiceStore } from "../../../store/invoiceStore";
import type { Invoice } from "../../../domain/Invoice";

const sheetConfig: Flatfile.SheetConfig = {
  name: "Invoices",
  slug: "invoices",
  fields: [
    {
      label: "ID",
      key: "id",
      type: "string"
    },
    {
      label: "Cliente",
      key: "client",
      type: "string"
    },
    {
      label: "Fecha",
      key: "date",
      type: "string"
    },
    {
      label: "Monto",
      key: "amount",
      type: "number"
    },
    {
      label: "Estado",
      key: "status",
      type: "enum-list",
      config: {
        options: [
          { value: "Pagado", label: "Pagado" },
          { value: "Pendiente", label: "Pendiente" },
          { value: "Vencido", label: "Vencido" }
        ]
      }
    }
  ]
};

const FlatfileImport = (): JSX.Element => {
  const addInvoice = useInvoiceStore((state) => state.addInvoice);
  const { openPortal } = useFlatfile({
    onClose: () => console.log("Flatfile Portal cerrado"),
  });

  // Función para procesar los datos importados
  const handleSubmit = (results: any) => {
    results.data.forEach((item: any) => {
      const invoice: Invoice = {
        id: item.id ?? crypto.randomUUID(),
        client: item.client,
        date: item.date,
        amount: Number(item.amount),
        status: item.status,
      };
      addInvoice(invoice);
    });
  };

  return (
    <>
      <button onClick={openPortal} className="btn btn-primary mb-4">
        Importar CSV
      </button>
      <Sheet config={sheetConfig} onSubmit={handleSubmit} defaultPage />
    </>
  );
};
export default FlatfileImport;
