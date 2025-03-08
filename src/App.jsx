import { useState } from 'react'
import Home from './Pages/Home/Home.jsx'
import { Routes, Route } from 'react-router-dom'
import Login from './Pages/Login/Login.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </>
  )
}

export default App
