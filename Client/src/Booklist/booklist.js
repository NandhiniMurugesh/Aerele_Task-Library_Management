import axios from "axios";
import React, { useEffect, useState } from "react";


import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";

export function Booklist() {

    const [booklist, setBooklist] = useState([]);
    const [item, setItem] = useState(0)
    useEffect(() => {
        fetch("http://localhost:5040/bookdetail")
            .then(storedata => storedata.json())
            .then(booklistdata => setBooklist(booklistdata))

    }
    )
    const del = (bookid) => {
        var key = { bookid: bookid }
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

            <div className="booklist container-fluid ">
                <div className="container text-center title">
                    <h3>AERELE LIBRARY</h3>
                    <h5>The World of Bibliophiles!</h5>

                </div>
                
                <div>
                    <Link to='/addbook' ><button className="btn btn-primary view">Add Book</button></Link>
                </div>
                
                    <div className="row">

                {
                     
                    booklist.map((value, index) =>
                        <>
                       <div className="d-flex  col-lg-4">
                            <div class="card carddetail " >
                                <img src={value.image} class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h5 class="card-title">{value.bookname}</h5>
                                        <h3 class="card-title">{value.author}</h3>
                                        <h5 class="card-title">{value.rating}</h5>
                                        <StarRatings
                                        rating={value.rating}
                                        starDimension="20px"
                                        starSpacing="10px"
                                        starEmptyColor="grey"
                                        starRatedColor="green"/>
                                        <p class="card-text">{value.description}</p>
                                        <button className="btn btn-danger" onClick={() => { del(value.bookid) }}>Delete</button>
                                        <Link to={`/bookupdate/${value.bookid}`} ><button className=" btn btn-primary view">Update</button></Link>
                                        <Link to={`/issuebook/${value.bookid}`} ><button className="btn btn-info view">Issue </button></Link>
                                    </div>
                            </div>
                            </div>


                          
                        </>
                       
                    )
                }
              
              </div>
            </div>

        </>

    );
}

