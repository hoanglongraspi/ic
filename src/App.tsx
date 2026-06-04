import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ScrollToTop from "./components/ScrollToTop";

import HomePage from "./pages/HomePage";
import SubmissionPage from "./pages/SubissionPage.tsx";
import Calender from "./pages/Calender";
import RegistrationPage from "./pages/RegistrationPage";
import ProgramPage from "./pages/ProgramPage";
import OrganizationPage from "./pages/OrganizationPage";
import ProgramCommitteePage from "./pages/ProgramCommitteePage";
import TravelPage from "./pages/TravelPage";
import SponsorsPage from "./pages/SponsorsPage";
import PastConferencesPage from "./pages/PastConferencesPage";
import ContactPage from "./pages/ContactPage";
import AdminPage from "./pages/AdminPage";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/submission" element={<SubmissionPage />} />
          <Route path="/important-dates" element={<Calender />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/program" element={<ProgramPage />} />
          <Route path="/organization" element={<OrganizationPage />} />
          <Route path="/program-committee" element={<ProgramCommitteePage />} />
          <Route path="/travel" element={<TravelPage />} />
          <Route path="/sponsors" element={<SponsorsPage />} />
          <Route path="/past-conferences" element={<PastConferencesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}
