import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export function Bookupdate(){
    var {bookid} = useParams()
    const[bookname,setBookname]=useState('')
    const[author,setAuthor]=useState('')
    const[description,setDescription]=useState('')
    const[category,setCategory]=useState('')
    const[rating,setRating]=useState('')
    const[image,setImage]=useState('')
    const[price,setPrice]=useState('')
   
    useEffect(()=>{
        fetch("http://localhost:5040/singlebook/"+bookid)
        .then(res=>res.json())
        .then((data)=>{
            setBookname(data[0].bookname)
            setAuthor(data[0].author)
            setDescription(data[0].description)
            setCategory(data[0].category)
            setRating(data[0].rating)
            setImage(data[0].image)
            setPrice(data[0].price)
            
        })
    },[])
    function bookupdate(event){
        event.preventDefault()
        var bookname=document.getElementById("bookname").value
     
        var author=document.getElementById("author").value
    
        var description=document.getElementById("description").value
      
        var category=document.getElementById("category").value
    
        var rating=document.getElementById("rating").value
       
        var image=document.getElementById("image").value
       
        var price=document.getElementById("price").value
     

        var key={
            bookname:bookname,
            author:author,
            description:description,
            category:category,
            rating:rating,
            image:image,
            price:price
           
         
        }
        if(bookname==""){
            alert("Enter the Book Name")
        }
        else if(author==""){
            alert("Enter the Author Name")

        }
        else if(description==""){
            alert("Enter the Description")

        }
        else if(category==""){
           alert("Enter the Category")

        }
        else if(rating==""){
            alert("Enter the rating")

        }
        else if(image==""){
            alert("Enter the Image link")

        }
        else if(price==""){
            alert("Enter the Price")

        }
       
       
        else{
            axios.put("http://localhost:5040/bookupdate/"+bookid,key)
            .then((upddet)=>{
                if(upddet.data.status==='not_updated'){
                    alert("data not updated")
                    console.log("not_updated")
                    console.log(key)
                
                }
                else if (upddet.data.status==='success'){
                    alert("data updated Successfully!")
                    console.log("success")
                    // window.location.href="/booklist"
                }

            })
        }
    }
    return (
        <>
             <div className="projDashboard">
        <div className="text-center title">
            <h3>AERELE LIBRARY</h3>
            <h5>The World of Bibliophiles!</h5>
           
            </div>
            <div className="addbook text-center w-75 p-5 row">
                <div></div>
                    <form  onSubmit={bookupdate}>  
                     
                        <input type="text" placeholder="bname" onChange={(upd)=>setBookname(upd.target.value)}  id="bookname" value={bookname} /><br/>
                      
                       <input type="text" placeholder="author" onChange={(upd)=>setAuthor(upd.target.value)}  id="author" value={author} /><br/>
                    
                        <textarea onChange={(upd)=>setDescription(upd.target.value)} id="description" name="description" rows="7" cols="70" value={description}></textarea><br/>
                  
                        <input type="text" onChange={(upd)=>setCategory(upd.target.value)} id="category" value={category}/>
                     
                        <input type="text" placeholder="image url" onChange={(upd)=>setImage(upd.target.value)}  id="image" value={image}  /><br/>
                
                        <input type="text" placeholder="rating" onChange={(upd)=>setRating(upd.target.value)}  id="rating" value={rating} /><br/>
                      
                        <input type="text" placeholder="price" onChange={(upd)=>setPrice(upd.target.value)} id="price" value={price} /><br/>
                       
                    
                       <input type="submit" className="bg-secondary p-2" value="Update"
                       />
                                            </form>
                                       
                                            </div>                    

                    
                  
              

            </div>
        </>
    );
}