// WorkerRegistrationForm.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

export default function WorkerRegistrationForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    aadhaar: "",
    accountNumber: "",
    ifsc: "",
    industry: "",
    employerName: "",
    paymentFrequency: "",
    paymentMode: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function update(key, value) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setError(null);
    if (!form.name || !form.mobile || !form.aadhaar || !form.accountNumber || !form.ifsc) {
      setError("Please fill all required fields.");
      return;
    }
    setLoading(true);
    // Step 1: Check if worker already exists
  const checkRes = await fetch("http://localhost:5000/check-user", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: form.email,    // if you replace mobile with email
      aadhaar: form.aadhaar,
    }),
  });
  const checkData = await checkRes.json();

  if (checkData.exists) {
    setLoading(false);
    setError(`User already registered as ${checkData.type}`);
    return;
  }

  // Step 2: Proceed with registration
  const res = await fetch("http://localhost:5000/worker-register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });
  const data = await res.json();

  setLoading(false);
  
  if (res.ok) {
    navigate("/worker-dashboard");
  } else {
    setError(data.error || "Registration failed.");
  }
    // await new Promise((r) => setTimeout(r, 700));
    // setLoading(false);
    // navigate("/worker-dashboard");
  }

  return (
    <Card sx={{ maxWidth: 600, margin: "auto", mt: 4, p: 2 }}>
      <CardHeader
        title="Worker Registration"
        subheader="Enter your details to create your FairFundz account."
      />
      <CardContent>
        <form onSubmit={onSubmit} style={{ display: "grid", gap: "20px" }}>
          {error && (
            <Typography variant="body2" color="error">
              {error}
            </Typography>
          )}

          <TextField
            label="Full Name"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            required
            fullWidth
          />

          <TextField
            label="Mobile Number"
            type="tel"
            value={form.mobile}
            onChange={(e) => update("mobile", e.target.value)}
            required
            fullWidth
          />

          <TextField
            label="Aadhaar Number"
            value={form.aadhaar}
            onChange={(e) => update("aadhaar", e.target.value)}
            required
            fullWidth
          />

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            <TextField
              label="Bank Account Number"
              value={form.accountNumber}
              onChange={(e) => update("accountNumber", e.target.value)}
              required
              fullWidth
            />
            <TextField
              label="IFSC Code"
              value={form.ifsc}
              onChange={(e) => update("ifsc", e.target.value)}
              required
              fullWidth
            />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            <FormControl fullWidth>
              <InputLabel>Industry</InputLabel>
              <Select
                value={form.industry}
                onChange={(e) => update("industry", e.target.value)}
              >
                <MenuItem value="construction">Construction</MenuItem>
                <MenuItem value="security">Security</MenuItem>
                <MenuItem value="delivery">Delivery</MenuItem>
                <MenuItem value="manufacturing">Manufacturing</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FormControl>

            <TextField
              label="Employer Name"
              value={form.employerName}
              onChange={(e) => update("employerName", e.target.value)}
              fullWidth
            />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
            <FormControl fullWidth>
              <InputLabel>Payment Frequency</InputLabel>
              <Select
                value={form.paymentFrequency}
                onChange={(e) => update("paymentFrequency", e.target.value)}
              >
                <MenuItem value="daily">Daily</MenuItem>
                <MenuItem value="weekly">Weekly</MenuItem>
                <MenuItem value="monthly">Monthly</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel>Payment Mode</InputLabel>
              <Select
                value={form.paymentMode}
                onChange={(e) => update("paymentMode", e.target.value)}
              >
                <MenuItem value="bank">Bank Transfer</MenuItem>
                <MenuItem value="upi">UPI</MenuItem>
                <MenuItem value="cash">Cash</MenuItem>
              </Select>
            </FormControl>
          </div>

          <CardActions sx={{ justifyContent: "flex-end" }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Create Account"}
            </Button>
          </CardActions>
        </form>
      </CardContent>
    </Card>
  );
}
