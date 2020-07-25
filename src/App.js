import React from 'react';
import logo from './logo.svg';
import LeftPanel from "./leftPanel"
import RightPanel from "./rightPanel"

const App = () =>{
  return(
    <div className="container-fluid">
  <div className="row">
    <div className="col-lg-6"></div>
    <LeftPanel />
    <div className="col-lg-6"></div>
    <RightPanel />
  </div>
  </div>
  )

}

export default App;