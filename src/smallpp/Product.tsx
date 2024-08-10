import React, { useEffect } from "react";
import { useState } from "react";
import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";


const ProDuct = () => {
    const [productlist, setProductlist] = useState([]);
  
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
      fetch("http://localhost:8000/products")
      .then((response)=>{
        if(!response.ok){
          return new Error()
        }
        else{
          return response.json()
        }
      })
      .then((data)=>{
        setProductlist(data)
      })
      .catch((error)=>{
        alert("unable to get the data")
      })



          
    },[])
  
    
  
return(

    <>
    <div className="container my-4">
        <h2 className="text-center mb-4">Product</h2>
        <div className="row mb-3">
        <div className="col">
            <Link className="btn btn-primary me-1"  role="button" to="/createproduct">Create Product</Link>
            <button type="button" className="btn active" data-bs-toggle="button" aria-pressed="true">Refresh</button>

        </div>
        </div>
    </div>
    
    <table className="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">NAME</th>
                    
                    <th scope="col">CATEGORY</th>
                    <th scope="col">PRICE</th>
                    <th scope="col">DISCRIPTION</th>


                </tr>
            </thead>
            <tbody>
                {productlist.map((product,index)=>{
                   const{id,name,category,price,description}= product;

                    return(

                        <tr key={index}>
                        <th scope="row">{id}</th>
                        <td>{name}</td>
                        
                        <td>{category}</td>
                        <td>{price}</td>
                        <td>{description}</td>
                       

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