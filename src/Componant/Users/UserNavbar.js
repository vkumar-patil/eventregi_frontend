import React from "react";
import logo from "../Acets/logo.png";
function AdminNav() {
  return (
    <div >
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="./">
          <img src={logo} style={{ width: "40px", borderRadius: "10px" }} />
        </a>
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
            <a class="nav-link active" href="/">
              Home <span class="sr-only">(current)</span>
            </a>
            <a class="nav-link" href="/">
              Log Out
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default AdminNav;
