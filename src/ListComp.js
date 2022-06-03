import React from "react";

function ListComp(){
    const myList = [1,2,3,4,5];

    const nameList = ['Sudarshan','Ganesh','Shyam','Shiv'];

    return(
       
        nameList.map((name)=>
            <li>{name}</li>
        )
    );

}

export default ListComp;