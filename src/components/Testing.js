import React from "react";
import { useParams } from "react-router-dom";

const Testing =() =>{
    const {username}= useParams()
    return(
        <h1>
            username : {username}
        </h1>
    )
}

export default Testing;