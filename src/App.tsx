import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import PartnershipForm from "./pages/partnershipApplication";
//import NotFoundPage from "./pages/notFoundPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/apply" element={<PartnershipForm />} />
        {/* 404 Page - Optional
        <Route path="*" element={<NotFoundPage />} />
         */}
      </Routes>
    </BrowserRouter>
  );
}
