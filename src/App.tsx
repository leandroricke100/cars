import { ThemeProvider, createTheme } from "@mui/material";
import "./App.scss";
import Homepage from "./pages/Homepage/Homepage";
import { StyleProvider } from "./providers/StyleProvider";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1c69d4",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyleProvider>
        <Homepage />
      </StyleProvider>
    </ThemeProvider>
  );
}

export default App;
