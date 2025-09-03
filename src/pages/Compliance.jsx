import React from "react"
import { Typography, Button, Card, CardContent, CardHeader, Grid, Container } from "@mui/material"

export default function CompliancePage() {
  return (
    <main>
      <Container sx={{ py: 4 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Compliance & Transparency
        </Typography>

        <Grid container spacing={3}>
          {/* Legal Documents */}
          <Grid item xs={12} md={4}>
            <Card>
              <CardHeader title="Legal Documents" />
              <CardContent>
                <Grid container spacing={1} direction="column">
                  <Grid item>
                    <Button variant="outlined" fullWidth>
                      Fair Wage Policy (PDF)
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" fullWidth>
                      Terms of Service (PDF)
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" fullWidth>
                      Privacy Policy (PDF)
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>

          {/* Payment Verification */}
          <Grid item xs={12} md={4}>
            <Card>
              <CardHeader title="Payment Verification" />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  Blockchain ledger integration (optional) — coming soon. Verify authenticity of wage records with
                  immutable logs.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Govt Schemes */}
          <Grid item xs={12} md={4}>
            <Card>
              <CardHeader title="Govt. Schemes" />
              <CardContent>
                <Grid container spacing={1} direction="column">
                  <Grid item>
                    <Button variant="outlined" fullWidth>
                      EPFO Linking
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" fullWidth>
                      MGNREGA Support
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" fullWidth>
                      Compliance Report
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </main>
  )
}
