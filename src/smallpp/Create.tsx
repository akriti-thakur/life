import React, { useState } from "react"
import { Link } from "react-router-dom"
import { MessageCircleX } from 'lucide-react';



const CreateProduct=()=>{
   async function handelSubmit(event){
    event.preventDefault()

    const formData= new FormData(event.target)
    const product = Object.fromEntries(formData.entries())

    if(!product.name || !product.price || !product.description || !product.category){
      alert("Please fill all the fields")
      return
    }
    
    // alert("Thank You! ")
    try{
       const response = await fetch("http://localhost:8000/products",{
        method: "POST",
        body: formData
        })

        const data = await response.json()
    }
    catch(error){
        alert("enable to connect")
    }
    
   
  }

    return(<>
   
     <div className=" container my-4 w-50 p-3">
      <div className="col md-8 mx-auto rounded border p-4">
        <h2 className="text-center mb-5">CREATE PRODUCT</h2>
        <form onSubmit={handelSubmit}>
        
        <div className="form-floating mb-3">
  <input type="text" className="form-control" name="name" id="name" placeholder="name@example.com"/>
  <label htmlFor="floatingInput">NAME</label>
</div>
<div className="form-floating mb-3">
  <input type="int" className="form-control" name="price" id="price" placeholder="Password"/>
  <label htmlFor="floatingPassword">PRICE</label>
</div>

<div className="form-floating mb-4 ">
  <textarea className="form-control" name="description" placeholder="Leave adescription here" id="description"></textarea>
  <label htmlFor="floatingTextarea">DESCRIPTION</label>
</div>


<div className="form-floating mb-4">
  <select className="form-select"  name="category" id="category" aria-label="Floating label select example">
    <option selected>CATEGORY</option>
    <option value="1">Breakfast</option>
    <option value="2">Lunch</option>
    <option value="3">Dinner</option>
  </select>
</div>

<div className="row">
<div className="offset-sm-4 col-sm-4 d-grid mb-4">
  <button type="submit" className="btn btn-primary">SUBMIT </button>
</div>
<div className="col-sm-4 d-grid mb-4">
  <Link rel="stylesheet" className="btn btn-secondary" to="/product" role="button"/>CANCEL
</div>
</div>
        </form>
      </div>
     </div>
     
  </>
)
}


export default CreateProduct 





