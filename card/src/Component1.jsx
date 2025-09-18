import React from "react";
import './Component1.css'
const Component1 = (Props)=>{
    return(
        <>
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
export default Component1;