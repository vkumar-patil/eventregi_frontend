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

    if (!email || !password) {
      alert("Email and Password are required");
      return;
    }

    try {
      const response = await axios.post(
        "https://eventregibackend-production-cb39.up.railway.app/api/user/login",
        { email, password }
      );
      if (response.data.data) {
        console.log(response.data);
      }
      const { token, user } = response.data;

      if (!token || !user) {
        throw new Error("Invalid response from server");
      }

      localStorage.setItem("token", token);
      console.log("Login successful:", user);

      if (user.Admin) {
        navigate("/AdminHomePage");
      } else {
        navigate("/UserHomepage");
      }
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      alert(error.response?.data?.message || "An error occurred during login");
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
