import { MantineProvider } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";

import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PageRoutes from "./pages/Routes";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "light",
          colors: {
            // override dark colors to change them for all components
            dark: [
              "#d5d7e0",
              "#acaebf",
              "#8c8fa3",
              "#666980",
              "#4d4f66",
              "#34354a",
              "#2b2c3d",
              "#1d1e30",
              "#0c0d21",
              "#01010a",
            ],
          },
        }}
      >
        <Header />
        <PageRoutes />
        <Footer />
      </MantineProvider>
    </BrowserRouter>
  );
}

export default App;
