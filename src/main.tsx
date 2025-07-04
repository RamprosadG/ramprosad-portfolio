import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MainLayout from "./components/MainLayout";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MainLayout />
  </StrictMode>
);
