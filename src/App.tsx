import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import PartnershipForm from "./pages/partnershipApplication";
import NotFoundPage from "./pages/notFoundPage";
import ScrollToTop from "./components/ScrollToTop";
import InukaTerms from "./pages/inukaterms";
import PrivacyTerms from "./pages/privacyTerms";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/apply" element={<PartnershipForm />} />
        <Route
          path="/inuka-funds-terms-and-conditions"
          element={<InukaTerms />}
        />
        <Route path="/privacy-terms" element={<PrivacyTerms />} />

        {/* Add more routes as needed */}

        {/* 404 Page */}
        {/* 404 Page - Optional */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
