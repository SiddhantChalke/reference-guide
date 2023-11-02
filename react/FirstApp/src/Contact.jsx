import React from 'react'
import Form from 'react-bootstrap/Form';

function Comp2 (){
  return (
    <div>
        <p>This is <b>Contact </b>component.</p>
        <div className="">
        <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      </Form>
        </div>
    </div>
  )
}

export default Comp2