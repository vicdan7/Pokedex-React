import React, { useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import PokeCard from "./PokeCard";
import PokePagination from "./PokePagination";
import "./styles/pokecontainer.css";

const PokeContainer = ({ formUrl, setLoading }) => {
  const [pokemons, getAllPokemons] = useFetch(formUrl);
  const [data, setData] = useState();

  useEffect(() => {
    getAllPokemons();
  }, [formUrl]);

  useEffect(() => {
    console.warn(pokemons);
    if (pokemons) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [pokemons]);

  return (
    <>
      <PokePagination
        rows={pokemons?.results?.length || pokemons?.pokemon?.length}
        data={pokemons?.results || pokemons?.pokemon}
        setData={setData}
      />
      <div className="poke-Container">
        {data &&
          data.map((pokemon) => {
            console.log(pokemon);
            return (
              <PokeCard
                key={
                  pokemon && pokemon?.pokemon
                    ? pokemon.pokemon.name
                    : pokemon.name
                }
                url={
                  pokemon && pokemon?.pokemon
                    ? pokemon.pokemon.url
                    : pokemon.url
                }
              />
            );
          })}
      </div>
    </>
  );
};

export default PokeContainer;
