import React, { useEffect } from "react";
import { useState } from "react";

import { Link } from "react-router-dom";


const ProDuct = () => {
    const [userlist, setUserlist] = useState([]);
  
//     useEffect(() => {
//       fetch("http://localhost:59871/db.json")
//         .then((response) => {
//           if (response.ok) {
//             return response.json();
//           } else {
//             throw new Error();
           
//           }
//         })
//         .then((data) => {
//           setProductlist(data);
//         })
//         .catch((error) => {
//           alert("Unable to get data");
          
//         });
//  },[]); // Empty dependency array ensures this effect runs only once (on mount)
  
    useEffect(()=>{
      fetch("http://localhost:8000/user")
      .then((response)=>{
        if(!response.ok){
          return new Error()
        }
        else{
          return response.json()
        }
      })
      .then((data)=>{
        setUserlist(data)
      })
      .catch((error)=>{
        alert("unable to get the data")
      })



          
    },[])
  


    
  
return(

    <>
    <div className="container my-4">
        <h2 className="text-center mb-4">USER</h2>
        <div className="row mb-3">
        <div className="col">
            <Link className="btn btn-primary me-1"  role="button" to="/createproduct">Create users</Link>
            <button type="button" className="btn active" data-bs-toggle="button" aria-pressed="true">Refresh</button>

        </div>
        </div>
    </div>
    
    <table className="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">NAME</th>
                    
                    <th scope="col">USERNAME</th>
                    <th scope="col">EMAIL</th>
                    {/* <th scope="col">ADDRESS</th> */}
                    <th scope="col">PHONE</th>
                    <th scope="col">WEBSITE</th>
                    {/* <th scope="col">COMAPNY</th> */}


                </tr>
            </thead>
            <tbody>
                {userlist.map((user,index)=>{
                   const{id,name,username,email,address,phone,website,company}= user;

                    return(

                        <tr key={index}>
                        <th scope="row">{id}</th>
                        <td>{name}</td>
                        
                        <td>{username}</td>
                        <td>{email}</td>
                        {/* <td>{address}</td> */}
                        <td>{phone}</td>
                        <td>{website}</td>
                        {/* <td>{company}</td> */}


                       

                        <td style={{whiteSpace:"nowrap",width:"10px"}}>
                            <div className="ma">
                                <Link  className="btn btn-primary" to={"/edit"+id}>Edit</Link>
                                <button type="button" className="btn btn-danger">Delete</button>
                            </div>
                        </td>
                        

                    </tr>
                  
                    )
 })}
               
            </tbody>
        </table></>

)
 }


 export default ProDuct;