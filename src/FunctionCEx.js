import React from "react";

function FunctionCEx(props){

    function submitClicked(){
        alert("Submit button is clicked");
    }

    return(
        <table>
                <tr>
                    <th>User Name</th>
                    <td><input type="text" value={props.name} onMouseOver={submitClicked}></input></td>
                </tr>
                <tr>
                    <th>Password</th>
                    <td><input type="password" value={props.pwd}></input></td>
                </tr>
                <tr>
                    <td><input type="reset" name="Cancel"></input></td>
                    <td><button name="Submit" onClick={submitClicked}>Submit</button></td>
                </tr>

        </table>

    );
}

export default FunctionCEx;