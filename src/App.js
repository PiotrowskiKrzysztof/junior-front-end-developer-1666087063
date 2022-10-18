import "./App.css";
import AppWraper from "./components/organisms/AppWraper";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import GlobalStyles from "./theme/GlobalStyles";

function App() {
  return (
    <ThemeProvider {...{ theme }}>
      <GlobalStyles />
      <AppWraper />
    </ThemeProvider>
  );
}

export default App;
