import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function ListComp(){
    const navigate=useNavigate();

    const name  = localStorage.getItem("userName").split(":")[1];

    function list(){
        alert("list");

        axios.get("http://localhost:8080/v1/student").then(response =>{
            alert(response.data);


        }).catch(error =>{
            alert("something went wrong !!"+error);
        });


    }

    return(
        <>
        <Navbar/>
       
        <button onClick={list}>List of Employee</button>

       </>
    );

}

export default ListComp;