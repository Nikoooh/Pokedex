import React, { useContext, useState } from 'react'
import { PokedexContext } from '../../../context/pokedexContext'
import { handleSearch } from '../../../utils/functions'

const EmptyPokemonCard = () => {

    const { error, selector, setComparePokemon, setSearchOpen } = useContext(PokedexContext)
    const [searchString, setSearchString] = useState('')

    const selected = (selector === "compare")
    const width = {
        width: selected ? "50%" : null
    }

    return (    
        <div className="pokemonCardEmpty" style={width}>     
            <div>{error.message}</div>
            {(selected) ?
                <div className='columnContainer compareSearchWrapper'>                  
                    <input name='pokemonInput' value={searchString} onChange={(e) => setSearchString(e.target.value)} className='pokemonSearchBar compareSearchItems' placeholder='search...'/>
                    <button className='openSearchBtn compareSearchItems' onClick={() => handleSearch(setComparePokemon, searchString, setSearchOpen)}>Search</button>               
                </div>
            : 
                null
            }
            <p></p>  
        </div>
    )
}

export default EmptyPokemonCard