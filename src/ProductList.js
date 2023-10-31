import React, { useState, useEffect } from "react";

function ProductList() {
  const [personalInfo, setPersonalInfo] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/personalinfo");
        if (response.ok) {
          const data = await response.json();
          setPersonalInfo(data);
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Personal Information List</h1>
      <ul>
        {personalInfo.map((info) => (
          <li key={info._id}>
            <p>Name: {info.name}</p>
            <p>Age: {info.age}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
