import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Typography,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Grid,
  Alert,
} from "@mui/material";
import { API_BASE } from "../config";

export default function CompanyRegistrationForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    companyName: "",
    pan: "",
    industry: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    paymentMethod: "razorpay",
  });
  const [error, setError] = useState(null);

  function update(key, value) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setError(null);
    if (!form.companyName || !form.pan || !form.contactEmail) {
      setError("Please fill all required fields.");
      return;
    }
    setLoading(true);
    // Step 1: Check if company already exists
  const checkRes = await fetch(`${API_BASE}/check-user`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: form.contactEmail,
      pan: form.pan,
    }),
  });
  const checkData = await checkRes.json();

  if (checkData.exists) {
    setLoading(false);
    setError(`User already registered as ${checkData.type}`);
    return;
  }

  // Step 2: Proceed with registration
    const res = await fetch(`${API_BASE}/api/company/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });
  const data = await res.json();

  setLoading(false);
  if (res.ok) {
    navigate("/api/company-dashboard/dashboard");
  } else {
    setError(data.error || "Registration failed.");
  }
    // TODO: backend + payments integration
    // await new Promise((r) => setTimeout(r, 700));
    // setLoading(false);
    // navigate("/company-dashboard");
  }

  return (
    <Card sx={{ maxWidth: 900, margin: "2rem auto", padding: 2 }}>
      <CardHeader
        title="Company Registration"
        subheader="Set up your organization to manage workers and process wages."
      />
      <CardContent>
        <form onSubmit={onSubmit}>
          <Box display="flex" flexDirection="column" gap={3}>
            {error && <Alert severity="error">{error}</Alert>}

            <TextField
              label="Company Name"
              value={form.companyName}
              onChange={(e) => update("companyName", e.target.value)}
              required
              fullWidth
            />

            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <TextField
                  label="PAN/TAN Number"
                  value={form.pan}
                  onChange={(e) => update("pan", e.target.value)}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={8}>
                <TextField
                  label="Industry"
                  value={form.industry}
                  onChange={(e) => update("industry", e.target.value)}
                  placeholder="e.g., Construction"
                  fullWidth
                />
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <TextField
                  label="HR/Admin Contact"
                  value={form.contactName}
                  onChange={(e) => update("contactName", e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  label="Email"
                  type="email"
                  value={form.contactEmail}
                  onChange={(e) => update("contactEmail", e.target.value)}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  label="Phone"
                  value={form.contactPhone}
                  onChange={(e) => update("contactPhone", e.target.value)}
                  fullWidth
                />
              </Grid>
            </Grid>

            <FormControl component="fieldset">
              <FormLabel component="legend">Payment Method</FormLabel>
              <RadioGroup
                row
                value={form.paymentMethod}
                onChange={(e) => update("paymentMethod", e.target.value)}
              >
                <FormControlLabel
                  value="razorpay"
                  control={<Radio />}
                  label="Razorpay (Recommended)"
                />
                <FormControlLabel value="upi" control={<Radio />} label="UPI" />
                <FormControlLabel value="stripe" control={<Radio />} label="Stripe" />
              </RadioGroup>
              <Typography variant="caption" color="textSecondary">
                Integration is placeholder in this MVP.
              </Typography>
            </FormControl>
          </Box>

          <CardActions sx={{ justifyContent: "flex-end", marginTop: 2 }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Create Organization"}
            </Button>
          </CardActions>
        </form>
      </CardContent>
    </Card>
  );
}
