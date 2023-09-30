import React from "react";
import axios from "axios";
export function Login(){
    function loginsubmission(event){
        event.preventDefault()
        var username= document.getElementById("username").value
        var password=document.getElementById("password").value

        var key={
            username:username,
            password:password
        }
        if(username===""){
            alert("Enter the username")
        }
        else if(password===""){
            alert("Enter the password")
        }
        else{
            axios.post("http://localhost:5040/login",key)
            .then((userdata)=>{
                if(userdata.data.status=='empty_set'){
                    alert("Enter valid username")
                }
                else if(userdata.data.status=='success'){
                    var id= userdata.data.id
                      var usertype=userdata.data.usertype
                      alert(usertype)
                    alert("successfully logged in")
                    if(usertype==='Librarian' ){
                        // && userdata.data.usertype=='reader'
                    // var usertype=userdata.data.usertype
                    window.location.href=`/libdash/${id}`
                    console.log(userdata);
                    }
                  
                    else if (usertype==='User' ){
                        // && userdata.data.usertype=='author'
                        // var usertype=userdata.data.usertype
                        window.location.href=`/Userhome/${id}`
                        }
                }
                else if(userdata.data.status=='invalid_password'){
                    alert("Enter Valid Password")
                }
                else if(userdata.data.status=='both_are_invalid'){
                    alert("Enter Valid username and password")
                }
            })
         }
    }
        
    
    return(
        <>
        <div className="text-center mainRegistration">
            <div className="title">
            <h1>AERELE LIBRARY</h1>
            <h3>The World of Bibliophiles!</h3>
            </div> 
        <div className="row">
        <div className="col-3"></div>
        <div className="col-4  text-center w-50 p-5 userRegistration"> 
                    <h3 className="text-decoration-underline">USER LOGIN</h3>
                    <form onSubmit={loginsubmission}>             
                        <input type="text" className="form-control" placeholder="Username" id="username" /><br/>
                        <input type="password" className="form-control" placeholder="password" id="password" /><br/>
                        <input type="submit" className="bg-secondary text-white p-2" value="submit"/>
                    </form> 
        </div>          
        <div className="col-5"></div>                                                    
        </div>
        </div>
        </>
    );
}