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
    function me(){
      console.log('My age is ',+Min.age);
    }
    const drama=()=>{
      console.log("background picture name is 25-21. it is a korean drama released in 2022");
    }
    
   return(
    <div className='jeon'>
      <h2>Name:{Min.name}</h2>
      <h2 className='jay'>My age is {+Min.age}</h2>
      <button onClick={me}>age</button>
      <button onClick={drama}>BG Details</button>
      <button onClick={()=>console.log("In 1998, Na Hee-do (Kim Tae-ri) is a member of the school fencing team at Seonjung Girls  High School , but due to the IMF crisis, the team is disbanded. To continue pursuing her passion, she transfers to Taeyang High School and later manages to become a member of the National Fencing Team. Baek Yi-jin s (Nam Joo-hyuk) family had gone from  riches to rags  and is separated due to the financial crisis. He is forced to take up several part-time jobs and later becomes a sports reporter. In present day, Kim Min-chae (Choi Myung-bin), Na Hee-do s daughter, quits ballet and runs away to her grandmas house.  During her stay, she comes across her mother s diary, through which the story is then told.")}>plot</button>
    </div>
   )

  }
export default App
