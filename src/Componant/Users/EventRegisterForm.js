import React, { useEffect, useState } from "react";
import $ from "jquery";
import "jquery-ui-dist/jquery-ui.css"; // Import jQuery UI CSS
import "jquery-ui-dist/jquery-ui"; // Import jQuery UI
import "./EventRegisterForm.css";
import axios from "axios";
function EventRegForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [Contact, setContact] = useState("");
  const [eventName, SetEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [payment, setPayment] = useState("");

  useEffect(() => {
    // Initialize jQuery UI datepicker for the event date field
    $("#datetimepicker").datepicker({
      dateFormat: "yy-mm-dd",
      minDate: 0, // Prevent selecting past dates
    });
  }, []);

  const validateForm = () => {
    const name = $("#name").val().trim();
    const email = $("#email").val().trim();
    const phone = $("#phone").val().trim();
    const eventName = $("#eventName").val().trim();
    const eventDate = $("#datetimepicker").val().trim();
    const payment = $("#payment").val().trim();

    // Validation logic
    if (!name || name.length < 3) {
      alert("Name must be at least 3 characters long.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      alert("Phone number must be 10 digits.");
      return false;
    }

    if (!eventName) {
      alert("Event name is required.");
      return false;
    }

    if (!eventDate) {
      alert("Please select a valid event date.");
      return false;
    }

    if (!payment) {
      alert("Payment details are required.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (validateForm()) {
        const token = localStorage.getItem("token");
        const response = await axios.post(
          "https://eventregibackend-production-97c8.up.railway.app/api/Event/EventRegister",
          {
            username,
            email,
            Contact,
            eventName,
            eventDate,
            payment,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`, // Add JWT token here
            },
          }
        );
        if (response.data) alert("Form submitted successfully!");
        console.log("Form submitted");
        console.log(response.data);
        setUsername("");
        setContact("");
        setEmail("");
        setEventDate("");
        setPayment("");
        SetEventName("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2 style={{ color: "green" }}>Event Registration Form</h2>
      <div className="form-container">
        <form id="event-registration-form" onSubmit={handleSubmit}>
          <h2 style={{ color: "green" }}>Registration</h2>
          <div className="form-group">
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              value={Contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="eventName">Event Name:</label>
            <input
              type="text"
              id="eventName"
              name="eventName"
              placeholder="Enter the event name"
              value={eventName}
              onChange={(e) => SetEventName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="datetimepicker">Event Date:</label>
            <input
              type="text"
              id="datetimepicker"
              placeholder="Select event date"
              value={eventDate}
              onChange={(e) => setEventDate(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="payment">Payment Details:</label>
            <input
              type="text"
              id="payment"
              name="payment"
              placeholder="CreditCard/DebitCard/UPI"
              value={payment}
              onChange={(e) => setPayment(e.target.value)}
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default EventRegForm;
