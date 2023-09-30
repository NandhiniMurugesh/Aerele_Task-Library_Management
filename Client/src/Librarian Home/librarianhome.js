import React, { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";
import { Menu } from "../Menu/menu";
export function Librariandashboard(){
    var {id} =useParams()
    var {usertype}=useParams()
    const[user,setUser]=useState('')
    useEffect(()=>{
        fetch("http://localhost:5040/libdash/"+id)
        .then(res=>res.json())
        .then((data)=>{
            setUser(data[0].user)
        })
       
    })
    return(
        <>
        <div className="libDashboard container-fluid ">
        <div className="container text-center title">
            <h3>AERELE LIBRARY</h3>
            <h5>The World of Bibliophiles!</h5>
                         
            </div>
          
            <Menu/>
            
            <div className="container homeContent">
                <h2>Hi Librarian 👋! Welcome Back... </h2>
            </div>
            {/* <div className="buttons text-center">
            <Link to={`/userupdate/${id}`} className="btn btn-secondary">update profile</Link>
            </div> */}
        </div>
        </>
    );
}
