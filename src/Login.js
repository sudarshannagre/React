import React from "react";

function Login(){


    return(
            <table>
                <tr>
                    <th>User Name</th>
                    <td><input type="text"></input></td>
                </tr>
                <tr>
                    <th>Password</th>
                    <td><input type="password"></input></td>
                </tr>
                <tr>
                    <td><input type="reset" name="Cancel"></input></td>
                    <td><input type="submit" name="Submit"></input></td>
                </tr>

            </table>
    );

}

export default Login;