import React from "react";
import './Home.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
const Home =()=>{

    return(
    <>
    <header>
       
        <Link to="./AddData" >Add Data</Link>
        <Link to="./ViewData">ViewData</Link>
       
    </header>
    </>)
}
export default Home