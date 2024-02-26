import React, { useContext, useRef } from 'react'
import { PokedexContext } from '../../../context/pokedexContext'

const EmptyPokemonCard = () => {

    const { error, selector, setComparePokemon, comparePokemon } = useContext(PokedexContext)
    const formRef = useRef()

    const selected = (selector === "compare")
    const width = {
        width: selected ? "50%" : null
    }

    const handleSearch = async (e) => {
        e.preventDefault()

        try {
            let hakusana = formRef.current.pokemonInput.value
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${hakusana}`)
            if (response.status === 200) {
                let pokemon = await response.json()
                console.log(comparePokemon);
                setComparePokemon(pokemon)             
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (    
        <div className="pokemonCardEmpty" style={width}>     
            <div>{error.message}</div>
            {(selected) ?
                <div className='columnContainer compareSearchWrapper'> 
                    <form ref={formRef} onSubmit={handleSearch}>
                        <input name='pokemonInput' className='pokemonSearchBar compareSearchItems' placeholder='compare'/>
                        <button className='openSearchBtn compareSearchItems' onClick={handleSearch}>Search</button>
                    </form>
                </div>
            : 
                null
            }
            <p></p>  
        </div>
    )
}

export default EmptyPokemonCard