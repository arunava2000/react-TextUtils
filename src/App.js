
import './App.css';
import NavBar from './NavBar';
import { TextForm } from './TextFrom';
import React, {useState} from 'react';



function App() {
    const [mode,setMode]=useState('light');

    const [btn,setBtn]=useState('Dark Mode');

    const toggleMode = ()=>{
      //alert("hello dark mode");
      if(mode === 'light'){
        setMode('dark')
        document.body.style.backgroundColor = '#173a6e'
        document.body.style.color = "white"
        setBtn('Dark Mode')
      }

      else{
        setMode('light')
        document.body.style.backgroundColor = 'skyblue'
        document.body.style.color = "black"
        setBtn('Light Mode')
      }
    }

  return (
    <>
      <NavBar title=" TextUtils" md={mode} toggle={toggleMode} bt={btn}/>
      <TextForm title=" TextUtils" md={mode}/>
    </>
  );
}

export default App;
