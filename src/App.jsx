import { Routes, Route } from "react-router-dom"
import SiteHeader from "./components/SiteHeader.jsx"
import SiteFooter from "./components/SiteFooter.jsx"

import LoginPage from "./pages/Login.jsx";
import SignupPage from "./pages/Signup.jsx";
import { RequireAuth } from "./auth/AuthProvider";
import Home from "./pages/Home.jsx"
import WorkerRegister from "./pages/WorkerRegister.jsx"
import WorkerDashboard from "./pages/WorkerDashboard.jsx"
import CompanyRegister from "./pages/CompanyRegister.jsx"
import CompanyDashboard from "./pages/CompanyDashboard.jsx"
import ContractorDashboard from "./pages/ContractorDashboard.jsx"
import Payments from "./pages/Payments.jsx"
import Compliance from "./pages/Compliance.jsx"
import AboutUs from "./pages/AboutUs.jsx"
import Contact from "./pages/Contact.jsx"

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="container">
          <SiteHeader />
        </div>
      </header>

      <main className="container" style={{ paddingTop: "1rem", paddingBottom: "2rem" }}>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />

          {/* Protected routes - require authentication */}
          <Route path="/worker-register" element={<RequireAuth><WorkerRegister /></RequireAuth>} />
          <Route path="/worker-dashboard" element={<RequireAuth><WorkerDashboard /></RequireAuth>} />
          <Route path="/company-register" element={<RequireAuth><CompanyRegister /></RequireAuth>} />
          <Route path="/company-dashboard" element={<RequireAuth><CompanyDashboard /></RequireAuth>} />
          <Route path="/contractor-dashboard" element={<RequireAuth><ContractorDashboard /></RequireAuth>} />
          <Route path="/payments" element={<RequireAuth><Payments /></RequireAuth>} />
          <Route path="/compliance" element={<RequireAuth><Compliance /></RequireAuth>} />
          <Route path="/about-us" element={<RequireAuth><AboutUs /></RequireAuth>} />
          <Route path="/contact" element={<RequireAuth><Contact /></RequireAuth>} />

        </Routes>
      </main>

      <footer className="footer">
        <div className="container">
          <SiteFooter />
        </div>
      </footer>
    </div>
  )
}
