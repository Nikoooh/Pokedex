import './App.css'
import { Background } from './components/Background'
import Wrapper from './components/main/MainWrapper'
import { Navbar } from './components/parts/Nav' 
import './scss/index.scss'

const App = () => {
  
  return (
    <div className='main-container'> 
      <Background />
      <div className='app'>
        <div className='pokedex-container'>
          <Navbar />
          <Wrapper />
        </div>   
      </div>
    </div>
 
  )
}

export default App
