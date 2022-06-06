import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

function Login(props){
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    function auth(){
        const body={
            "emailORMobile" : userName,
            "password" : password
        }
        const header = {
            'Content-Type': 'application/json'
        };
        
        axios.post("http://localhost:8080/v1/student/auth", body, { headers: header }).then(response => {
            localStorage.setItem("userName",response.data);
            navigate("/list");
          }).catch(error => {
            alert("Something went wrong, Please try again !!"+error);
          });
    }

    return(
        <> 
            <Navbar/> 
            <table>
                <tr>
                    <th>User Name</th>
                    <td><input type="text" name="userName" onChange={e =>setUserName(e.target.value)}></input></td>
                </tr>
                <tr>
                    <th>Password</th>
                    <td><input type="password" name="password" onChange={e =>setPassword(e.target.value)}></input></td>
                </tr>
                <tr>
                    <td><input type="reset" name="Cancel"></input></td>
                    <td><button onClick={auth}>Submit</button></td>
                </tr>

            </table>
        </> 
    );

}

export default Login;