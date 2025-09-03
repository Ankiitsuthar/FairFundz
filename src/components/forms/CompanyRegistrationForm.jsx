"use client"

import React from "react"
import { TextField, Button, Grid, MenuItem } from "@mui/material"

export default function CompanyRegistrationForm() {
  const [form, setForm] = React.useState({
    name: "",
    pan: "",
    tan: "",
    industry: "",
    hrName: "",
    hrEmail: "",
    hrPhone: "",
    paymentMethod: "Razorpay",
  })

  const methods = ["Razorpay", "Stripe", "UPI"]

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = (e) => {
    e.preventDefault()
    alert("Company registered (mock). You can integrate Razorpay/Stripe later.")
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <TextField name="name" label="Company Name" value={form.name} onChange={onChange} fullWidth required />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField name="pan" label="PAN Number" value={form.pan} onChange={onChange} fullWidth required />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField name="tan" label="TAN Number" value={form.tan} onChange={onChange} fullWidth />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField name="industry" label="Industry" value={form.industry} onChange={onChange} fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            select
            name="paymentMethod"
            label="Payment Method"
            value={form.paymentMethod}
            onChange={onChange}
            fullWidth
          >
            {methods.map((m) => (
              <MenuItem key={m} value={m}>
                {m}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item xs={12} md={4}>
          <TextField name="hrName" label="HR/Admin Name" value={form.hrName} onChange={onChange} fullWidth />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            type="email"
            name="hrEmail"
            label="HR/Admin Email"
            value={form.hrEmail}
            onChange={onChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField name="hrPhone" label="HR/Admin Phone" value={form.hrPhone} onChange={onChange} fullWidth />
        </Grid>
      </Grid>

      <div className="flex gap-3">
        <Button type="submit" variant="contained" color="primary">
          Register Company
        </Button>
        <Button type="button" variant="outlined" onClick={() => alert("Connect payment provider (mock).")}>
          Connect Payments
        </Button>
      </div>
    </form>
  )
}
