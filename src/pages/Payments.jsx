"use client"

import { useState } from "react"
import axios from "axios"
import { API_BASE } from "../config"

export default function Payments() {
  const [amount, setAmount] = useState("")
  const [to, setTo] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  async function submit(e) {
  e.preventDefault();
  setLoading(true);
  setError("");
  setSuccess("");

  try {
    const token = localStorage.getItem("token");

    const res = await axios.post(
      `${API_BASE}/api/payments`,
      { workerEmail: to, amount },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (res.data.success) {
      setSuccess(`✔ Payout created successfully. Payment ID: ${res.data.paymentId}`);
    }
  } catch (err) {
    setError(err.response?.data?.message || "Server error");
  } finally {
    setLoading(false);
  }
}


  return (
    <section className="section">
      <h2>Payments</h2>
      <p className="help">Create payouts and view recent transactions.</p>

      <form onSubmit={submit} className="grid" style={{ maxWidth: 520 }}>
        <label className="label" htmlFor="to">
          Worker Email
        </label>

        <input
          id="to"
          name="to"
          className="input"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          required
        />

        <label className="label" htmlFor="amount">
          Amount (₹)
        </label>
        <input
          id="amount"
          name="amount"
          type="number"
          className="input"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />

        <div>
          <button className="btn btn-primary" type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send payout"}
          </button>
        </div>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}

      <div className="section">
        <h3 style={{ margin: 0, fontSize: "1.1rem" }}>Recent</h3>
        <div className="card" style={{ overflowX: "auto", marginTop: "0.75rem" }}>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>To</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>P-204</td>
                <td>W-1002</td>
                <td>₹ 900</td>
                <td>
                  <span className="badge">Paid</span>
                </td>
              </tr>
              <tr>
                <td>P-205</td>
                <td>W-1001</td>
                <td>₹ 1200</td>
                <td>
                  <span className="badge">Pending</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
