import { useEffect } from "react";
import useFetch from "../../../hooks/useFetch";
import './styles/pokeCard.css'
import { useNavigate } from "react-router-dom";

const PokeCard = ({ url }) => {

    const [ pokemon, getPokemonById ] = useFetch(url)

    useEffect(() => {
        getPokemonById()
    }, []);

    const navigate = useNavigate()

    const handleClick = () => {
      navigate(`/pokedex/${pokemon.name}`)
    }

    return (
      <article onClick={handleClick} className={`pokemon border-${pokemon?.types[0].type.name}`}>
        <header className={`pokemon-header bg-${pokemon?.types[0].type.name}`}>
            <img className="pokemon-sprite" src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
        </header>
        <section className="pokemon-body">
            <h3 className={`pokemon-name color-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h3>
            <ul className="pokemon-types">
              {
                pokemon?.types.map(objType => (
                  <li className="pokemon-type_specific" key={objType.type.url}>{objType.type.name}</li>
                ))
              }
            </ul>
            <ul className="pokemon-stats">
              {
                pokemon?.stats.map(objStat => (
                   <li className="pokemon-stats_specific" key={objStat.stat.url}>
                     <span className="pokemon-stats_label">{objStat.stat.name}</span>
                     <span className={`pokemon-stats_value color-${pokemon?.types[0].type.name}`}>{objStat.base_stat}</span>
                   </li>
                ))
              }  
            </ul>
        </section>
      </article>
  );
}

export default PokeCard;
