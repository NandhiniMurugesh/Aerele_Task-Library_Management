import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
export function Transupdate(){
    var {transid} = useParams()
    
    const[id,setId]=useState('')
    const[bookid,setBookid]=useState('')
    const[issuedate,setIssuedate]=useState('')
    const[returndate,setReturndate]=useState('')
    const[duedate,setDuedate]=useState('')
    const[fineamnt,setFineamnt]=useState('')

    const[status,setStatus]=useState('')
    const[dueday,setDueday]=useState('')
    const[outdebt,setOutdebt]=useState('')
    
    
    useEffect(()=>{
        fetch("http://localhost:5040//transdet/"+transid)
        .then(res=>res.json())
        .then((data)=>{
            console.log(data)
            setId(data[0].id)
            setBookid(data[0].bookid)
            setIssuedate(data[0].issuedate)
            setDuedate(data[0].duedate)
            setReturndate(data[0].returndate)
            setFineamnt(data[0].fineamnt)
            setStatus(data[0].status)
            setOutdebt(data[0].outdebt)
            setDueday(data[0].dueday)
         
           
        })
    },[])
    function handleupdate(event){
        event.preventDefault()
        var transid=document.getElementById("transid").value
        var id=document.getElementById("id").value
        var bookid=document.getElementById("bookid").value
        var issuedate=document.getElementById("issuedate").value
        var returndate=document.getElementById("returndate").value
        var duedate=document.getElementById("duedate").value
        var fineamnt=document.getElementById("fineamnt").value
        var status=document.getElementById("status").value
        var outdebt=document.getElementById("outdebt").value
        var dueday=document.getElementById("dueday").value
        
        var key={
           transid:transid,
            id:id,
            bookid:bookid,
           issuedate:issuedate,
           returndate:returndate,
           duedate:duedate,
           fineamnt:fineamnt,
           status:status,
           outdebt:outdebt,
           dueday:dueday
         
        }
        if(transid==""){
            alert("Enter the Transid")
        }
        else if(id==""){
            alert("Enter the Id")

        }
        else if(bookid==""){
            alert("Enter the book id")

        }
        else if(issuedate==""){
            alert("Enter the issuedate")

        }
        else if(returndate==""){
            alert("Enter the returndate")

        }
        else if(dueday==""){
           alert("Enter the dueday")

        }
        else if(fineamnt==""){
            alert("Enter the fine amount")

        }
        else if(status==""){
            alert("Enter the status")

        }
        else if(outdebt==""){
            alert("Enter the Out Debt")

        }
        
       
        else{
            axios.put("http://localhost:5040//transupdate/"+transid,key)
            .then((upddet)=>{
                if(upddet.data.status==='not_updated'){
                    alert("data not updated")
                    console.log("not_updated")
                
                }
                else if (upddet.data.status==='success'){
                    alert("data updated Successfully!")
                    alert("Please login again as the data updated")
                    console.log("success")
                    window.location.href="/transaction"
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
                        <label>TransId</label>
                        <input type="text" placeholder="transid"  id="transid" value={transid} /><br/>
                        <label>Id</label>
                        <input type="text" placeholder="id"  id="id" value={id} /><br/>
                        <label>BookId</label>
                        <input type="text" placeholder="bookid"  id="bookid" value={bookid} /><br/>
                        <label>Issuedate</label>
                        <input type="text" placeholder="issuedate"  id="issuedate" value={issuedate} /><br/>
                        <label> Return date</label>
                       <input type="text" placeholder="returndate" onChange={(upd)=>setReturndate(upd.target.value)} id="returndate" value={returndate}/><br/>
                        <label> Duedate</label>
                        <input type="text" placeholder="duedate" id="duedate" value={duedate} /><br/>
                        <label> fineamount</label>
                        <input type="text" placeholder="fineamnt" onChange={(upd)=>setReturndate(upd.target.value)} id="fineamnt" value={fineamnt} /><br/>
                        <label> dueday</label>
                        <input type="text" placeholder="dueday"  id="dueday" value={dueday} /><br/>
                        <label> Outdebt</label>
                        <input type="text" placeholder="outdebt" onChange={(upd)=>setReturndate(upd.target.value)}  id="outdebt" value={outdebt} /><br/>
                        <label> status</label>
                        <input type="text" placeholder="status"  id="status" value={status} /><br/>
                       
                    
                       <input type="submit" className="bg-success p-2" value="Update
                       "/>
                                            </form>
                                       
                                            

                    
                     
                </div>

            </div>
        </>
    );
}