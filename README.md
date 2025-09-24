This project is a **Frontend Developer Challenge** solution: an invoicing module built with **React**, **Vite**, **CoreUI Pro**, **Formik**, **Yup**, **Zustand**, **AG Grid**, and **TailwindCSS**. It allows users to **view, filter, and create invoices** with a fully validated form.

---

## 🏗️ Tech Stack

- **React 18** + **Vite**  
- **CoreUI Pro** – UI components  
- **TailwindCSS** – Layout, spacing, and responsive styling  
- **Formik** + **Yup** – Form handling and validation  
- **Zustand** – State management  
- **AG Grid** – Invoice table  
- **Storybook** – Component isolation (optional)  
- **Flatfile** – CSV import (optional)  

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
- Filter by **status** and **date range**.
- Supports **mock data** or JSON API.

**Example Screenshot:**

![Invoice Table Screenshot](./screenshots/invoice-table.png)

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

**Example Form Screenshot:**

![Invoice Form Screenshot](./screenshots/invoice-form.png)

---

### 3. Design Consistency
- CoreUI Pro components for inputs, buttons, and layout.
- TailwindCSS for spacing, flex layout, and responsiveness.
- Matches Figma/Design specifications closely.

---

### 4. Optional Features
- **CSV Import:** Integrate Flatfile to upload invoices.
- **Storybook:** Document components like `InvoiceForm` or `InvoiceTable`.

---

## ⚙️ Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/invoicing-module.git
cd invoicing-module
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
3. **Optional CSV Import:** Upload invoices via CSV.
4. **State Management:** All invoices are saved locally using Zustand.

---

## 🧪 Evaluation Criteria

| Category              | Description                                        |
| --------------------- | -------------------------------------------------- |
| 🔧 Technical Accuracy | Clean, modular code following best practices       |
| 🎨 UI Consistency     | CoreUI + Tailwind matches design                   |
| ⚙️ Functionality      | Invoice table, form, and validation work correctly |
| 📦 State Management   | Proper use of Zustand                              |
| ✅ Form Validation     | Formik + Yup validation implemented                |
| 📚 Documentation      | Clear README and component documentation           |
| 🌍 Bonus              | CSV import via Flatfile or Storybook components    |

---

## 💡 Notes / Assumptions

* This project uses **mock data** for invoices.
* CoreUI Pro components are styled with **TailwindCSS** for layout.
* Formik `<Form>` is used for form submission; CoreUI inputs are used for styling.
* `InvoiceForm.tsx` avoids nested `<form>` warnings by connecting Formik’s `handleSubmit` to `CForm`.
* Validation errors are shown inline using **CFormFeedback**.

---

## 🔗 Links

* **Live Demo (optional):** \[Vercel/Netlify link]

