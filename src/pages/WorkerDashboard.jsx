import React from "react"

const rows = [
  { id: "P-001", amount: 1200, date: "2025-08-15", status: "Paid" },
  { id: "P-002", amount: 950, date: "2025-09-01", status: "Pending" },
  { id: "P-003", amount: 780, date: "2025-09-10", status: "Scheduled" },
]

export default function WorkerDashboard() {
  // Function to generate and download salary slip
  const handleDownload = (row) => {
    const content = `
      FairFundz - Salary Slip
      ------------------------
      Payout ID : ${row.id}
      Amount    : ₹ ${row.amount}
      Date      : ${row.date}
      Status    : ${row.status}
      
      This is a system-generated salary slip.
    `

    const blob = new Blob([content], { type: "text/plain" })
    const link = document.createElement("a")
    link.href = URL.createObjectURL(blob)
    link.download = `SalarySlip-${row.id}.txt`
    link.click()
  }

  return (
    <section className="section">
      <h2>Worker Dashboard</h2>
      <p className="help">Your recent payouts and status.</p>
      <div className="card" style={{ overflowX: "auto" }}>
        <table className="table">
          <thead>
            <tr>
              <th>Payout ID</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id}>
                <td>{r.id}</td>
                <td>₹ {r.amount}</td>
                <td>{r.date}</td>
                <td>
                  <span className="badge">{r.status}</span>
                </td>
                <td>
                  <button className="button is-small is-link" onClick={() => handleDownload(r)}>
                    Download Slip
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
