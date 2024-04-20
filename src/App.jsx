import { useContext } from 'react'
import './App.css'
import { Background } from './components/Background'
import Wrapper from './components/main/MainWrapper'
import { Navbar } from './components/parts/Nav' 
import './scss/index.scss'
import { Backdrop, CircularProgress } from '@mui/material'
import { PokedexContext } from './context/pokedexContext'

const App = () => {

  const { searchOpen } = useContext(PokedexContext)
  
  return (
    <div className='main-container'> 
      <Background />
      <div className='app'>
        <div className='pokedex-container'>
          <Navbar />
          <Wrapper />
        </div>   
      </div>
      <Backdrop open={searchOpen}>
        <CircularProgress color='inherit'/>
      </Backdrop> 
    </div>

  )
}

export default App
