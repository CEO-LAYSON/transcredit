import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        {/* 404 Page - Optional */}
        <Route path="*" element={<div>Ukurasa haupo</div>} />
      </Routes>
    </BrowserRouter>
  );
}
