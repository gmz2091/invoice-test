
# 🧪 Frontend Developer Challenge - Invoice Module

This project is a **Frontend Developer Challenge** solution: an invoicing module built with **React**, **Vite**, **CoreUI Pro**, **Formik**, **Yup**, **Zustand**, **AG Grid**, and **TailwindCSS**. It allows users to **view, filter, and create invoices** with a fully validated form.

---

## 🏗️ Tech Stack

- **React 18** + **Vite**  
- **CoreUI Pro** – UI components  
- **TailwindCSS** – Layout, spacing, and responsive styling  
- **Formik** + **Yup** – Form handling and validation  
- **Zustand** – State management  
- **AG Grid** – Invoice table  

---

## 📦 Features

### 1. Invoice List Table
- Display invoices in a table with **AG Grid**.
- Columns:
  - Invoice Number
  - Client Name
  - Date
  - Status (Paid / Unpaid)
  - Amount (USD)
- Works with real data from **backend**.

---

### 2. Invoice Form
- Add a **new invoice** through a modal or dedicated page.
- Uses **Formik + Yup** for validation:
  - All fields required
  - Amount must be > 0
- Fields:
  - Client Name (text input)
  - Date (date picker)
  - Amount (number input)
  - Status (dropdown: Paid / Unpaid)
- Saves invoices in **local state with Zustand**.

---

### 3. Design Consistency
- CoreUI Pro components for inputs, buttons, and layout.
- TailwindCSS for spacing, flex layout, and responsiveness.
- Matches Figma/Design specifications closely.

---

## ⚙️ Installation

1. Clone the repository:

```bash
git clone https://github.com/gmz2091/invoice-test.git
cd invoice-test
````

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open in your browser:

```
http://localhost:5173
```

---

## 📝 Project Structure

```
src/
 ├─ application/
 │    └─ usecases/       # Business logic (createInvoice, etc.)
 ├─ domain/
 │    └─ Invoice.ts      # Invoice type/interface
 ├─ features/
 │    └─ invoice/
 │         ├─ InvoiceForm.tsx
 │         ├─ useInvoiceForm.ts
 │         └─ InvoiceTable.tsx
 ├─ store/
 │    └─ invoiceStore.ts # Zustand store for invoices
 └─ main.tsx             # App entry point
```

---

## ✅ Usage

1. **View Invoices:** See existing invoices in the table with filtering.
2. **Add Invoice:** Fill out the invoice form; validation ensures correctness.
3. **State Management:** All invoices are saved locally using Zustand.

---

## 💡 Notes / Assumptions

* CoreUI Pro components are styled with **TailwindCSS** for layout.
* Formik `<Form>` is used for form submission; CoreUI inputs are used for styling.
* `InvoiceForm.tsx` avoids nested `<form>` warnings by connecting Formik’s `handleSubmit` to `CForm`.
* Validation errors are shown inline using **CFormFeedback**.
