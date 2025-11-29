import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Typography,
  TextField,
} from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function update(key, value) {
    setForm((f) => ({ ...f, [key]: value }));
  }

 async function onSubmit(e) {
  e.preventDefault();
  setError(null);
  setLoading(true);

  try {
    const res = await axios.post("http://localhost:5000/api/auth/login", {
      email: form.email,
      password: form.password,
    });

    localStorage.setItem("token", res.data.token);

    // Extract role from returned user
    const role = res.data.user.role;

    if (role === "worker") {
      navigate("/worker-register");
    } else if (role === "company") {
      navigate("/company-dashboard");
    } else {
      setError("Unknown role. Contact admin.");
    }
  } catch (err) {
    setError(err.response?.data?.message || "Login failed");
  } finally {
    setLoading(false);
  }
}



  return (
    <Card sx={{ maxWidth: 500, margin: "auto", mt: 6, p: 2 }}>
      <CardHeader title="Login" subheader="Access your account" />
      <CardContent>
        {error && <Typography color="error">{error}</Typography>}

        <form onSubmit={onSubmit} style={{ display: "grid", gap: "20px" }}>
          <TextField
            label="Email"
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            required
            fullWidth
          />
          <TextField
            label="Password"
            type="password"
            value={form.password}
            onChange={(e) => update("password", e.target.value)}
            required
            fullWidth
          />

          <CardActions sx={{ justifyContent: "space-between" }}>
            <Typography variant="body2">
              Don’t have an account?{" "}
              <Link to="/signup" style={{ color: "#1976d2" }}>
                Sign Up
              </Link>
            </Typography>
            <Button type="submit" variant="contained" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </Button>
          </CardActions>
        </form>
      </CardContent>
    </Card>
  );
}


// import React, { useState } from "react";
// import {
//   Card, CardContent, CardHeader, TextField,
//   Button, Typography
// } from "@mui/material";

// export default function Login() {
//   const [form, setForm] = useState({ email: "", password: "" });

//   function handleChange(e) {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log("Login attempt:", form);
//     // TODO: call backend /auth/login here
//   }

//   return (
//     <Card sx={{ maxWidth: 400, margin: "2rem auto", padding: 2 }}>
//       <CardHeader title="Login" />
//       <CardContent>
//         <form onSubmit={handleSubmit} style={{ display: "grid", gap: "1rem" }}>
//           <TextField
//             label="Email"
//             name="email"
//             type="email"
//             value={form.email}
//             onChange={handleChange}
//             required
//           />
//           <TextField
//             label="Password"
//             name="password"
//             type="password"
//             value={form.password}
//             onChange={handleChange}
//             required
//           />
//           <Button type="submit" variant="contained" fullWidth>
//             Login
//           </Button>
//         </form>
//         <Typography variant="body2" sx={{ mt: 2 }}>
//           Don’t have an account? <a href="/signup">Sign up</a>
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// }

