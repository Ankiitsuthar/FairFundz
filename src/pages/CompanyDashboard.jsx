const workers = [
  { id: "W-1001", name: "A. Kumar", role: "Driver", status: "Active" },
  { id: "W-1002", name: "S. Patel", role: "Picker", status: "Active" },
  { id: "W-1003", name: "N. Khan", role: "Security", status: "Inactive" },
]

export default function CompanyDashboard() {
  return (
    <section className="section">
      <h2>Company Dashboard</h2>
      <p className="help">Manage workers, view compliance, and run payouts.</p>
      <div className="card" style={{ overflowX: "auto" }}>
        <table className="table">
          <thead>
            <tr>
              <th>Worker ID</th>
              <th>Name</th>
              <th>Role</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {workers.map((w) => (
              <tr key={w.id}>
                <td>{w.id}</td>
                <td>{w.name}</td>
                <td>{w.role}</td>
                <td>
                  <span className="badge">{w.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
