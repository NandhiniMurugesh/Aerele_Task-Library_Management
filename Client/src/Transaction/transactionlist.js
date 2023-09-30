import axios from "axios";
import React, { useEffect, useState } from "react";


import { Link } from "react-router-dom";

export function TransactionList() {

    const [translist, setTranslist] = useState([]);
  
    useEffect(() => {
        fetch("http://localhost:5040/transdet")
            .then(storedata => storedata.json())
            .then(memdata => setTranslist(memdata))

    }
    )
    const del = (transid) => {
        var key = { transid:transid }
        axios.post("http://localhost:5040/delete/", key)
            .then((res) => {
                if (res.data.status === "error") {
                    alert("data not deleted")
                }
                else if (res.data.status === "success") {
                    alert("data deleted")
                }
            })
    }

    return (
        <>

            <div className="memlist container-fluid ">
                <div className="memcontent">
                <div className="container text-center title">
                    <h3>AERELE LIBRARY</h3>
                    <h5>The World of Bibliophiles!</h5>

                </div>
               

                <table>
                  
                    <tr className="transtitle">
                        <th>TransID</th>
                        <th>Id</th>
                        <th>Book Id</th>
                        <th>Issue date</th>
                        <th>Due date</th>
                        <th>Return date</th>
                        <th>Fine Amount</th>
                        <th>Status</th>
                        <th>OutDebt</th>
                        <th>Dueday</th>

                        <th>Update / Delete</th>

                    </tr>

                    {
                        translist.map((value, index) =>
                            <>



                                <tr >
                                    <td className="transid ">{value.transid} </td>
                                    <td className="id ">{value.id} </td>
                                    <td className="bookid ">{value.bookid} </td>
                                    <td className="issuedate">{value.issuedate}</td>
                                    <td className=" returndate">{value.returndate}</td>
                                    <td className=" fineamnt">{value.fineamnt}</td>
                                    <td className=" status">{value.status}</td>
                                    <td className=" outdebt">{value.outdebt}</td>
                                    <td className=" dueday">{value.dueday}</td>
                                  
                                   
                                    <td className="membutton p-2">  <button className="bg-danger rounded-pill " onClick={() => { del(value.transid) }}>Delete</button>
                                        <Link to={`/transupdate/${value.transid}`} ><button className="view rounded-pill bg-info">Update</button></Link></td>
                                </tr>
                            </>
                        )
                    }
                </table>
                </div>
            </div>

        </>

    );
}