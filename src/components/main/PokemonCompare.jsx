import React, { useContext } from 'react'
import { PokedexContext } from '../../context/pokedexContext'
import PokemonCard from './PokemonCard/PokemonCard'
import EmptyPokemonCard from './PokemonCard/EmptyPokemonCard'

const PokemonCompare = () => {

    const { pokemon, comparePokemon } = useContext(PokedexContext)

    if (!pokemon && !comparePokemon) return <div className='pokemonCardEmpty' />

    return (
        <div>
            <div className='rowContainer' style={{marginTop: "38px"}}>
                <PokemonCard currPokemon={pokemon} />
                <div className='divider'/>
                {(comparePokemon) ?
                    <PokemonCard currPokemon={comparePokemon} />
                :                   
                    <EmptyPokemonCard />                      
                }                 
            </div>
        </div>
    )
}

export default PokemonCompare