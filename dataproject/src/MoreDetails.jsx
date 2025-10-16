import React, { useContext, useEffect, useState } from "react";
import Store from "./Store";
import { useParams } from "react-router-dom";
import Header from "./Header";

const MoreDetails = () => {
    const { ID } = useParams();
    const { Datalist, setDatalist } = useContext(Store);
    const [myCard, setMyCard] = useState(null);
    console.log(Datalist);
    useEffect(() => {
        if (Datalist && Datalist.length > 0) {
            const foundItem = Datalist.find((ele) => ele.ID === Number(ID) || ele.ID === ID);
            setMyCard(foundItem);
        }
    }, [ID, Datalist]);
    return (
        <>
        <div className="containers">
            {myCard ? (
                <div className="details-info">
                    <div className="details-image">
                        <img src={myCard.File} alt={myCard.Name} />
                    </div>

                    <div className="details-content">
                        <div><b>Name:</b> {myCard.Name}</div>
                        <div><b>Brand:</b> {myCard.Brand}</div>
                        <div><b>Price:</b> ₹{myCard.Price}</div>
                        <div><b>Size:</b> {myCard.Size}</div>
                        <div><b>Description:</b> {myCard.Description}</div>
                    </div>
                </div>
            ) : (
                <h3 style={{ textAlign: "center", marginTop: "2rem" }}>
                    Item not found!
                </h3>
            )}
        </div>
        </>
  );
};

export default MoreDetails;