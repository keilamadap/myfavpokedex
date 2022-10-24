import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./pages/App";
import PokemonDetails from "./pages/PokemonDetails";
import AboutMe from "./pages/AboutMe";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route exact path="/details/:id" element={<PokemonDetails />} />
        <Route exact path="/aboutme" element={<AboutMe />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
