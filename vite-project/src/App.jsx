import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

  function App() {
    let name="Madhumithaa R M"
    const rStyle={
      textAlign:"center"
    }
    alert("Excuse meee Ba-bo!")

    const Min={
      name:"Madhumithaa R M",
      age:18
    }
    console.log('My age is ',+Min.age)
   return(
    <div className='jeon'>
      <h2>Name:{Min.name}</h2>
      <h2 className='jay'>My age is {+Min.age}</h2>
    </div>
   )

  }
export default App
