import React, { useEffect, useState } from "react";
import axios from "axios";

function Login() {
  const [data, setData] = useState([]); // Initialize data as an empty array
  
  const getData = async () => {
    try {
      const response = await axios.get("https://backend-nsk7.onrender.com/api/routes/fetch");
      console.log("fetch:", response.data);
      setData(response.data); // Set data to the array of results
    } catch (error) {
      console.error("Error fetching data:", error);
      setData([]); // Handle error by setting data to an empty array
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {data.length > 0 ? (
        data.map((item, index) => (
          <div key={index}>
            <h1>Name: {item.name || "N/A"}</h1>
            <h1>Email: {item.email || "N/A"}</h1>
            <h1>Address: {item.address || "N/A"}</h1>
            <hr /> {/* Optional separator for each item */}
          </div>
        ))
      ) : (
        <h1>{data.length === 0 ? "No data available" : "Loading..."}</h1>
      )}
    </>
  );
}

export default Login;
