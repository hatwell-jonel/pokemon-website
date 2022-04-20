import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Header";
import Cards from "./Cards";

function Pokedex() {
  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = useState([]);
  const [api, setApi] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextApi, setNextApi] = useState();
  const [prevApi, setPrevApi] = useState();
  const [pokedex, setPokedex] = useState();

  const pokeFun = async () => {
    setLoading(true);
    const res = await axios.get(api);
    // console.log(res.data.results);
    setNextApi(res.data.next);
    setPrevApi(res.data.previous);
    getPokemon(res.data.results);
    setLoading(false);
  };

  const getPokemon = async (res) => {
    res.map(async (item) => {
      // console.log(item.url);
      const results = await axios.get(item.url);
      setPokemons((state) => {
        state = [...state, results.data];
        return state;
      });
    });
  };

  useEffect(() => {
    pokeFun();
  }, [api]);
  return (
    <>
      <Header />
      <div className="mtop pokedex">
        <div className="container content position-relative">
          <Cards
            pokemon={pokemons}
            loading={loading}
            infoPokemon={(poke) => setPokedex(poke)}
          />
        </div>

        <div className="btn-container text-center">
          {prevApi && (
            <button
              className="btn"
              onClick={() => {
                setPokemons([]);
                setApi(prevApi);
              }}
            >
              Prev
            </button>
          )}

          {nextApi && (
            <button
              className="btn"
              onClick={() => {
                setPokemons([]);
                setApi(nextApi);
              }}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Pokedex;
