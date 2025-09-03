import { Routes, Route } from "react-router-dom"
import SiteHeader from "./components/SiteHeader.jsx"
import SiteFooter from "./components/SiteFooter.jsx"

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
          <Route path="/" element={<Home />} />
          <Route path="/worker-register" element={<WorkerRegister />} />
          <Route path="/worker-dashboard" element={<WorkerDashboard />} />
          <Route path="/company-register" element={<CompanyRegister />} />
          <Route path="/company-dashboard" element={<CompanyDashboard />} />
          <Route path="/contractor-dashboard" element={<ContractorDashboard />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
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
