import { Link, NavLink, useNavigate } from "react-router-dom"
import { Container, Button } from "@mui/material"
import { useAuth } from "../auth/AuthProvider"

const linkStyle = ({ isActive }) => ({
  fontWeight: isActive ? 700 : 500,
  color: isActive ? "var(--color-brand)" : "inherit",
})

export default function SiteHeader() {
  const auth = useAuth();
  const navigate = useNavigate();
  return (
    <nav className="nav" aria-label="Primary">
      <Container className="!px-0">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="brand">
            FairFundz
          </Link>
          <div className="nav-links">
            <NavLink to="/worker-register" style={linkStyle}>
              Worker
            </NavLink>
            {/* <NavLink to="/worker-dashboard" style={linkStyle}>
              Worker Dashboard
            </NavLink> */}
            <NavLink to="/company-register" style={linkStyle}>
              Company
            </NavLink>
            {/* <NavLink to="/company-dashboard" style={linkStyle}>
              Company Dashboard
            </NavLink> */}
            <NavLink to="/contractor-dashboard" style={linkStyle}>
              Contractor
            </NavLink>
            <NavLink to="/payments" style={linkStyle}>
              Payments
            </NavLink>
            <NavLink to="/compliance" style={linkStyle}>
              Compliance
            </NavLink>
            <NavLink to="/about-us" style={linkStyle}>
              About
            </NavLink>
            <NavLink to="/contact" style={linkStyle}>
              Contact
            </NavLink>
          </div>
          <div>
            {auth?.isAuthenticated ? (
              <Button size="small" variant="outlined" onClick={() => auth.logout()}>
                Logout
              </Button>
            ) : (
              <Button size="small" variant="contained" onClick={() => navigate("/login")}>Login</Button>
            )}
          </div>
        </div>
      </Container>
    </nav>
  )
}
