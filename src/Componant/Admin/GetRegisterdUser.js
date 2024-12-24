import axios from "axios";
import React, { useState, useEffect } from "react";

function GetRegisterdUser() {
  const [Data, setData] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/Event/getRegisterdUsers"
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

  return (
    <div className="container mt-4">
      <div className="card bg-info text-white">
        <div className="card-header text-center">
          <h4>Registered Users</h4>
        </div>
        <div className="card-body">
          {/* Add table-responsive wrapper */}
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
                    <td>{item.eventDate}</td>
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
