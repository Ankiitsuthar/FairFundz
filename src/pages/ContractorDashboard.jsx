import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardActions,
  Typography,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

export default function ContractorDashboardPage() {
  const [assigned, setAssigned] = useState([
    { name: "Ravi Kumar", site: "Site A", empId: "W-1023" },
    { name: "Anita Sharma", site: "Site B", empId: "W-1041" },
  ]);

  const [newWorker, setNewWorker] = useState({ name: "", site: "", empId: "" });

  const handleAddWorker = () => {
    if (newWorker.name && newWorker.site && newWorker.empId) {
      setAssigned([...assigned, newWorker]);
      setNewWorker({ name: "", site: "", empId: "" }); // reset form
    } else {
      alert("Please fill all fields before adding a worker.");
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      <Typography variant="h5" fontWeight="600">
        Contractor Dashboard
      </Typography>

      {/* Assigned Workers */}
      <Card>
        <CardHeader title={<Typography variant="h6">Assigned Workers</Typography>} />
        <CardContent>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Site</TableCell>
                  <TableCell>Emp ID</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {assigned.map((w, index) => (
                  <TableRow key={index}>
                    <TableCell>{w.name}</TableCell>
                    <TableCell>{w.site}</TableCell>
                    <TableCell>{w.empId}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>

      {/* Add Worker Form */}
      <Card>
        <CardHeader title={<Typography variant="h6">Add Worker</Typography>} />
        <CardContent style={{ display: "grid", gap: "1rem", gridTemplateColumns: "1fr 1fr 1fr" }}>
          <TextField
            label="Worker Name"
            value={newWorker.name}
            onChange={(e) => setNewWorker({ ...newWorker, name: e.target.value })}
            fullWidth
          />
          <TextField
            label="Site"
            value={newWorker.site}
            onChange={(e) => setNewWorker({ ...newWorker, site: e.target.value })}
            fullWidth
          />
          <TextField
            label="Employee ID"
            value={newWorker.empId}
            onChange={(e) => setNewWorker({ ...newWorker, empId: e.target.value })}
            fullWidth
          />
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary" onClick={handleAddWorker}>
            Add Worker
          </Button>
        </CardActions>
      </Card>

      {/* Wage Report Submission */}
      <Card>
        <CardHeader title={<Typography variant="h6">Wage Report Submission</Typography>} />
        <CardContent style={{ display: "grid", gap: "1rem", gridTemplateColumns: "1fr 1fr 1fr" }}>
          <TextField fullWidth label="Month" placeholder="YYYY-MM" />
          <TextField fullWidth label="Site" placeholder="Site name" />
          <Button variant="outlined" component="label">
            Upload Report (CSV)
            <input type="file" accept=".csv" hidden />
          </Button>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="success">
            Submit Report
          </Button>
        </CardActions>
      </Card>

      {/* Compliance Status */}
      <Card>
        <CardHeader title={<Typography variant="h6">Compliance Status</Typography>} />
        <CardContent style={{ display: "grid", gap: "1rem", gridTemplateColumns: "1fr 1fr 1fr" }}>
          <Paper elevation={1} style={{ padding: "1rem" }}>
            <Typography fontWeight="500">KYC Verified</Typography>
            <Typography variant="body2" color="text.secondary">
              Status: Pending
            </Typography>
          </Paper>
          <Paper elevation={1} style={{ padding: "1rem" }}>
            <Typography fontWeight="500">Latest Wage Report</Typography>
            <Typography variant="body2" color="text.secondary">
              Status: Submitted
            </Typography>
          </Paper>
          <Paper elevation={1} style={{ padding: "1rem" }}>
            <Typography fontWeight="500">Contract Compliance</Typography>
            <Typography variant="body2" color="text.secondary">
              Status: In Review
            </Typography>
          </Paper>
        </CardContent>
      </Card>
    </div>
  );
}
