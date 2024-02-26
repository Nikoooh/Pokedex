import React, { useState, createContext } from 'react';

export const PokedexContext = createContext()

export const PokedexProvider = (props) => {

    const [selector, setSelector] = useState('search')
    const [pokemonFound, setPokemonFound] = useState(false)
    const [pokemon, setPokemon] = useState(null)
    const [comparePokemon, setComparePokemon] = useState(null)
    const [error, setError] = useState({error: false, message: ""})

    const [searchOpen, setSearchOpen] = useState(false)

    return (
        <PokedexContext.Provider value={{selector, setSelector, pokemonFound, setPokemonFound, searchOpen, setSearchOpen, pokemon, setPokemon, error, setError, comparePokemon, setComparePokemon}}>
            {props.children}
        </PokedexContext.Provider>
    )

}