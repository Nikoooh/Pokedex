import pokeball2 from "../assets/img/PokeBall2.png"
import pokeball3 from "../assets/img/PokeBall3.png"

export const Background = () => {
    return  (
        <div className='background'>
            <img src={pokeball3} alt="pokeball" className='pokeball pokeball3'></img>
            <img src={pokeball2} alt="pokeball" className='pokeball pokeball2'></img>
            <img src={pokeball3} alt="pokeball" className='pokeball pokeball3'></img>
            <img src={pokeball2} alt="pokeball" className='pokeball pokeball2'></img>
            <img src={pokeball3} alt="pokeball" className='pokeball pokeball3'></img>
            <img src={pokeball2} alt="pokeball" className='pokeball pokeball2'></img>
        </div>
    )
}