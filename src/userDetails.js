import React from "react"
import Form from "react-bootstrap/Form"
import FormControl from "react-bootstrap/FormControl"
import FormGroup from "react-bootstrap/FormGroup"
import FormLabel from "react-bootstrap/FormLabel"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"

const UserDetails = () =>{
    return(
        <Card style={{ width: '100%' }}>
            <Card.Title>Sign In</Card.Title>
            <Card.Body>
        <Form className = "form-signin">
  <Form.Group controlId="formBasicEmail" className = "FormBasic">
      <div className ="form-label-group">
    <Form.Label>Email address: </Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    </div>
  </Form.Group>
  

  <Form.Group controlId="formBasicPassword" className = "FormBasic">
    <Form.Label>Password:  </Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button variant="primary" type="submit" className = "btn">
    Submit
  </Button>
</Form>
</Card.Body>
</Card>
    )
    
}

export default UserDetails;