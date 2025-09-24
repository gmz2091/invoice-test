import { useEffect, type JSX, useState, useRef } from 'react';
import { CButton } from "@coreui/react";
import type { FormikProps } from 'formik';
import { useInvoiceStore } from "../../store/invoiceStore";
import { getInvoices } from "../../application/usecases/Invoices/getInvoices";
import { FlatfileImport, InvoiceForm, InvoiceTable, Modal } from "../components";
import type { Invoice } from '../../domain/Invoice';
import { updateInvoice, createInvoice, deleteInvoice } from '../../application/usecases';

const InvoicesPage = (): JSX.Element => {
  const setInvoices = useInvoiceStore((state) => state.setInvoices);
  const formRef = useRef<FormikProps<Invoice>>(null);
  const [visible, setVisible] = useState(false);
  const [invoiceToEdit, setInvoiceToEdit] = useState<Invoice | undefined>(undefined);



  useEffect(() => {
    getInvoices().then(setInvoices);
  }, [setInvoices]);

  return (
    <div className="p-4 flex flex-col gap-6">
      <h1 className="text-2xl font-bold">Invoices</h1>
      <Modal
        title={invoiceToEdit ? "Edit Invoice" : "New Invoice"}
        body={<InvoiceForm saveNewInvoice={
          (invoice: Invoice) => {
            if (invoiceToEdit) {
              updateInvoice(invoice);
              setInvoiceToEdit(undefined);
            } else {
              createInvoice(invoice);
            }
            setVisible(false);
          }
        } formRef={formRef}
          invoiceToEdit={invoiceToEdit}
        />}
        footer={
          <>
            <CButton color="secondary" onClick={() => {
              setInvoiceToEdit(undefined);
              setVisible(false);
            }}>
              Close
            </CButton>
            <CButton
              onClick={() => {
                formRef.current?.submitForm();
              }}
              color="primary">{invoiceToEdit ? "Save Changes" : "Create Invoice"}</CButton>
          </>
        }
        visible={visible}
        onClose={() => {
          setInvoiceToEdit(undefined);
          setVisible(false);
        }}
      />
      <CButton color="primary" onClick={() => setVisible(true)}>
        New Invoice
      </CButton>
      <FlatfileImport />
      <InvoiceTable setInvoiceToEdit={setInvoiceToEdit} setVisible={setVisible} deleteInvoice={deleteInvoice} />
    </div>
  );
}

export default InvoicesPage;
