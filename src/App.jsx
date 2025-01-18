import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import EventList from "./components/EventList";
import EventDetails from "./components/EventDetails";
import Signup from "./components/Signup";
import "./App.css";


const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <h1>Event Management System</h1>
          <Link to="/">Home</Link>
        </nav>
        <Routes>
          <Route path="/" element={<EventList />} />
          <Route path="/events/:id" element={<EventDetails />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
