import React, { useState } from "react";
import { useSelector } from "react-redux";
import FormPoke from "../components/Home/pokedex/FormPoke";
import PokeContainer from "../components/Home/pokedex/PokeContainer";
import pokedex from "../assets/images/pokedex.png";
import "../components/Home/pokedex/styles/pokedex.css";

const Pokedex = ({setLoading}) => {
  const urlBase = "https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0.";

  const [formUrl, setFormUrl] = useState(urlBase);

  const { trainerName } = useSelector((state) => state);

  return (
    <div>
      <h1 className="title-style">
        <img src={pokedex} alt="" />
      </h1>
      <p>
        <span className="span-style">Welcome {trainerName}, </span>here you can
        find your favorite pokemon
      </p>
      <FormPoke
        urlBase={urlBase}
        setFormUrl={setFormUrl}
        setLoading={setLoading}
      />
      <PokeContainer formUrl={formUrl} setLoading={setLoading} />
    </div>
  );
};

export default Pokedex;
