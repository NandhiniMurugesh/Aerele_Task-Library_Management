import React from "react";
import { Link, useParams } from "react-router-dom";
export function Menu(){
    var {id}=useParams()
    return(
        <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Home</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
              
        
        <li class="nav-item">
          <a class="nav-link" href="/memlist">Memberlist</a>
        </li>
       
        <li class="nav-item">
          <a class="nav-link" href="/booklist">Booklist</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/transaction
          ">Transaction</a>
        </li>
      
        
        <li class="nav-item">
          <a class="nav-link" href="/">Log Out</a>
        </li>
       
     

        
        
      </ul>
    </div>
  </div>
</nav>
        </>
    );
}