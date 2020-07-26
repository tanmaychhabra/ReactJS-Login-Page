import React from "react"
import Tab from "react-bootstrap/Tab"

const Image = props =>{
    return(
        <div>
           <img src = {props.src} title = {props.title} style = {{height: "100vh"}}/>
        </div>

    )

}

const LeftPanel = () =>{
    return(
        <div>
    <Image title = {"Audi"} src = {"./Audi.jpg"}/>
    
</div>
        //<h1>Hello Left Panel</h1>
    )
}

export default LeftPanel;