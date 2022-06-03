import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

function Login(){

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    function buttonClick(){
        alert("UserName : "+userName+", Password : "+password);
    }

    useEffect(() =>{
        alert("this is useEffect call");
    },[])

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
                    <td><button onClick={buttonClick}>Submit</button></td>
                </tr>

            </table>
        </> 
    );

}

export default Login;