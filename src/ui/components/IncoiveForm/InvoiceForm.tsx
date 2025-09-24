import type { JSX } from "react";
import { Formik, Field, ErrorMessage, type FormikProps } from "formik";
import {
  CForm,
  CFormLabel,
  CFormInput,
  CFormSelect,
  CFormFeedback,
} from "@coreui/react";
import { type Invoice } from "../../../domain/Invoice";
import useInvoiceForm from "./useInvoiceForm";

const InvoiceForm = ({ saveNewInvoice, formRef, invoiceToEdit }: { saveNewInvoice: (invoice: Invoice) => void, formRef: React.Ref<FormikProps<Invoice>>, invoiceToEdit?: Invoice }): JSX.Element => {
  const { validationSchema } = useInvoiceForm();

  return (
    <Formik
      innerRef={formRef}
      initialValues={{
        id: invoiceToEdit?.id || crypto.randomUUID(),
        client: invoiceToEdit?.client || "",
        date: invoiceToEdit?.date || new Date().toISOString().split('T')[0],
        amount: invoiceToEdit?.amount || 0,
        status: invoiceToEdit?.status || "Unpaid",
      }}
      validationSchema={validationSchema}
      onSubmit={(values: Invoice, { resetForm }) => {
        saveNewInvoice(values);
        resetForm();
      }}
    >
      {({ errors, touched, handleSubmit }) => (
        <CForm className="flex flex-col gap-3" onSubmit={handleSubmit}>
          {/* Client */}
          <div>
            <CFormLabel htmlFor="client">Client</CFormLabel>
            <Field
              as={CFormInput}
              id="client"
              name="client"
              invalid={touched.client && !!errors.client}
            />
            <ErrorMessage
              name="client"
              component={CFormFeedback}
              className="d-block"
            />
          </div>

          {/* Date */}
          <div>
            <CFormLabel htmlFor="date">Date</CFormLabel>
            <Field
              as={CFormInput}
              type="date"
              id="date"
              name="date"
              invalid={touched.date && !!errors.date}
            />
            <ErrorMessage
              name="date"
              component={CFormFeedback}
              className="d-block"
            />
          </div>

          {/* Amount */}
          <div>
            <CFormLabel htmlFor="amount">Amount</CFormLabel>
            <Field
              as={CFormInput}
              type="number"
              id="amount"
              name="amount"
              invalid={touched.amount && !!errors.amount}
            />
            <ErrorMessage
              name="amount"
              component={CFormFeedback}
              className="d-block"
            />
          </div>

          {/* Status */}
          <div>
            <CFormLabel htmlFor="status">Status</CFormLabel>
            <Field
              as={CFormSelect}
              id="status"
              name="status"
              invalid={touched.status && !!errors.status}
            >
              <option value="Paid">Paid</option>
              <option value="Unpaid">Unpaid</option>
            </Field>
            <ErrorMessage
              name="status"
              component={CFormFeedback}
              className="d-block"
            />
          </div>
        </CForm>
      )}
    </Formik>
  );
};

export default InvoiceForm;
