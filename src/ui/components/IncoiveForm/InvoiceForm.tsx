import type { JSX } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  CForm,
  CFormLabel,
  CFormInput,
  CFormSelect,
  CButton,
  CFormFeedback,
} from "@coreui/react";

import { createInvoice } from "../../../application/usecases/createInvoice";
import { type Invoice } from "../../../domain/Invoice";
import useInvoiceForm from "./useInvoiceForm";

const InvoiceForm = (): JSX.Element => {
  const { validationSchema } = useInvoiceForm();

  return (
    <Formik
      initialValues={{
        id: crypto.randomUUID(),
        client: "",
        date: "",
        amount: 0,
        status: "Unpaid",
      }}
      validationSchema={validationSchema}
      onSubmit={(values: Invoice, { resetForm }) => {
        createInvoice(values);
        resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <CForm className="flex flex-col gap-3">
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

            {/* Submit */}
            <CButton type="submit" color="primary">
              Add Invoice
            </CButton>
          </CForm>
        </Form>
      )}
    </Formik>
  );
};

export default InvoiceForm;
