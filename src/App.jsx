import { Analytics } from "@vercel/analytics/react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import DiagnosticPage from "./pages/DiagnosticPage.jsx";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/diagnostic" element={<DiagnosticPage />} />
        <Route
          path="/politique-de-confidentialite"
          element={<PrivacyPolicyPage />}
        />
      </Routes>

      <Analytics />
    </>
  );
}

export default App;