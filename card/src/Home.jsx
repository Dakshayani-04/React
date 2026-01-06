import React, { useState } from "react";
import axios from "axios";
const Home = () => {
  const [data, setData] = useState([]);
  const GetData = async () => {
    // await axios
    //   .get("https://jsonplaceholder.typicode.com/prughdtjosts")
    //   .then((response) => {
    //     console.log(response.data);
    //     setData(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error?.response?.data?.message);
    //   });

    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts?name=testing&roll=srgdtht",
        {
            name:"tsxint",
            roll:"ijfisudrhg"
        }
      );

      const data = req.body
      const data1 = {
        name:"",
        roll:""
      }

      if (response.status !== 200) {
        alert("Api call failed");
      }
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <h1>Home Page</h1>
      <p>
        This is a home page which is also gives complete details of page in this
        particular page
      </p>
      <div
        style={{
          width: "700px",
          height: "auto",
          minHeight: "500px",
          background: "green",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          style={{
            padding: "10px 5px",
            borderRadius: "10px",
            border: "none",
            marginBottom: "10px",
          }}
          onClick={GetData}
        >
          Get Data
        </button>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            rowGap: "10px",
          }}
        >
          {data.map((ele) => {
            return (
              <div
                key={ele.id}
                style={{
                  width: "220px",
                  height: "auto",
                  border: "1px solid red",
                }}
              >
                <div>Title: {ele.title}</div>
                <div>Body: {ele.body}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Home;
