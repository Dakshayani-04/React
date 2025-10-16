import React, { useContext} from "react";
import Store from "./Store";
import { Link } from "react-router-dom";
import Header from "./Header";
const ViewData = () =>{
    const { Datalist, setDatalist } = useContext(Store);
    console.log(Datalist);
    return(
        <>
        <div className="container">
            {
                Datalist.map((ele, idx) => {
                    return (
                        <Link
                            key={ele.ID}
                            to={`/MoreDetails/${ele.ID}`}
                            className="Product"
                            style={{ textDecoration: "none", color: "inherit" }}
                        >
                            <div className="Product">
                                <div className="Image">
                                    <img src={ele.File} alt="Image" />
                                </div>
                                <div className="info">
                                    <div className="id"><b>ID: </b>{ele.ID}</div>
                                    <div className="brand"><b>Brand: </b>{ele.Brand}</div>
                                    <div className="price"><b>Price: </b>{ele.Price}</div>
                                </div>

                            </div>
                        </Link>
                    )
                })
            }
        </div>
        </>
    )
}
export default ViewData;