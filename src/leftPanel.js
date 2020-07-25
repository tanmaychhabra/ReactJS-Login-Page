import React from "react"
import Panel from "react-bootstrap/lib/Panel"

const LeftPanel = () =>{
    return(
        <div className="panel-body">
    <p>1. Fill Full Name</p>
    <p>&nbsp;&nbsp;&nbsp; Example</p>
    <label for="name" className="col-sm-1 control-label">Full Name<span className="important">*</span></label>
</div>
        //<h1>Hello Left Panel</h1>
    )
}

export default LeftPanel;