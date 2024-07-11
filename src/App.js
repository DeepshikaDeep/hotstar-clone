import { useState } from 'react'
import './App.css'
import Header from './Componets/Header'
import Slider from './Componets/Slider'
import ProductionHouse from './Componets/ProductionHouse'
import GenreMovieList from './Componets/GenreMovieList'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ 
      backgroundColor: '#121212', /* Dark background */
      color: '#ffffff', /* Light text color */
      minHeight: '100vh', /* Ensure it covers the full viewport height */
      margin: 0,
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
    }}>
        <Header/>
        
        <Slider/>

        <ProductionHouse/>

        <GenreMovieList/>
    </div>
  )
}

export default App
