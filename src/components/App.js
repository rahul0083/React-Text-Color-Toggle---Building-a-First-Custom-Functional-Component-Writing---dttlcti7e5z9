import React, {useEffect, useState} from 'react'
import '../styles/App.css';

const App = () => {
//code here 
const {style,setStyle}=useState("redColor");
const changeStyle=()=>{
  setStyle("blueColor");
}

  return (
    <div id="main">
      <p className="App" >Newton School</p>
      <button id='button' onClick={changeStyle}>Change Style</button>
    </div>
  )
}


export default App;
