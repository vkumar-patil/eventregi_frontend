import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");

  const navigate = useNavigate();

  const handleregister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://eventregibackend-production-97c8.up.railway.app/api/user/register",
        {
          username,
          email,
          password,
          contact,
        }
      );
      if (response.data) {
        console.log(response.data);
        navigate("/");
      } else {
        alert("Invalid credentials");
        console.log(response.data.error);
      }
    } catch (error) {
      console.log("Registration failed", error);
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleregister} className="register-form">
        <h3 className="register-heading">Registration</h3>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputUsername">UserName</label>
            <input
              type="text"
              className="form-control"
              id="inputUsername"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputContact">Mobile No</label>
            <input
              type="tel"
              className="form-control"
              id="inputContact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail">Email</label>
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword">Password</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        <button type="submit" className="btn register-btn">
          Sign Up
        </button>
        <p className="register-link">
          Already registered? <Link to={"/"}>Login</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
