import React from "react";
import './Component1.css'
const Component3 = (Props)=>{
    return(
        <>
        <h1>hello</h1>
        <p>hi this is dakshaayni</p>
       <div>
        <div className="parent">
            {
                Props.data.map((ele)=>{
                    return (
                        <div className={ele.varient=="Green"?"card bg-green":"card bg-red"}>{ele.name}</div>
                       
                    )
                })
            }
        </div>
       </div>
        </>
    )
}
export default Component3;