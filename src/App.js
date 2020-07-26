import React from 'react';
import logo from './logo.svg';
import LeftPanel from "./leftPanel"
import RightPanel from "./rightPanel"
import "./App.css"

const App = () =>{
  return(
    <div className = "container">
    <div className="row">
    <div className="column col-md-7 col-lg-5 mx-auto">
      <LeftPanel />
    </div>
    <div className="column col-md-7 col-lg-5 mx-auto">
      <RightPanel />
    </div>
  </div>
  </div>
  
  )

}

export default App;