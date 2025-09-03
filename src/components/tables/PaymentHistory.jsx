import { Table, TableHead, TableBody, TableRow, TableCell, Paper, TableContainer } from "@mui/material"

export default function PaymentHistory({ rows = [] }) {
  const data = rows.length
    ? rows
    : [
        { date: "2025-08-01", amount: "₹1,200", company: "ABC Infra" },
        { date: "2025-08-08", amount: "₹1,200", company: "ABC Infra" },
        { date: "2025-08-15", amount: "₹1,200", company: "ABC Infra" },
      ]

  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="payment history">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Company</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((r, i) => (
            <TableRow key={i}>
              <TableCell>{r.date}</TableCell>
              <TableCell>{r.amount}</TableCell>
              <TableCell>{r.company}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
