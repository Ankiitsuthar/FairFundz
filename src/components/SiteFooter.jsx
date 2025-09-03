import { Link } from "react-router-dom"

export default function SiteFooter() {
  return (
    <div className="nav" role="contentinfo" aria-label="Site footer">
      <div style={{ color: "var(--color-muted)" }}>© {new Date().getFullYear()} FairFundz. All rights reserved.</div>
      <div className="nav-links">
        <Link to="/about-us">About</Link>
        <Link to="/contact">Contact</Link>
        <a href="https://example.com/privacy" target="_blank" rel="noreferrer">
          Privacy
        </a>
      </div>
    </div>
  )
}
