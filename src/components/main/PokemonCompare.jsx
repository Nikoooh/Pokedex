import React, { useContext } from 'react'
import { PokedexContext } from '../../context/pokedexContext'
import PokemonCard from './PokemonCard/PokemonCard'
import EmptyPokemonCard from './PokemonCard/EmptyPokemonCard'

const PokemonCompare = () => {

    const { pokemon, comparePokemon } = useContext(PokedexContext)

    return (
        <div>
            {(pokemon) ?
                <div className='rowContainer' style={{marginTop: "38px"}}>
                    <PokemonCard pokemon={pokemon} />
                    <div className='divider'/>
                    {(comparePokemon) ?
                        <PokemonCard pokemon={comparePokemon} />
                    :                   
                        <EmptyPokemonCard />                      
                    }                 
                </div>
            :
                null
            }
        </div>
    )
}

export default PokemonCompare