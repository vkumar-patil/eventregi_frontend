// import axios from "axios";
// import React, { useEffect, useState } from "react";

// function UpcomingEvents() {
//   const [data, setData] = useState([]);

//   // Helper function to format the date as YY-MM-DD
//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     if (isNaN(date)) {
//       return "Invalid Date"; // If the date is invalid, return a placeholder
//     }
//     const year = date.getFullYear().toString().slice(-2); // Get last two digits of the year
//     const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Get month (01-12)
//     const day = date.getDate().toString().padStart(2, "0"); // Get day (01-31)
//     return `${year}-${month}-${day}`; // Return formatted date
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:8000/api/Event/getEvents"
//         );
//         if (response.data) {
//           setData(response.data.data);
//           console.log(response.data);
//         }
//       } catch (error) {
//         console.log("Data not found");
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <div className="container">
//       <h2 style={{ color: "Highlight" }}>Upcoming Events</h2>
//       <div
//         className="scroll-container"
//         style={{
//           maxHeight: "670px",
//           overflowY: "scroll",
//           overflowX: "hidden",
//           border: "1px solid #ccc",
//           padding: "10px",
//           borderRadius: "10px",
//         }}
//       >
//         {data.map((item, index) => {
//           return (
//             <div className="card" key={index} style={{ margin: "10px" }}>
//               <div className="card-header bg-info">{item.eventName}</div>
//               <div className="card-body">
//                 <blockquote className="blockquote mb-0">
//                   <h4>Company: {item.company}</h4>
//                   <cite title="Source Title">Location: {item.location}</cite>
//                   <br />
//                   <cite title="Source Title">
//                     Date: {formatDate(item.eventDate)}
//                   </cite>
//                   <p></p>
//                   <footer className="blockquote-footer">
//                     {item.description}
//                   </footer>
//                 </blockquote>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default UpcomingEvents;

import axios from "axios";
import React, { useEffect, useState } from "react";
function UpcomingEvents() {
  const [data, setData] = useState([]);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date)) {
      return "Invalid Date"; // If the date is invalid, return a placeholder
    }
    const year = date.getFullYear().toString().slice(-2); // Get last two digits of the year
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Get month (01-12)
    const day = date.getDate().toString().padStart(2, "0"); // Get day (01-31)
    return `${year}-${month}-${day}`; // Return formatted date
  };
  useEffect(() => {
    const fechdata = async () => {
      const response = await axios.get(
        "https://eventregibackend-production-97c8.up.railway.app/api/Event/getEvents"
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
                  <cite title="Source Title">
                    Date:-{formatDate(item.eventDate)}
                  </cite>
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
