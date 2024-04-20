import React, { useContext, useState, useEffect } from 'react'
import { PokedexContext } from '../../../context/pokedexContext'
import { Popover } from '@mui/material'

const PokemonCard = ({ currPokemon }) => {

    const { selector, comparePokemon, pokemon, setPokemon, setComparePokemon } = useContext(PokedexContext)
    const [shiny, setShiny] = useState(false)
    const [abilities, setAbilities] = useState()
    const [popOverAnchor, setPopOverAnchors] = useState(Array(currPokemon.abilities.length).fill(null));

    const handlePopover = (e, idx) => {       
        setPopOverAnchors((anchors) => {
            const newAnchors = [...anchors];
            newAnchors[idx] = e.target;
            return newAnchors;
        });
    };

    const handleClose = () => {
        setPopOverAnchors(Array(currPokemon.abilities.length).fill(null));
    };

    const handlePokemonClose = () => {
        if (currPokemon === pokemon) {
            setPokemon(comparePokemon)
            setComparePokemon(null)
        } else {
            setComparePokemon(null)
        }
    }

    useEffect(() => {
        const fetchAbilities = async () => {
          const abilitiesData = await Promise.all(
            currPokemon.abilities.map(async (ability) => {
              const response = await fetch(ability.ability.url);
              if (response.status === 200) {
                return response.json();
              }
              return null; 
            })
          );
      
          setAbilities(abilitiesData.filter((data) => data !== null));
        };
    
        fetchAbilities();
    }, [currPokemon]);

    return (
        <div className={(selector === 'compare') ? 'compareCardWidth pokemonCard' : 'pokemonCard'}>
            <div className='closeBtnContainer'>
                <button className='closeBtn' onClick={handlePokemonClose}>
                    <h3>X</h3>
                </button>
            </div>
           

            <div className='pokemonName rowContainer'>
                <h5>{currPokemon.name.charAt(0).toUpperCase() + currPokemon.name.slice(1)}</h5>
            </div>
            
            <div className='pokemon'>
                <div className='pokemonInfo columnContainer'>
                    <div className='pokemonStatsContainer'>
                        <div className='pokemonInfoHeader'>
                            <h2>Stats</h2>
                        </div>
                        <div className='pokemonInfo'>
                            {(currPokemon.stats.map((stat, idx) => {
                                return (
                                    <div className="classLine spaceBetween" key={idx}>
                                        {(selector === 'search') ?
                                            <>
                                                <p>{stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}:</p>
                                                <span>{currPokemon.stats[idx].base_stat}</span>
                                            </>
                                        :
                                            (comparePokemon) ?
                                                (currPokemon === pokemon) ?
                                                    <>
                                                        <p>{stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}:</p>
                                                        <span>
                                                            <span>{currPokemon.stats[idx].base_stat}</span>
                                                            <span style={{marginLeft: '5px', color: pokemon.stats[idx].base_stat > comparePokemon.stats[idx].base_stat ? 'green' : 'red'}}>({pokemon.stats[idx].base_stat > comparePokemon.stats[idx].base_stat ? '+' : '-'}{Math.abs(pokemon.stats[idx].base_stat - comparePokemon.stats[idx].base_stat)})</span>
                                                        </span>     
                                                    </> 
                                                :
                                                    <>
                                                        <p>{stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}:</p>
                                                        <span>
                                                            <span>{currPokemon.stats[idx].base_stat}</span>
                                                            <span style={{marginLeft: '5px', color: comparePokemon.stats[idx].base_stat > pokemon.stats[idx].base_stat ? 'green' : 'red'}}>
                                                                ({comparePokemon.stats[idx].base_stat > pokemon.stats[idx].base_stat ? '+' : '-'}{Math.abs(pokemon.stats[idx].base_stat - comparePokemon.stats[idx].base_stat)})
                                                            </span>
                                                        </span>     
                                                    </> 
                                            :
                                                <>
                                                    <p>{stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}:</p>
                                                    <span>{currPokemon.stats[idx].base_stat}</span>
                                                </>                                                
                                        }                                                                    
                                    </div>
                                )
                            }))}  
                        </div>
                    </div>                    
               
                    <div className='pokemonStatsContainer'>
                        <div className='pokemonInfoHeader'>
                            <h2>Types</h2>
                        </div>
                        <div className='pokemonInfo'>
                            {(currPokemon.types.map((type, idx) => {
                                return (
                                    <div className="classLine"  key={idx}>
                                        <p>{type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}</p> 
                                    </div>
                                )
                            }))}
                        </div>
                    </div>

                    <div className='pokemonStatsContainer'>
                        <div className='pokemonInfoHeader'>
                            <h2>Abilities</h2>
                        </div>
                        <div className='pokemonInfo'>
                            {(currPokemon.abilities.map((ability, idx) => {
                                return (                                   
                                    <div className="classLine" key={idx}>                               
                                        <p>{ability.ability.name.charAt(0).toUpperCase() + ability.ability.name.slice(1)}</p>
                                        <div className='abilityInfo-container' onMouseEnter={(e) => handlePopover(e, idx)} onMouseLeave={handleClose}>
                                            <span className='abilityQuestionMarker'>?</span>                                      
                                            <Popover
                                                sx={{
                                                    pointerEvents: 'none',  
                                                    padding: 15                                          
                                                }}
                                                anchorEl={popOverAnchor[idx]}
                                                open={popOverAnchor[idx] !== null}
                                                anchorOrigin={{
                                                    vertical: 'bottom',
                                                    horizontal: 'center',
                                                }}
                                                transformOrigin={{
                                                  vertical: 'top',
                                                  horizontal: 'left',
                                                }}
                                                onClose={handleClose}
                                                disableRestoreFocus
                                            >   
                                                
                                                <p style={{padding: 8, width: "450px"}}>{(abilities) ? (abilities[idx].effect_entries[1].short_effect) : null}</p>
                                            </Popover>
                                        </div>
                                    </div>
                                )
                            }))}
                        </div>
                    </div>
                </div>
                
                {(selector === "search") ?
                    <>
                        <div className='divider' />

                        <div className='imgContainer columContainer'>
                            <div className='rowContainer'>
                                <div>
                                    <button className={`imgVariantBtn ${(!shiny) ? 'selected' : null}`} onClick={() => setShiny(false)}>Normal</button>
                                </div>
                                <div>
                                    <button className={`imgVariantBtn ${(shiny) ? 'selected' : null}`} onClick={() => setShiny(true)}>Shiny</button>
                                </div>
                            </div>
                            <img className='pokeSprite' src={(shiny) ? currPokemon.sprites.front_shiny : currPokemon.sprites.front_default}></img>                 
                        </div>
                    </>
                :   
                    null
                }              
            </div>          
        </div>
    )
}

export default PokemonCard