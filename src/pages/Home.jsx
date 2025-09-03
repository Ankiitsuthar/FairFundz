import Hero from "../components/Hero.jsx"
import HowItWorks from "../components/HowItWorks.jsx"
import CompaniesUsing from "../components/CompaniesUsing.jsx"

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <section className="section">
        <h2>Trusted by teams</h2>
        <p className="help">Join companies simplifying worker payouts today.</p>
        <div className="grid grid-2">
          <div className="card">Acme Logistics</div>
          <div className="card">Northstar Retail</div>
          <div className="card">Pixel Manufacturing</div>
          <div className="card">Urban Services Co.</div>
        </div>
      </section>
      <CompaniesUsing />
    </>
  )
}
