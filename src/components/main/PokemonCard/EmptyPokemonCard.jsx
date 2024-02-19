import React, { useContext, useRef, useState } from 'react'
import { PokedexContext } from '../../../context/pokedexContext'
import { Backdrop, CircularProgress } from '@mui/material'

const EmptyPokemonCard = () => {

    const { searchOpen, setSearchOpen, setPokemon } = useContext(PokedexContext)
    const [error, setError] = useState({error: false, message: ""})
    const formRef = useRef()

    const handleSearch = async (e) => {  
        e.preventDefault()
        setSearchOpen(true)

        try {   
            const hakusana = formRef.current.pokemonSearchInput.value
            const yhteys = await fetch(`https://pokeapi.co/api/v2/pokemon/${hakusana}`)

            if (yhteys.status === 200) {
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
        <div className="pokemonCardEmpty">
            <form ref={formRef} onSubmit={handleSearch}>
                <div className='searchWrapper'>         
                    <input className='pokemonSearchBar' name='pokemonSearchInput' placeholder='Search pokemon'/>        
                    <button className="openSearchBtn" type='submit'>
                        <p>Search for pokemon</p>
                    </button>                                       
                </div>
            </form>      
            <div>{error.message}</div>
            <p></p>  
            <Backdrop open={searchOpen} onClick={() => setSearchOpen(false)}>
                <CircularProgress color='inherit'/>
            </Backdrop>
        </div>
    )
}

export default EmptyPokemonCard