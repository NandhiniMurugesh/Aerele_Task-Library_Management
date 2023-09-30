import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
export function Userupdate(){
    var {id} = useParams()
    
    const[fname,setFname]=useState('')
    const[lname,setLname]=useState('')
    const[email,setEmail]=useState('')
    const[phoneno,setPhoneno]=useState('')

    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')
    const[usertype,setUsertype]=useState('')
   
    useEffect(()=>{
        fetch("http://localhost:5040/singleuser/"+id)
        .then(res=>res.json())
        .then((data)=>{
            console.log(data)
            setFname(data[0].fname)
            setPhoneno(data[0].phoneno)
            setLname(data[0].lname)
            setEmail(data[0].email)
            setUsername(data[0].username)
            setPassword(data[0].password)
            setUsertype(data[0].usertype)
           
        })
    },[])
    function handleupdate(event){
        event.preventDefault()
        var id=document.getElementById("id").value
        var fname=document.getElementById("fname").value
        var lname=document.getElementById("lname").value
        var email=document.getElementById("email").value
        var phoneno=document.getElementById("phoneno").value
        var username=document.getElementById("username").value
        var password=document.getElementById("password").value
        var usertype=document.getElementById("usertype").value
        
        var key={
            id:id,
            fname:fname,
            lname:lname,
            email:email,
            phoneno:phoneno,
            usertype:usertype,
            username:username,
            password:password,
            
         
        }
        if(fname==""){
            alert("Enter the First Name")
        }
        else if(id==""){
            alert("Enter the Id")

        }
        else if(lname==""){
            alert("Enter the Last Name")

        }
        else if(email==""){
            alert("Enter the Email Id")

        }
        else if(phoneno==""){
            alert("Enter the Phoneno")

        }
        else if(username==""){
           alert("Enter the Username")

        }
        else if(password==""){
            alert("Enter the Password")

        }
       
        else{
            axios.put("http://localhost:5040/userupdate/"+id,key)
            .then((upddet)=>{
                if(upddet.data.status==='not_updated'){
                    alert("data not updated")
                    console.log("not_updated")
                
                }
                else if (upddet.data.status==='success'){
                    alert("data updated Successfully!")
                    alert("Please login again as the data updated")
                    console.log("success")
                    window.location.href="/memlist"
                }

            })
        }
    }
    return (
        <>
            <div className=" memUpd container-fluid mainDiv">
                <div className="container text-center w-50 p-5 content">
                    <h1 className="text-decoration-underline">USER PROFILE</h1>
                    <form onSubmit={handleupdate}>  
                        <label>Id</label>
                        <input type="text" placeholder="id"  id="id" value={id} /><br/>
                        <label>Email-Id</label>
                        <input type="text" placeholder="email" onChange={(upd)=>setEmail(upd.target.value)} id="email" value={email} /><br/>
                        <label> First Name</label>
                       <input type="text" placeholder="firstname" onChange={(upd)=>setFname(upd.target.value)} id="fname" value={fname}/><br/>
                        <label> Last Name</label>
                        <input type="text" placeholder="lastname" onChange={(upd)=>setLname(upd.target.value)} id="lname" value={lname} /><br/>
                        <label> Phoneno</label>
                        <input type="text" placeholder="phoneno" onChange={(upd)=>setPhoneno(upd.target.value)} id="phoneno" value={phoneno} /><br/>
                        <label> Username</label>
                        <input type="text" placeholder="username" onChange={(upd)=>setUsername(upd.target.value)} id="username" value={username} /><br/>
                        <label> Password</label>
                        <input type="text" placeholder="password" onChange={(upd)=>setPassword(upd.target.value)}  id="password" value={password} /><br/>
                        <label> Usertype</label>
                        <input type="text" placeholder="usertype"  id="usertype" value={usertype} /><br/>
                       
                    
                       <input type="submit" className="bg-success p-2" value="Update
                       "/>
                                            </form>
                                       
                                            

                    
                     
                </div>

            </div>
        </>
    );
}