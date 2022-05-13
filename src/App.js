import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useRoutes, BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { grey ,deepPurple } from '@mui/material/colors';
import './App.css';

import routes from "./routes";

const darkTheme = createTheme({
  palette:{
    primary: deepPurple,
    divider: deepPurple[700],
    background: {
      default: '#1d1056f7',
      paper: deepPurple[900],
    },
    text: {
      primary: '#fff',
      secondary: grey[500],
    },
    mode:'dark',
  }
})

const AppRouter = () => {
  const content = useRoutes(routes);
  return (
    content
  );
}

function App() {
  return (
    <HelmetProvider>
      <Helmet
        titleTemplate="%s | Casino"
        defaultTitle="Casino"
      />
      <ThemeProvider theme={darkTheme}>
        <Router>
          <AppRouter />
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
