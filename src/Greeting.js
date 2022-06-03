import React from "react";
import Login from "./Login";
import LoginClass from "./LoginClass";

function Greeting(props) {
    console.log("isLoggedIn : "+props.isLoggedIn);
    if (props.isLoggedIn===true) {
      return <Login />;
    }
    return <LoginClass />;
  }

  export default Greeting;