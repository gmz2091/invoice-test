import { useEffect, type JSX, useState, useRef } from 'react';
import { useInvoiceStore } from "../../store/invoiceStore";
import { getInvoices } from "../../application/usecases/getInvoices";
import { FlatfileImport, InvoiceForm, InvoiceTable, Modal } from "../components";
import { CButton } from "@coreui/react";
import { createInvoice } from '../../application/usecases/createInvoice';
import type { FormikProps } from 'formik';
import type { Invoice } from '../../domain/Invoice';

const InvoicesPage = (): JSX.Element => {
  const [visible, setVisible] = useState(false);
  const setInvoices = useInvoiceStore((state) => state.setInvoices);
  const formRef = useRef<FormikProps<Invoice>>(null);



  useEffect(() => {
    getInvoices().then(setInvoices);
  }, [setInvoices]);

  return (
    <div className="p-4 flex flex-col gap-6">
      <h1 className="text-2xl font-bold">Invoices</h1>
      <Modal
        title="Create a new Invoice"
        body={<InvoiceForm saveNewInvoice={
          (invoice: Invoice) => {
            createInvoice(invoice).then(() => {
              setVisible(false);
            });
          }
        } formRef={formRef} />}
        footer={
          <>
            <CButton color="secondary" onClick={() => setVisible(false)}>
              Close
            </CButton>
            <CButton
              onClick={() => {
                formRef.current?.submitForm();
              }}
              color="primary">Save changes</CButton>
          </>
        }
        visible={visible}
        onClose={() => setVisible(false)}
      />
      <CButton color="primary" onClick={() => setVisible(true)}>
        New Invoice
      </CButton>
      <FlatfileImport />
      <InvoiceTable />
    </div>
  );
}

export default InvoicesPage;
