import React, { useState } from "react";
import axios from "axios";
function UplodEventFom() {
  const [compony, setCompony] = useState("");
  const [eventName, setEventname] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [location, setLocation] = useState("");
  const [discription, setDiscription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/Event/upcomingEvent",
        { compony, eventName, eventDate, location, discription }
      );
      if (response.data) {
        alert("event added successfuly");
        // Clear form fields
        setCompony("");
        setEventname("");
        setEventDate("");
        setLocation("");
        setDiscription("");
      }
    } catch (error) {
      alert("event submition fail");
    }
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="text-white bg-info"
        style={{ borderRadius: "10px" }}
      >
        <div class="form-group ">
          <label for="exampleInputCompony1">Compony Name</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputCompony1"
            aria-describedby="ComponyHelp"
            value={compony}
            onChange={(e) => setCompony(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEventName1">EventName</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEventName1"
            value={eventName}
            onChange={(e) => setEventname(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputLocation1">Location</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputLocation1"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputEventDate1">Event Date</label>
          <input
            type="date"
            class="form-control"
            id="exampleInputEventDate1"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="exampleInputDiscription1">Discription</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputDiscription1"
            value={discription}
            onChange={(e) => setDiscription(e.target.value)}
          />
        </div>
        <button
          type="submit"
          class="btn btn-primary"
          style={{ borderRadius: "5px" }}
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default UplodEventFom;
