import React from "react";
import { Link } from "react-router-dom";
import Loading from "../Loading";

function Cards({ pokemon, loading, infoPokemon }) {
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        pokemon.map((item) => {
          return (
            <>
              <Link to={`/${item.name}`}>
                <div
                  className="card"
                  key={item.name}
                  onClick={() => infoPokemon(item)}
                >
                  <p className="card-text card-id">{item.id}</p>
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${item.id}.svg`}
                    className="img-fluid card-img"
                    alt={item.name}
                  />
                  <p className="card-text card-name">{item.name}</p>
                </div>
              </Link>
            </>
          );
        })
      )}
    </>
  );
}

export default Cards;
