// WorkerRegistrationForm.js
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
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
import { useAuth } from "../auth/AuthProvider";
import { API_BASE } from "../config";

export default function WorkerRegistrationForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
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
  const auth = useAuth();

  function update(key, value) {
    setForm((f) => ({ ...f, [key]: value }));
  }

async function onSubmit(e) {
  e.preventDefault();
  setError(null);

  if (!form.name || !form.email || !form.aadhaar || !form.accountNumber || !form.ifsc) {
    setError("Please fill all required fields.");
    return;
  }

  setLoading(true);

  try {
    // Step 1: Check if worker already exists
    const checkRes = await fetch(`${API_BASE}/check-user`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: form.email,
        name: form.name,
      }),
    });

    const checkData = await checkRes.json();
    console.log("Check Result:", checkData);

    if (checkData.exists) {
      setError(`User already registered as ${checkData.type}`);
      setLoading(false);
      return;
    }

    // Step 2: Register worker
    const res = await fetch(`${API_BASE}/api/worker/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (data?.token) {
      localStorage.setItem("token", data.token);
      try { auth.login(data.token); } catch (e) { }
    }
    console.log("Register response:", data);

    if (!res.ok) {
      setError(data.error || "Registration failed");
    } else {
      navigate("/worker-dashboard");
    }
  } catch (err) {
    console.error(err);
    setError("Server error: Unable to register");
  }

  setLoading(false);
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
            label="E-mail "
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
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

          <CardActions sx={{ justifyContent: "space-between", mt: 2 }}>
            <Typography variant="body2">
              Already have an account?{" "}
              <Link to="/worker-login" style={{ color: "#1976d2", textDecoration: "none" }}>
                Login
              </Link>
            </Typography>

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
