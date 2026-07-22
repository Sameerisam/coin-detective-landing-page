import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "@/pages/LandingPage";
import PrivacyPolicyPage from "@/pages/PrivacyPolicyPage";
import TermsOfServicePage from "@/pages/TermsOfServicePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-services" element={<TermsOfServicePage />} />
        <Route path="/terms-of-service" element={<Navigate to="/terms-of-services" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
