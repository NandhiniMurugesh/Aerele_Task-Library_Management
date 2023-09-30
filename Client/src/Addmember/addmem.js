import React, { useState } from "react"
import axios from "axios";
export function Addmember(){
    // const [selectedOption, setSelectedOption] = useState("");
    function formsubmission(event){
        
        event.preventDefault()
        var fname=document.getElementById("fname").value
        var lname=document.getElementById("lname").value
        var email=document.getElementById("email").value
        var id = document.getElementById("id").value
        var phoneno=document.getElementById("phoneno").value
         var username=document.getElementById("username").value
        var password=document.getElementById("password").value
        var usertype=document.getElementById("usertype").value

        var key={
            fname:fname,
            lname:lname,
            email:email,
           id:id,
            phoneno:phoneno,
            username:username,
            password:password,
            usertype: usertype,
        }
        if(fname==""){
            alert("Enter the First Name")
        }
        else if(lname==""){
            alert("Enter the Last Name")

        }
        else if(phoneno==""){
            alert("Enter the Phone no")

        }
        else if(email==""){
            alert("Enter the Email-Id")

        }
        else if(id==""){
            alert("Enter the Id")

        }
       
        else if(username==""){
            alert("Enter the Username")

        }
        else if(password==""){
            alert("Enter the Password")

        }
        else{
            axios.post("http://localhost:5040/userdetails",key)
            .then((userdet)=>{
                if(userdet.data.status==="error"){
                    alert("data not inserted")
                }
                else if(userdet.data.status==="success"){
                    alert("data inserted")
                    window.location.href="/"
                }
            })
        }
    }
    return(
        <>
      
        <div className="container-fluid text-center mainRegistration">
            <div className="container title">
            <h1>AERELE LIBRARY</h1>
            <h3>The World of Bibliophiles!</h3>
            </div>
            <div className="container text-center w-50 p-5 userRegistration">
                    <h3 className="text-decoration-underline">USER REGISTRATION</h3>
                    <form onSubmit={formsubmission}>  

                       <input type="text" className="form-control" placeholder="id" id="id" /><br/>
                       
                       <input type="text" className="form-control" placeholder="firstname" id="fname" /><br/>
                       
                        <input type="text" className="form-control" placeholder="lastname" id="lname" /><br/>
                        
                        <input type="text" className="form-control" placeholder="email" id="email" /><br/>
                                          
                        <input type="text" className="form-control" placeholder="phone Number" id="phoneno" /><br/>
                                
                        <input type="text" className="form-control" placeholder="Username" id="username" /><br/>
                   
                        <input type="password" className="form-control" placeholder="password" id="password" /><br/>

                        <select id="usertype" >
                        <option>Select the usertype</option>
                        <option value="Reader">Reader</option>
                        </select><br/>
                     
                       <input type="submit" className="bg-secondary rounded-pill text-white p-2" value="submit"/>
                                            </form>
                         <a href="/" className="text-white b">Already Have Account? Login</a>                   
            </div>                                
        </div>
        </>
    );
}