import React from "react";
import myimage from './assets/react.svg';
import './CardMain.css'
const CardMain = () =>{

    var Mycard=[
       { image:myimage,
        price:200,
        brand:"puma"
       },
       { image:myimage,
        price:2000,
        brand:"Hp"
       },
       { image:myimage,
        price:20000,
        brand:"ipad"
       },
       { image:myimage,
        price:3000,
        brand:"campus"
       },
       { image:myimage,
        price:3000,
        brand:"campus"
       },
       { image:myimage,
        price:3000,
        brand:"campus"
       },
    ]
    return(
        <>
        <div className="parent">
        {
            Mycard.map((ele)=>{
              return(
                 <div className="card">
                            <div className="logo"><img src={ele.image}/></div>
                            <div className="info">
                              <p>Price:{ele.price}</p> 
                              <p>Brand:{ele.brand}</p> 
                            </div>
                        </div>
              )   

            })
        }
        </div>
        
        </>
    )
}
export default CardMain