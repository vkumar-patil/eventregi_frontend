import React from "react";
import { useState } from "react";

import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css"; // Keep this as it is for now

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlelogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/api/user/login",
        { email, password }
      );
      const { token, user } = response.data;

      localStorage.setItem("token", token);
      console.log("login successful ", user);
      if (user.Admin === true) {
        navigate("/AdminHomePage");
      } else {
        navigate("/UserHomepage");
      }
    } catch (error) {
      console.log("login fail", error);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handlelogin} className="login-form">
        <h4 className="login-heading">Login</h4>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <p className="register-link">
          Not registered? <Link to={"/Register"}>Register</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
