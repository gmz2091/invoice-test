import { ModuleRegistry, AllCommunityModule } from "ag-grid-community";
import { FlatfileProvider } from "@flatfile/react";
import '@coreui/coreui/dist/css/coreui.min.css'
import './assets/css/tailwind.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'

ModuleRegistry.registerModules([AllCommunityModule]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FlatfileProvider publishableKey={import.meta.env.VITE_FLATFILE_API_KEY!}>
      <App />
    </FlatfileProvider>
  </StrictMode>,
)
