import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const CreateProduct = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event : any) => {
    setFile(event.target.files[0]);
  }
  
  async function handleSubmit(event: any) {
    event.preventDefault();

    const formData = new FormData(event.target);
    
    if (!formData.get('name') || !formData.get('price') || !formData.get('description') || !formData.get('category') || !file) {
      alert("Please fill all the fields and select an image");
      return;
    }

    // Append the file to formData
    formData.append('image', file);

    try {
      const response = await axios.post("http://localhost:8000/products", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      const data = response.data;
      console.log(data);
      alert("Product created successfully");
    } catch (error) {
      console.error("Error details:", error.response ? error.response.data : error.message);
      alert("Error occurred: " + (error.response ? error.response.data : error.message));
    }
  }

  return (
    <>
      <div className="container my-4 w-50 p-3">
        <div className="col md-8 mx-auto rounded border p-4">
          <h2 className="text-center mb-5">CREATE PRODUCT</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input type="text" className="form-control" name="name" id="name" placeholder="Product name" />
              <label htmlFor="name">NAME</label>
            </div>
            <div className="form-floating mb-3">
              <input type="number" className="form-control" name="price" id="price" placeholder="Price" />
              <label htmlFor="price">PRICE</label>
            </div>
            <div className="form-floating mb-4">
              <textarea className="form-control" name="description" placeholder="Leave a description here" id="description"></textarea>
              <label htmlFor="description">DESCRIPTION</label>
            </div>
            <div className="form-floating mb-4">
              <select className="form-select" name="category" id="category" aria-label="Floating label select example">
                <option value="">Select a category</option>
                <option value="1">Breakfast</option>
                <option value="2">Lunch</option>
                <option value="3">Dinner</option>
              </select>
              <label htmlFor="category">CATEGORY</label>
            </div>
            <div className="mb-4">
              <label htmlFor="image" className="form-label">Select Image</label>
              <input type="file" className="form-control" onChange={handleFileChange} name="image" id="image"/>
            </div>
            <div className="row">
              <div className="offset-sm-4 col-sm-4 d-grid mb-4">
                <button type="submit" className="btn btn-primary">SUBMIT</button>
              </div>
              <div className="col-sm-4 d-grid mb-4">
                <Link className="btn btn-secondary" to="/product" role="button">CANCEL</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateProduct;