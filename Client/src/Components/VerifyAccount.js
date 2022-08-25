import React from 'react'
import "./VerifyAccount.css"
import greentick from '../image/greentick.jpg'
import { Button, Image } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

function VerifyAccount() {
    const navi = useNavigate()
    return (
        <div>
            <div className="Verify-div">
                <Image src={greentick} className="verify-img" />
                <h6>Your Account is verified.</h6>
                <h6>Please Click here to Login</h6>
                <Button onClick={() => navi("/login")}>Login</Button>
            </div>

        </div>
    )
}

export default VerifyAccount