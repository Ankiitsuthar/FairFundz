"use client"

import React from "react"
import { TextField, Button, Grid, MenuItem } from "@mui/material"

export default function WorkerRegistrationForm() {
  const [form, setForm] = React.useState({
    name: "",
    mobile: "",
    aadhaar: "",
    accountNumber: "",
    ifsc: "",
    industry: "",
    employer: "",
    frequency: "Monthly",
    mode: "Bank",
    otp: "",
  })

  const industries = ["Construction", "Security", "Delivery", "Manufacturing", "Other"]
  const freqs = ["Daily", "Weekly", "Monthly"]
  const modes = ["Bank", "UPI", "Cash"]

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = (e) => {
    e.preventDefault()
    alert("Worker registered (mock). You can wire real APIs later.")
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField name="name" label="Full Name" value={form.name} onChange={onChange} fullWidth required />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField name="mobile" label="Mobile Number" value={form.mobile} onChange={onChange} fullWidth required />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            name="aadhaar"
            label="Aadhaar Number"
            value={form.aadhaar}
            onChange={onChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField name="otp" label="OTP (mock)" value={form.otp} onChange={onChange} fullWidth />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            name="accountNumber"
            label="Bank Account Number"
            value={form.accountNumber}
            onChange={onChange}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField name="ifsc" label="IFSC Code" value={form.ifsc} onChange={onChange} fullWidth required />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            select
            name="industry"
            label="Industry"
            value={form.industry}
            onChange={onChange}
            fullWidth
            required
          >
            {industries.map((i) => (
              <MenuItem key={i} value={i}>
                {i}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField name="employer" label="Employer Name" value={form.employer} onChange={onChange} fullWidth />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            select
            name="frequency"
            label="Payment Frequency"
            value={form.frequency}
            onChange={onChange}
            fullWidth
          >
            {freqs.map((f) => (
              <MenuItem key={f} value={f}>
                {f}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField select name="mode" label="Payment Mode" value={form.mode} onChange={onChange} fullWidth>
            {modes.map((m) => (
              <MenuItem key={m} value={m}>
                {m}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>

      <div className="flex gap-3">
        <Button type="submit" variant="contained" color="primary">
          Register
        </Button>
        <Button type="button" variant="outlined" onClick={() => alert("OTP sent (mock).")}>
          Send OTP
        </Button>
      </div>
    </form>
  )
}
