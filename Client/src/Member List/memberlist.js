

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// export function Memberlist() {
//   const [memlist, setMemlist] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5040/memlist")
//       .then((storedata) => storedata.json())
//       .then((memdata) => setMemlist(memdata));
//   }, []);

//   const del = (id) => {
//     var key = { id: id };
//     axios.post("http://localhost:5040/delete/", key).then((res) => {
//       if (res.data.status === "error") {
//         alert("Data not deleted");
//       } else if (res.data.status === "success") {
//         alert("Data deleted");
//       }
//     });
//   };

//   return (
//     <>
//       <div className="container">
//         <div className="text-center title">
//           <h3>AERELE LIBRARY</h3>
//           <h5>The World of Bibliophiles!</h5>
//         </div>
//         <div>
//           <Link to="/addmem">
//             <button className="btn btn-primary">Add Member</button>
//           </Link>
//         </div>
//         <div className="table-responsive">
//           <table className="table">
//             <thead>
//               <tr className="booktitle">
//                 <th>ID</th>
//                 <th>Member First Name</th>
//                 <th>Member Last Name</th>
//                 <th>Email</th>
//                 <th>Phoneno</th>
//                 <th>Username</th>
//                 <th>Password</th>
//                 <th>Update / Delete</th>
//               </tr>
//             </thead>
//             <tbody>
//               {memlist.map((value, index) => (
//                 <tr key={index}>
//                   <td className="rid">{value.id}</td>
//                   <td className="firstname">{value.fname}</td>
//                   <td className="lastname">{value.lname}</td>
//                   <td className="email">{value.email}</td>
//                   <td className="phoneno">{value.phoneno}</td>
//                   <td className="username">{value.username}</td>
//                   <td className="password">{value.password}</td>
//                   <td className="membutton">
//                     <button
//                       className="btn btn-danger"
//                       onClick={() => {
//                         del(value.id);
//                       }}
//                     >
//                       Delete
//                     </button>
//                     <Link to={`/userupdate/${value.id}`}>
//                       <button className="btn btn-info">Update</button>
//                     </Link>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// }


import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export function Memberlist() {
  const [memlist, setMemlist] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5040/memlist")
      .then((storedata) => storedata.json())
      .then((memdata) => setMemlist(memdata));
  }, []);

  const del = (id) => {
    var key = { id: id };
    axios.post("http://localhost:5040/delete/", key).then((res) => {
      if (res.data.status === "error") {
        alert("Data not deleted");
      } else if (res.data.status === "success") {
        alert("Data deleted");
      }
    });
  };

  return (
    <>
      <div className="container memberDiv">
        <div className="text-center title">
          <h3>AERELE LIBRARY</h3>
          <h5>The World of Bibliophiles!</h5>
        </div>
        <div>
          <Link to="/addmem">
            <button className="btn btn-primary">Add Member</button>
          </Link>
        </div>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr className="booktitle">
                <th>ID</th>
                <th>Member First Name</th>
                <th>Member Last Name</th>
                <th>Email</th>
                <th>Phoneno</th>
                <th>Username</th>
                <th>Password</th>
                <th>Update / Delete</th>
              </tr>
            </thead>
            <tbody>
              {memlist.map((value, index) => (
                <tr key={index} className="table-row">
                  <td className="rid">{value.id}</td>
                  <td className="firstname">{value.fname}</td>
                  <td className="lastname">{value.lname}</td>
                  <td className="email">{value.email}</td>
                  <td className="phoneno">{value.phoneno}</td>
                  <td className="username">{value.username}</td>
                  <td className="password">{value.password}</td>
                  <td className="membutton">
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        del(value.id);
                      }}
                    >
                      Delete
                    </button>
                    <Link to={`/userupdate/${value.id}`}>
                      <button className="btn btn-info">Update</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
