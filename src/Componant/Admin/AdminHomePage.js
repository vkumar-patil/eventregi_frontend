import React from "react";
import AdminNav from "./AdminNav";
import UplodEventFom from "./UplodEventFom";
import GetRegisterdUser from "./GetRegisterdUser";
function AdminHomePage() {
  return (
    <>
      <AdminNav />
      {/* <div className="container"> */}
      <div className="row">
        <div className="col-md-8">
          <h2 style={{ textAlign: "center" }}>Registerd Users</h2>
          <GetRegisterdUser />
        </div>
        <div className="col-md-4">
          <h2 style={{ textAlign: "center" }}>Uplod Events</h2>
          <UplodEventFom />
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default AdminHomePage;
