import Selector from "./Selector"
import React, { useContext } from 'react'
import { PokedexContext } from "../../context/pokedexContext"
import PokemonCard from "./PokemonCard/PokemonCard"
import EmptyPokemonCard from "./PokemonCard/EmptyPokemonCard"
import PokemonCompare from "./PokemonCompare"
import SearchBar from "../parts/Search"

const Wrapper = () => {

    const { selector, pokemon } = useContext(PokedexContext)

    return (
        <div>       
            <Selector />  
            <br/>
            <SearchBar /> 
            {(selector === "compare") 
            ?   <PokemonCompare />
            :   (pokemon) 
                ?   <PokemonCard currPokemon={pokemon}/>
                :   <EmptyPokemonCard />        
            }
        </div>
    )
}

export default Wrapper