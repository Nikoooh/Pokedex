import React, { useContext } from 'react'
import { PokedexContext } from '../../../context/pokedexContext'

const PokemonCard = () => {

    const { pokemon } = useContext(PokedexContext)

    console.log(pokemon);

    return (
        <div className='pokemonCard'>
            <div className='pokemonName'>
                    <h4>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h4>
                </div>
            <div className='pokemon'>
                <div className='pokemonInfo columnContainer'>
                    <div className='pokemonStatsContainer'>
                        <div className='pokemonInfoHeader'>
                            <h2>Stats</h2>
                        </div>
                        <div className='pokemonInfo'>
                            {(pokemon.stats.map((stat) => {
                                return (
                                    <p>{stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}: {stat.base_stat}</p>
                                )
                            }))}  
                        </div>
                    </div>
                        
                    <div className='pokemonStatsContainer'>
                        <div className='pokemonInfoHeader'>
                            <h2>Types</h2>
                        </div>
                        <div className='pokemonInfo'>
                            {(pokemon.types.map((type) => {
                                return (
                                    <p>{type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}</p>
                                )
                            }))}
                        </div>
                    </div>
                </div>
                           
                <div className='imgContainer'>
                    <img className='pokeSprite' src={pokemon.sprites.front_default}></img>
                </div>              
            </div>          
        </div>
    )
}

export default PokemonCard