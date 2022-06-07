import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Table from 'react-bootstrap/Table'

function ListComp(){
    const navigate=useNavigate();
    const [studentList, setStudentList]=useState([]);

    const deleteStudent = (event, source) => {
        console.log("Id : "+source);
        axios.delete("http://localhost:8080/v1/student?id="+source).then(response=>{
            alert(response.data);
            window.location.reload()
        }).catch(errore =>{
            alert(errore);
        });
    };

   async function list(){

        fetch("http://localhost:8080/v1/student")
        .then(res => res.json())
        .then(json => setStudentList(json));

    }

    React.useEffect(() => {
        list();
    }, []);

    

    return(
        <>
      
      <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Technology</th>
                        <th>BatchName</th>
                        <th>JoiningDate</th>
                        <th>Operation</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    studentList.map((student, index) => (
                        <tr key={index}>
                            <td>{student.name}</td>
                            <td>{student.mobile}</td>
                            <td>{student.email}</td>
                            <td>{student.address}</td>
                            <td>{student.technology}</td>
                            <td>{student.bacthName}</td>
                            <td>{student.joiningDate}</td>
                            <td><button onClick={(event)=>deleteStudent(event,student.id)}>Delete</button></td>
                        </tr>
                    ))
                    }

                </tbody>

            </Table>
       </>
    );

}

export default ListComp;