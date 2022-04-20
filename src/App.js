import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/css/index.css";
import Home from "./Components/Home";
import News from "./Components/News";
import Pokedex from "./Components/Pokedex";
import PokemonInfo from "./Components/Pokedex/Info";
import ErrorPage from "./Components/ErrorPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/pokemon-website" element={<Home />} />
        <Route path="/pokemon-website/pokedex" element={<Pokedex />} />
        <Route path="*" exact element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
