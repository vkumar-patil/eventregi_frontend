// import React from "react";
// import EventRegFom from "./EventRegisterForm";
// import UpcomingEvents from "./UpcomingEvents";
// import UserNavbar from "./UserNavbar";

// function UserHomepage() {
//   return (
//     <>
//       <UserNavbar />
//       <div className="container-fluid">
//         <div className="row no-gutters">
//           <div className="col-md-6">
//             <UpcomingEvents />
//           </div>
//           <div className="col-md-6">
//             <EventRegFom />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default UserHomepage;

import React from "react";
import EventRegFom from "./EventRegisterForm";
import UpcomingEvents from "./UpcomingEvents";
import UserNavbar from "./UserNavbar";
function UserHomepage() {
  return (
    <>
      <UserNavbar />
      <div className="container-fluide">
        <div className="row no-gutters">
          <div className="col-md-6">
            <UpcomingEvents />
          </div>
          <div className="col-md-6">
            <EventRegFom />
          </div>
        </div>
      </div>
    </>
  );
}

export default UserHomepage;
