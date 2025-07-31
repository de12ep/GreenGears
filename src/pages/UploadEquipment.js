import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import EquipmentService from "../Services/EquipmentService";

import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    pricePerDay: "",
    category: "",
    location: "",
   availability: false,
  });
  const navigate = useNavigate();
  const [image, setImage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    // setProduct({...product, image: e.target.files[0]})
  };

  const submitHandler = async(event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append( "dto", new Blob([JSON.stringify(product)], { type: "application/json" }));

       await EquipmentService.uploadEquipment(formData);
        navigate("/owner")
  }

   

  return (
    <div className="container">
    <div className="center-container">
      <form className="row g-3 pt-5" onSubmit={submitHandler}>
        <div className="col-md-6">
          <label className="form-label">
            <h6>Name</h6>
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Product Name"
            onChange={handleInputChange}
            value={product.name}
            name="name"
          />
        </div>
        
        <div className="col-12">
          <label className="form-label">
            <h6>Description</h6>
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Add product description"
            value={product.description}
            name="description"
            onChange={handleInputChange}
            id="description"
          />
        </div>
        <div className="col-5">
          <label className="form-label">
            <h6>pricePerDay</h6>
          </label>
          <input
            type="number"
            className="form-control"
            placeholder="Eg: $1000"
            onChange={handleInputChange}
            value={product.pricePerDay}
            name="pricePerDay"
            id="pricePerDay"
          />
        </div>
     
           <div className="col-md-6">
          <label className="form-label">
            <h6>Category</h6>
          </label>
          <select
            className="form-select"
            value={product.category}
            onChange={handleInputChange}
            name="category"
            id="category"
          >
            <option value="">Select category</option>
            <option value="Tractor">Tractor</option>
            <option value="Attachment">Attachment</option>
            <option value="Utitly">Utitly</option>
            
          </select>
        </div>
         <div className="col-md-6">
          <label className="form-label">
            <h6>location</h6>
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="location Name"
            onChange={handleInputChange}
            value={product.location}
            name="location"
          />
        </div>

        {/* <input className='image-control' type="file" name='file' onChange={(e) => setProduct({...product, image: e.target.files[0]})} />
    <button className="btn btn-primary" >Add Photo</button>  */}
        <div className="col-md-4">
          <label className="form-label">
            <h6>Image</h6>
          </label>
          <input
            className="form-control"
            type="file"
            onChange={handleImageChange}
          />
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="availability"
              id="gridCheck"
              checked={product.availability}
              onChange={(e) =>
                setProduct({ ...product, availability: e.target.checked })
              }
            />
            <label className="form-check-label">availability</label>
          </div>
        </div>
        <div className="col-12">
          <button
            type="submit"
            className="btn btn-primary"
            // onClick={submitHandler}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};
export default AddProduct;

