import axios from "axios";
import React, { useState, useEffect } from "react";

function GetRegisterdUser() {
  const [Data, setData] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(
          "https://eventregibackend-production-97c8.up.railway.app/api/Event/getRegisterdUsers"
        );
        if (response.data) {
          setData(response.data.data);
        }
      } catch (error) {
        console.log("Fetch data not found");
      }
    };
    fetchdata();
  }, []);

  // Define formatDate function here
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date)) {
      return "Invalid Date";
    }
    return date.toISOString().split("T")[0]; // Outputs: YYYY-MM-DD
  };

  return (
    <div className="container mt-4">
      <div className="card bg-info text-white">
        <div className="card-header text-center">
          <h4>Registered Users</h4>
        </div>
        <div
          className="card-body scroll-container"
          style={{
            maxHeight: "380px", // Adjust height as needed
            overflowY: "scroll", // Enables vertical scrolling
            overflowX: "hidden", // Hides horizontal scrolling
            border: "1px solid #ccc", // Optional: Add a border for styling
            padding: "10px",
            borderRadius: "10px",
          }}
        >
          <div className="table-responsive">
            <table className="table table-sm table-bordered text-center">
              <thead className="thead-dark">
                <tr>
                  <th style={{ width: "5%" }}>Sr.No</th>
                  <th style={{ width: "20%" }}>Event Name</th>
                  <th style={{ width: "15%" }}>Event Date</th>
                  <th style={{ width: "20%" }}>User Name</th>
                  <th style={{ width: "20%" }}>User Email</th>
                  <th style={{ width: "20%" }}>User Contact</th>
                </tr>
              </thead>
              <tbody>
                {Data.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.eventName}</td>
                    <td>{formatDate(item.eventDate)}</td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>{item.Contact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetRegisterdUser;
