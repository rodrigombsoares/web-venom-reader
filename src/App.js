import Index from "./components/Index.js";
import Navbar from "./components/Navbar.js";
import { ThemeProvider } from '@mui/material/styles';
import theme from "./style/theme.js";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Index />
    </ThemeProvider>
  );
}

export default App;
