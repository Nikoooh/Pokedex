import Selector from "./Selector"
import React, { useContext } from 'react'
import { PokedexContext } from "../../context/pokedexContext"
import PokemonCard from "./PokemonCard/PokemonCard"
import EmptyPokemonCard from "./PokemonCard/EmptyPokemonCard"
import PokemonCompare from "./PokemonCompare"

const Wrapper = () => {

    const { selector, pokemonFound, pokemon } = useContext(PokedexContext)

    return (
        <div>       
            <Selector />          
            {(selector === "compare") 
            ?   <PokemonCompare />
            :   (pokemon) 
                ?   <PokemonCard />
                :   <EmptyPokemonCard />        
            }
        </div>
    )
}

export default Wrapper