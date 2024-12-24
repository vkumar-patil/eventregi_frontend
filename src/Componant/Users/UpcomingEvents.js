import axios from "axios";
import React, { useEffect, useState } from "react";
function UpcomingEvents() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fechdata = async () => {
      const response = await axios.get(
        "http://localhost:8000/api/Event/getEvents"
      );
      try {
        if (response.data) {
          setData(response.data.data);
          console.log(response.data);
        }
      } catch (error) {
        console.log("data not found");
      }
    };
    fechdata();
  }, []);
  return (
    <div className="container">
      <h2 style={{ color: "Highlight" }}>Upcoming Events</h2>
      <div
        className="scroll-container"
        style={{
          maxHeight: "670px", // Adjust height as needed
          overflowY: "scroll", // Enables vertical scrolling
          overflowX: "hidden", // Hides horizontal scrolling
          border: "1px solid #ccc", // Optional: Add a border for styling
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        {data.map((item, index) => {
          return (
            <div class="card" key={index} style={{ margin: "10px" }}>
              <div class="card-header bg-info">{item.eventName}</div>
              <div class="card-body">
                <blockquote class="blockquote mb-0">
                  <h4>Company:-{item.company}</h4>
                  <cite title="Source Title">Location:-{item.location}</cite>
                  <br />
                  <cite title="Source Title">Date:-{item.eventDate}</cite>
                  <p></p>
                  <footer class="blockquote-footer">{item.discription}</footer>
                </blockquote>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UpcomingEvents;
