// import { Link } from "react-router-dom"
// import { Container, Stack, Button, Typography } from "@mui/material"
// import WorkerRegistrationForm from "../pages/WorkerRegister"
// import CompanyRegistrationForm from "../pages/CompanyRegister"
// export default function Hero() {
//    const onSubmit={
    
//    }
//   return (
//     <section className="hero">
//       <Container>
//         <Typography variant="h1" className="text-balance" sx={{ fontSize: { xs: 28, md: 36 } }}>
//           Fast, Fair Payouts for Every Worker
//         </Typography>
//         <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
//           Onboard workers, track compliance, and send transparent payments with confidence.
//         </Typography>
//         <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap" sx={{ mt: 2 }}>
//           <Button component={Link} to="/worker-register" variant="contained" color="primary">
//             Register Worker
//           </Button>
//           <Button component={Link} to="/company-register" variant="outlined" color="primary">
//             Register Company
//           </Button>
//         </Stack>
//       </Container>
//     </section>
//   )
// }

// New code 

import { Container, Stack, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  function handleRegister(type) {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/signup");  // or "/login" if you prefer
    } else {
      if (type === "worker") navigate("/worker-register");
      if (type === "company") navigate("/company-register");
    }
  }

  return (
    <section className="hero">
      <Container>
        <Typography variant="h1" sx={{ fontSize: { xs: 28, md: 36 } }}>
          Fast, Fair Payouts for Every Worker
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
          Onboard workers, track compliance, and send transparent payments with confidence.
        </Typography>

        <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
          <Button variant="contained" color="primary" onClick={() => handleRegister("worker")}>
            Register Worker
          </Button>

          <Button variant="outlined" color="primary" onClick={() => handleRegister("company")}>
            Register Company
          </Button>
        </Stack>
      </Container>
    </section>
  );
}
