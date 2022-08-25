import React, { useState } from 'react'
import "./RegistrationForm.css"
import { Form, Button, Container, Row, Col, Modal } from "react-bootstrap"
import axios from 'axios'

function RegistrationForm() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [UserName, setUserName] = useState("")
    const [UserEmail, setUserEmail] = useState("")
    const [UserPassword, setUserPassword] = useState("")
    const [selectLanguage, setselectLanguage] = useState("")
    const [UserMobile, setUserMobile] = useState("")

    function Adduser() {
        const UserData = {
            UserName: UserName,
            UserEmail: UserEmail,
            UserPassword: UserPassword,
            UserLanguage: selectLanguage,
            UserMobile: UserMobile
        }
        axios.post("http://localhost:5000/adduser", UserData)

            .then((result) => {
                console.log(result.data)

            }).catch((err) => {

            });
    }

    return (
        <div>

            <Container className="Registration-Container">
                <h2>Registration Form</h2>
                <div className="Re-Form">
                    <Form onSubmit={Adduser}>
                        <Row>
                            <Col>
                                <h6>Name</h6>
                                <Form.Control type="text" className="F-control" onChange={(e) => setUserName(e.target.value)} required={true} />
                                <h6>Email</h6>
                                <Form.Control type="email" className="F-control" onChange={(e) => setUserEmail(e.target.value)} required={true} />
                                <h6>Mobile Number</h6>
                                <Form.Control type="text" className="F-control" onChange={(e) => setUserMobile(e.target.value)} required={true} />


                            </Col>
                            <Col>
                                <h6>Password</h6>
                                <Form.Control type="password" className="F-control" onChange={(e) => setUserPassword(e.target.value)} required={true} />
                                <h6>Confirm Password</h6>
                                <Form.Control type="password" className="F-control" required={true} />
                                <h6>Select Language</h6>
                                <Form.Select className="F-control" onChange={(e) => setselectLanguage(e.target.value)} required={true}>
                                    <option>Select</option>
                                    <option>English</option>
                                    <option>German</option>
                                </Form.Select>


                            </Col>
                        </Row>
                        <Button type="submit" className="Re-but" onClick={handleShow}>Verify</Button>
                    </Form>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Body>Verification link send sucessfully  please cheak the Email </Modal.Body>
                    </Modal>


                </div>

            </Container>
        </div>
    )
}

export default RegistrationForm