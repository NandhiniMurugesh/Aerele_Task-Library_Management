import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export function TransactionList() {
  const [translist, setTranslist] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5040/transdet")
      .then((response) => response.json())
      .then((data) => setTranslist(data));
  }, []);

  const del = (transid) => {
    var key = { transid: transid };
    axios.post("http://localhost:5040/delete/", key).then((res) => {
      if (res.data.status === "error") {
        alert("data not deleted");
      } else if (res.data.status === "success") {
        alert("data deleted");
      }
    });
  };

  return (
    <div className="memlist container">
      <div className="memcontent">
        <div className="container text-center title">
          <h3>AERELE LIBRARY</h3>
          <h5>The World of Bibliophiles!</h5>
        </div>

        <table className="table">
          <thead className="transtitle">
            <tr>
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
          </thead>
          <tbody>
            {translist.map((value, index) => (
              <tr key={index}>
                <td>{value.transid}</td>
                <td>{value.id}</td>
                <td>{value.bookid}</td>
                <td>{value.issuedate}</td>
                <td>{value.returndate}</td>
                <td>{value.fineamnt}</td>
                <td>{value.status}</td>
                <td>{value.outdebt}</td>
                <td>{value.dueday}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => del(value.transid)}
                  >
                    Delete
                  </button>
                  <Link to={`/transupdate/${value.transid}`}>
                    <button className="btn btn-info">Update</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
