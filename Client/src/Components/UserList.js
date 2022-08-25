import React,{useEffect,useState} from 'react'
import "./UserList.css"
import { Button, Container, Row, Table } from 'react-bootstrap'
import axios from 'axios'


function UserList() {
 const config ={
    headers:{
        'x-access-token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDRkYWZkMjE4ODNmODAyYTcyZmRmMCIsImlhdCI6MTY2MTI2MjU5MywiZXhwIjoxNjYxMjYyOTUzfQ.zLq4uayYU1TV0RuMTDrsVkNWIbChxEjgy-CDcQ1iquw"
    }
 }

    const [userData, setuserData] = useState([])
    useEffect(() => {
        axios.get("http://localhost:5000/alluser",config)
            .then((result) => {
                setuserData(result.data.data)
                console.log(result.data)
            }).catch((err) => {

            });
    }, [])

    return (
        <div>
            <Container>
                <Row>
                    <div className="List-Div">
                        <Table bordered  >
                            <thead>
                                <tr>
                                    <th>Sr.No</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Created Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    userData.map((user) => {
                                        return (
                                            <tr>
                                                <td>{user._id}</td>
                                                <td>{user.UserName}</td>
                                                <td>{user.UserEmail}</td>
                                                <td>{user.CreatedDate}</td>
                                                <label className="switch">
                                                    <input type="checkbox" />
                                                    <span className="slider round"></span>
                                                </label>


                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default UserList