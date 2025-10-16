import React from "react";
import './Header.css'
import { Link } from "react-router-dom";
const Header =()=>{

    return(
    <>
    <header>
       
        <Link to="./AddData" >Add Data</Link>
        <Link to="./ViewData">ViewData</Link>
       
    </header>
    </>)
}
export default Header