import React, { useContext } from "react"
import { PokedexContext } from "../../context/pokedexContext"

const Selector = () => {

    const { setSelector, selector } = useContext(PokedexContext)

    return (
        <div className="selector-container">
            <div className="selector">
                <button className={(selector === 'search') ? "selectorBtn selected" : "selectorBtn"} onClick={() => setSelector('search')}>
                    <h3>Search pokemon</h3>
                </button>           
            </div>

            <div className="selector">
                <button className={(selector === 'compare') ? "selectorBtn selected" : "selectorBtn"} onClick={() => setSelector('compare')}>
                    <h3>Compare pokemon</h3>
                </button> 
            </div>          
        </div>
    )
}

export default Selector