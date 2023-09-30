import React, { useState } from "react";
import axios from "axios";
export function Issuebook(){
    const [dueday,setDueday]=useState(0)
    function bookissue(event){
        event.preventDefault()
        var id= document.getElementById("id").value
        var bookid=document.getElementById("bookid").value
        var issuedate=document.getElementById("issuedate").value
        var duedate=document.getElementById("duedate").value
        var dueday=document.getElementById("dueday").value
        var fineamnt=document.getElementById("fineamnt").value
        var status=document.getElementById("status").value

        var key={
            id:id,
            bookid:bookid,
            issuedate:issuedate,
            duedate:duedate,
            dueday:dueday,
            fineamnt:fineamnt,
            status:status
        }
        if(id===""){
            alert("Enter the Id")
        }
        else if(bookid===""){
            alert("Enter the Book Id")
        }
       
        else if(issuedate===""){
            alert("Select the Issue date")
        }
        else if(duedate===""){
            alert("Select the duedate date")
        }
        else if(dueday===""){
            alert("Select the dueday")
        }
        
        else if(status===""){
            alert("Select the Status")
        }
      
        else{
            axios.post("http://localhost:5040/issuebook/",key)
            .then((userdet)=>{
                if(userdet.data.status==="error"){
                    alert("Book not Issued")
                }
                else if(userdet.data.status==="limit reached"){
                    alert("Out debt limit reached")
                    window.location.href="/booklist"
                }
                else if(userdet.data.status=="limit reached"){
                    alert('limit reached')
                }
                else if(userdet.data.status=="success"){
                    alert("book issued")
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
                <div className="col-5 text-center w-50 p-5 userRegistration">
                    <h3 className="text-decoration-underline">Issue Book</h3>
                    <form onSubmit={bookissue}>              
                    
                        <input type="text" className="form-control" placeholder="Member Id" id="id" /><br/>
                        <input type="text" className="form-control" placeholder="Book Id" id="bookid"  /><br/>
                        <label>Issue date</label>
                        <input type="date" className="form-control" placeholder="Issue date" id="issuedate" /><br/>
                        <label>Due Date</label>
                        <input type="date" className="form-control" placeholder="Due date" id="duedate" /><br/>
                        {/* <label>Return Date</label>
                        <input type="date" placeholder="Return date" id="returndate" /><br/> */}
                        <label>Due Day</label>
                      
                        <input type="text" className="form-control" placeholder="Due day" id="dueday" /><br/>
                        <input type="text" className="form-control" placeholder="Fine Amount" id="fineamnt" /><br/>
                        
                        <select className="form-control" id="status">
                            <option >Select the status</option>
                            <option value="borrowed">borrowed</option>
                            <option value="returned">returned</option>
                        </select>
                    
                    <div className="col-10">
                        <input type="submit" className="bg-secondary  text-white p-2 " value="submit"/>
                    </div>
                    <div className="col-"></div>
                    </form>
                    </div>
                    <div className="col-3"></div>             
            </div>                                
        </div>
        
        </>
    );
}