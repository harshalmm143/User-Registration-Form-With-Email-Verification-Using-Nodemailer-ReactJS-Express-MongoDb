import React, { useState } from 'react'
import { Button, Container, Form } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'


function LoginForm() {
  const [Email, setEmail] = useState("")
  const [password, setpassword] = useState("")
  const navi = useNavigate()

  function dologin() {
    if (Email === "admin" && password === "admin") {
      navi("/userlist")
    } else {
      alert("please enter valid data")
    }

  }
  return (
    <div>
      <Container className="Registration-Container">
        <h2>Login Here</h2>
        <div className="Re-Form">
          <Form>
            <h6>UserName</h6>
            <Form.Control type="email" className="F-control" onChange={(e) => setEmail(e.target.value)} required={true} />
            <h6>Password</h6>
            <Form.Control type="password" className="F-control" onChange={(e) => setpassword(e.target.value)} required={true} />
            <Button className="Re-but" onClick={() => dologin()}>Login</Button>
          </Form>

        </div>


      </Container>
    </div>
  )
}

export default LoginForm