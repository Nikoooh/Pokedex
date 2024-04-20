import React, { useContext, useState } from 'react'
import { PokedexContext } from '../../context/pokedexContext'
import { handleSearch } from '../../utils/functions'

const SearchBar = () => {

    const { setSearchOpen, setPokemon } = useContext(PokedexContext)
    const [searchString, setSearchString] = useState('')

    return (
        <div>
            <div className='searchWrapper'>         
                <input className='pokemonSearchBar' value={searchString} onChange={(e) => setSearchString(e.target.value)} name='pokemonSearchInput' placeholder='Search pokemon'/>        
                <button className="openSearchBtn" type='submit' onClick={() => handleSearch(setPokemon, searchString, setSearchOpen)}>
                    <p>Search for pokemon</p>
                </button>                                       
            </div>
        </div>
    )
    
}

export default SearchBar