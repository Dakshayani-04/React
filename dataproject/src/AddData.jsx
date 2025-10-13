import React from "react";
import {useState,useEffect} from "react"
import './AddData.css'
import Home from './Home'
const AddData =()=>{
    const [formData,setformData]=useState(
        [
            {
                "Name":"",
                "Brand":"",
                "Size":"",
                "Price":"",
                "Description":"",
            }

        ]
    )
    const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setformData((prev) => ({
    ...prev,
    [name]: type === "file" ? files[0] : value,
  }));
};

const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Form Data Submitted:");
  console.log("Name:", formData.Name);
  console.log("Brand:", formData.Brand);
  console.log("Size:", formData.Size);
  console.log("Price:", formData.Price);
  console.log("Description:", formData.Description);
  console.log("Image File:", formData.Image);
};

const handleReset = () => {
  setformData({
    Name: "",
    Brand: "",
    Size: "",
    Price: "",
    Description: "",
    Image: null,
  });
};

    return(
    <>
    <Home/>
    <div className="parent">
    <form>
        <h1>ADD DATA</h1>
        <label>Name:&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input type="text"/>
        <br/> <br/> <br/>
        <label>Brand:&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input type ="text"/>
        <br/> <br/> <br/>
        <label>Size:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label> 
        <input type ="text"/>
        <br/> <br/> <br/>
        <label>Price:&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input type="number"/>
        <br/> <br/> <br/>
        <label>Description:&nbsp;&nbsp;&nbsp;</label>
        <textarea/>
         <br/> <br/> <br/>
        <label>Choose Image:&nbsp;&nbsp;&nbsp;</label>
        <input type="file"/>
         <br/> <br/> <br/>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;
        <input type="submit"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="reset"/>
    </form>
    </div>
    </>
    )
}
export default AddData