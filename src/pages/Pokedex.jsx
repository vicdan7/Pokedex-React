import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Formpoke from '../components/Home/pokedex/Formpoke';
import PokeContainer from '../components/Home/pokedex/PokeContainer';
import pokedex from '../../public/pokedex.png'
import '../components/Home/pokedex/styles/pokedex.css'

const Pokedex = () => {

  const urlBase = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0.'

  const [formUrl, setFormUrl] = useState(urlBase);

  const { trainerName } = useSelector(state => state)
  
  return (
    <div>
      <h1 className='title-style'>
        <img src={pokedex} alt="" />
      </h1>
      <p><span className='span-style'>Welcome {trainerName}, </span>here you can find your favorite pokemon</p>
      <Formpoke urlBase={urlBase} setFormUrl={setFormUrl} />
      <PokeContainer formUrl={formUrl} />
    </div>
  );
}

export default Pokedex;
