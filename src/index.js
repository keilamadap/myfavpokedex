import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import PokemonDetails from "./pages/PokemonDetails";
import Pokedex from "./components/Pokedex";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route element={<App />}>
          <Route exact path="/" element={<Pokedex />} />
          <Route exact path="/details/:id" element={<PokemonDetails />} />
        </Route>
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
