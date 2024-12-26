import React from "react";
import logo from "../Acets/logo.png";
import { Link } from "react-router-dom";
function AdminNav() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <span class="navbar-brand">
          <img src={logo} style={{ width: "40px", borderRadius: "10px" }} />
        </span>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            {/* <span class="nav-link active">
              <Link to={"/DeleteEvents"}>DeleteEvents</Link>
            </span> */}
            <span class="nav-link active">
              Home <span class="sr-only">(current)</span>
            </span>
            <Link to={"/"} class="nav-link">
              Log Out
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default AdminNav;
