import React from "react";
import myimage from './assets/react.svg';
import './FunctionComponent.css'
const FunctionComponent = (Props) =>{
    console.log(Props)
    return(
        <>
        {<div className="card">
                            <div className="logo"><img src={ele.image}/></div>
                            <div className="info">
                              <p>Price:{ele.price}</p> 
                              <p>Brand:{ele.brand}</p> 
                            </div>
                        </div>  
                    
    }
        </>
    )    
        
        
}
export default  FunctionComponent