import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(true); // New loading state

  useEffect(() => {
    fetch("http://localhost:5000/events")
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
        const uniqueCategories = [...new Set(data.map((event) => event.category))];
        setCategories(uniqueCategories);
        setLoading(false); // Set loading to false when data is fetched
      });
  }, []);

  const filteredEvents = selectedCategory
    ? events.filter((event) => event.category === selectedCategory)
    : events;

  if (loading) {
    return <div>Loading events...</div>; // Display loading message until data is fetched
  }

  return (
    <div>
      <h2>Available Events</h2>
      <label>
        Filter by category:
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="">All</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <div className="event-grid">
        {filteredEvents.map((event) => (
          <div key={event.id} className="event-card">
            <img src={event.image} alt={event.title} />
            <h3>{event.title}</h3>
            <p>Location: {event.location}</p>
            <p>Price: ${event.price}</p>
            <Link to={`/events/${event.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventList;
