import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const EventDetails = () => {
  const { id } = useParams();  // This retrieves the event ID from the URL
  const [event, setEvent] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/events/${id}`)
      .then((response) => response.json())
      .then((data) => setEvent(data));
  }, [id]);

  if (!event) {
    return <div>Loading event details...</div>;  // Show loading while data is being fetched
  }

  return (
    <div>
      <h2>{event.title}</h2>
      <img src={event.image} alt={event.title} />
      <p>{event.description}</p>  {/* Assuming there's a description field */}
      <p>Location: {event.location}</p>
      <p>Price: ${event.price}</p>
      <p>Category: {event.category}</p>
      <p>Date: {event.date}</p>
      {/* Add more event details as needed */}
    </div>
  );
};

export default EventDetails;
