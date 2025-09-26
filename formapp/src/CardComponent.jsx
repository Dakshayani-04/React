import React from "react";
import './CardComponent.css'
import { useState,useEffect } from "react";
const CardComponent = ()=>{
    const [CompleteData,setCompleteData]=useState([
        {
            "Name":"Damini"
        },
        {
            "Name":"Anu"
        },
        {
            "Name":"Sruthi"
        },
        {
            "Name":"Megha"
        },
        {
            "Name":"Rashi"
        },
        {
            "Name":"Alia"
        },
        {
            "Name":"Shradhha"
        }
    ])
    const [QueryResult,setQueryResult]=useState([])

    const[UserQuery,setUserQuery]=useState("")
    const Capture =(event)=>{
        setUserQuery(event.target.value)
    }

    useEffect(()=>{
        if (UserQuery !=""){
            var arr=CompleteData.filter(ele=>ele.Name.includes(UserQuery))
            setQueryResult(arr)
        }
        else{
            setQueryResult(CompleteData)
        }
    },[UserQuery])
    return(
        <>
        <div className="input-parent"> <input  onChange={(event)=>Capture(event)} type="text" placeholder="Search......."/></div>
        <div className="parent">
           {
            QueryResult.map(ele =>{
                return <div className="card">{ele.Name}</div>
            })
           }

        </div>
        </>
    )
}
export default CardComponent