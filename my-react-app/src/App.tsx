import './App.css'

import Header from './components/main/Header'
import Body from "./components/main/Body"
import Footer from "./components/main/Footer"

function App() {
  return (
    <>
      <div className='head'><Header /></div>
      <div className='body'><Body /></div>
      <div className='footer'><Footer /></div>
    </>
  )
}

export default App