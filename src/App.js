import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/css/index.css";
// import Home from "./Components/Home";
// import News from "./Components/News";
// import Pokedex from "./Components/Pokedex";
// import PokemonInfo from "./Components/Pokedex/Info";
// import ErrorPage from "./Components/ErrorPage";

// ROUTING PRATICE
import Header from "./Router/Header";
import About from "./Router/About";
import Services from "./Router/Service";
import Home from "./Router/Home";
import Error from "./Router/Error";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="*" exact element={<Error />} />

          {/* <Route path="/" exact element={<Home />} />
        <Route path="/pokedex" exact element={<Pokedex />} />
        <Route path="/pokedex/:name" element={<PokemonInfo />} />
        <Route path="*" exact element={<ErrorPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
