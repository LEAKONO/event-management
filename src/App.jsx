import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventList from "./components/EventList";
import EventDetails from "./components/EventDetails";
import "./App.css"

const App = () => {
  return (
    <Router>
      <div>
        <h1>Event Management System</h1>
        <Routes>
          <Route path="/" element={<EventList />} />
          <Route path="/events/:id" element={<EventDetails />} />  {/* This route should render EventDetails */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
