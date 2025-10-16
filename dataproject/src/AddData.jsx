import React, { useState } from "react";
import Store from "./Store";
import { useContext } from "react";
import Header from "./Header";

const AddData = () => {
    const { Datalist, setDatalist } = useContext(Store);
    const [ImagePath, setImagePath] = useState(null);
    const [IdCount, setId] = useState(0);
    const [Data, setData] = useState({
        ID: "",
        Name: "",
        Brand: "",
        Size: "",
        Price: "",
        Description: "",
        File: ""
    })
    const Capture = (event, key) => {

        // const {name, value} = event.target;

        if (key === "File") {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    setImagePath(reader.result);
                    setData({ ...Data, File: reader.result })
                };
            }
        }
        else {
            setData(Data => ({ ...Data, [key]: event.target.value }));
        }
    }

    const Update_Data = (event) => {
        event.preventDefault();
        const newId = IdCount+1;
        setId(newId);
        const newData = { ...Data, ID: newId };
        setDatalist(prev => [...prev, newData]);
        alert("Data Added Successfully!!");
        setData({
            ID:"",
            Name: "",
            Brand: "",
            Size: "",
            Price: "",
            Description: "",
            File: ""
        });
        setImagePath(null);
    }

    return (
        <>
            <div className="Data_form">
                <form onSubmit={(event) => Update_Data(event)}>
                    <h1 style={{ textAlign: "center" }}>ADD DATA</h1>
                    <br /><br />
                    <label>Name: &nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <input type="text" name="Name" onChange={(event) => Capture(event, 'Name')} value={Data.Name} />
                    <br /><br />
                    <label>Brand: &nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <input type="text" onChange={(event) => Capture(event, 'Brand')} value={Data.Brand}/>
                    <br /><br />
                    <label>Size: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <input type="text" onChange={(event) => Capture(event, 'Size')} value={Data.Size}/>
                    <br /><br />
                    <label>Price: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <input type="number" onChange={(event) => Capture(event, 'Price')} value={Data.Price}/>
                    <br /><br />
                    <label>Description: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <textarea onChange={(event) => Capture(event, 'Description')} value={Data.Description}></textarea>
                    <br /><br />
                    <label>Upload Image: &nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <input type="file" onChange={(event) => Capture(event, 'File')}/>
                    <br /><br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="submit" />
                    &nbsp;&nbsp;
                    <input type="reset" />
                </form>
            </div>
        </>
    )
}
export default AddData;