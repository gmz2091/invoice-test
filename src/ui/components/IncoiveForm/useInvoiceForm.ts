import * as Yup from 'yup';

const useInvoiceForm = () => {
  const validationSchema = Yup.object({
    client: Yup.string().required("Required"),
    date: Yup.date().required("Required"),
    amount: Yup.number().positive().required("Required"),
    status: Yup.string().oneOf(["Paid", "Unpaid"]).required("Required"),
  });

  return { validationSchema };
};

export default useInvoiceForm;
