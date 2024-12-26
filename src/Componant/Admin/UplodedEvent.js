// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function UplodedEvents() {
//   const [Data, setData] = useState([]);

//   useEffect(() => {
//     const fetchdata = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:8000/api/Event/getEvents"
//         );
//         if (response.data) {
//           setData(response.data.data);
//           console.log(response.data.data);
//         }
//       } catch (error) {
//         console.log("Fetch data not found");
//       }
//     };
//     fetchdata();
//   }, []);

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     if (isNaN(date)) {
//       return "Invalid Date";
//     }
//     return date.toISOString().split("T")[0];
//   };

//   const handleClick = async (id) => {
//     try {
//       const itemDel = await axios.delete(
//         `http://localhost:8000/api/Event/deleteEvent/${id}`
//       );
//       if (itemDel) {
//         alert("Item deleted successfully");
//         setData((prevData) => prevData.filter((item) => item._id !== id));
//       }
//     } catch (error) {
//       console.error("Error deleting item:", error.message);
//       alert("Failed to delete item");
//     }
//   };

//   return (
//     <div className="container mt-4">
//       <div className="card bg-info text-white">
//         <div className="card-header text-center">
//           <h4>Registered Users</h4>
//         </div>
//         <div
//           className="card-body scroll-container"
//           style={{
//             maxHeight: "380px",
//             overflowY: "scroll",
//             overflowX: "hidden",
//             border: "1px solid #ccc",
//             padding: "10px",
//             borderRadius: "10px",
//           }}
//         >
//           <div className="table-responsive">
//             <table className="table table-sm table-bordered text-center">
//               <thead className="thead-dark">
//                 <tr>
//                   <th style={{ width: "5%" }}>Sr.No</th>
//                   <th style={{ width: "20%" }}>Event Names</th>
//                   <th style={{ width: "15%" }}>Event Dates</th>
//                   <th style={{ width: "20%" }}> Event Id</th>
//                   <th style={{ width: "20%" }}>Delete Event</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {Data.map((item, index) => (
//                   <tr key={index}>
//                     <td>{index + 1}</td>
//                     <td>{item.eventName}</td>
//                     <td>{formatDate(item.eventDate)}</td>
//                     <td>{item._id}</td>
//                     <td>
//                       <button
//                         className="btn btn-danger"
//                         onClick={() => handleClick(item._id)}
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default UplodedEvents;
