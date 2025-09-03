import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#10B981" }, // emerald
    secondary: { main: "#F59E0B" }, // amber
    text: {
      primary: "#0F172A", // slate-900
      secondary: "#475569", // slate-600
    },
    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: ["Roboto", "system-ui", "Segoe UI", "Arial", "sans-serif"].join(","),
    h1: { fontWeight: 700, lineHeight: 1.2 },
    h2: { fontWeight: 600, lineHeight: 1.25 },
    body1: { lineHeight: 1.6 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { textTransform: "none", borderRadius: 8 },
      },
    },
  },
})

export default theme
