import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { CuisineProvider } from "./context/cuisine-context.jsx";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <ChakraProvider>
      <CuisineProvider>
        <App />
      </CuisineProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
