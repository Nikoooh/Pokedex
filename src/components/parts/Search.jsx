import React, { useContext, useRef, useState } from 'react'
import { PokedexContext } from '../../context/pokedexContext'
import { Backdrop, CircularProgress } from '@mui/material'

const SearchBar = () => {

    const { setSearchOpen, searchOpen, setPokemon, setError,  } = useContext(PokedexContext)
    const formRef = useRef()

    const handleSearch = async (e) => {  
        e.preventDefault()
        setSearchOpen(true)
        setPokemon(null)

        try {   
            const hakusana = formRef.current.pokemonSearchInput.value.toLowerCase()
            const yhteys = await fetch(`https://pokeapi.co/api/v2/pokemon/${hakusana}`)

            if (yhteys.status === 200 && formRef.current.pokemonSearchInput.value) {
                let pokemon = await yhteys.json()

                setPokemon(pokemon)

                setError({error: false, message: ""})
                setSearchOpen(false)
            } else {
                switch (yhteys.status) {
                    case 404:
                        setError({error: true, message: <h1 className="errorMessage"> no pokemon found <br/> try a different search </h1>})
                }

                setSearchOpen(false)
            }                    
        } catch (error) {
            console.log(error);
            setSearchOpen(false)
        }
       
    }

    return (
        <div>
            <form ref={formRef} onSubmit={handleSearch}>
                <div className='searchWrapper'>         
                    <input className='pokemonSearchBar' name='pokemonSearchInput' placeholder='Search pokemon'/>        
                    <button className="openSearchBtn" type='submit'>
                        <p>Search for pokemon</p>
                    </button>                                       
                </div>
            </form>    
            <Backdrop open={searchOpen}>
                <CircularProgress color='inherit'/>
            </Backdrop>  
        </div>
    )
    
}

export default SearchBar