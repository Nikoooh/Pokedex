import React, { useState, createContext } from 'react';

export const PokedexContext = createContext()

export const PokedexProvider = (props) => {

    const [selector, setSelector] = useState()
    const [pokemonFound, setPokemonFound] = useState(false)
    const [pokemon, setPokemon] = useState(null)

    const [searchOpen, setSearchOpen] = useState(false)

    return (
        <PokedexContext.Provider value={{selector, setSelector, pokemonFound, setPokemonFound, searchOpen, setSearchOpen, pokemon, setPokemon}}>
            {props.children}
        </PokedexContext.Provider>
    )

}