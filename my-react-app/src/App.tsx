import { useState } from 'react'
import './App.css'

import Header from './components/main/Header'
import Body from "./components/main/Body"
import Footer from "./components/main/Footer"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='parent'>
      <div className='head'><Header /></div>
      <div className='body'><Body /></div>
      <div className='footer'><Footer /></div>
    </div>
  )
}

export default App