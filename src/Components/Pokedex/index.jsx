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

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import Header from "../Header";

// function Pokedex() {
//   const POKEMON_API = "https://pokeapi.co/api/v2/pokemon";
//   const [pokedata, setPokedata] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [api, setApi] = useState(POKEMON_API);
//   const [modal, setModal] = useState();

//   const datas = async () => {
//     setLoading(true);
//     const res = await axios.get(api);
//     getPokemon(res.data.results);
//     setLoading(false);
//     console.log(pokedata);
//   };

//   const getPokemon = async (res) => {
//     res.map(async (item) => {
//       const result = await axios.get(item.url);
//       setPokedata((state) => {
//         state = [...state, result.data];
//         return state;
//       });
//     });
//   };

//   useEffect(() => {
//     datas();
//   }, [api]);

//   return (
//     <>
//       <Header />
//       <div className="mtop pokedex">
//         <div className="container content">
//           {loading ? (
//             <h1 className="loading">Loading...</h1>
//           ) : (
//             pokedata.map((item) => {
//               return (
//                 <>
//                   <Link to={`/${item.name}`}>
//                     <div key={item.name} className="card text-center">
//                       <p className="card-text card-id"> {item.id}</p>
//                       <img
//                         src={item.sprites.front_default}
//                         className="img-fluid card-img"
//                         alt={item.name}
//                       />
//                       <p className="card-text card-name">{item.name}</p>
//                     </div>
//                   </Link>
//                 </>
//               );
//             })
//           )}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Pokedex;
