import { Container, Box } from "@mui/material"

export default function CompaniesUsing() {
  return (
    <section className="section bg-white">
      <Container>
        <h2 className="text-xl font-semibold">Companies Using FairFundz</h2>
        <p className="help">Trusted by organizations focused on fairness and transparency.</p>
        <Box className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="flex items-center justify-center rounded-md border border-slate-200 bg-white p-6 text-sm text-slate-600"
            >
              Logo {i + 1}
            </div>
          ))}
        </Box>
      </Container>
    </section>
  )
}
