import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/events/${id}`)
      .then((response) => response.json())
      .then((data) => {
        // Check if the data is an array (json-server returns an array)
        const eventDetails = data.find((event) => event.id === parseInt(id));
        setEvent(eventDetails);
      })
      .catch((error) => console.error('Error fetching event:', error));
  }, [id]);

  if (!event) {
    return <div>Loading event details...</div>;  // Show loading while data is being fetched
  }

  return (
    <div>
      <h2>{event.title}</h2>
      <img src={event.image} alt={event.title} />
      <p>{event.description}</p>
      <p>Location: {event.location}</p>
      <p>Price: ${event.price}</p>
      <p>Category: {event.category}</p>
    </div>
  );
};

export default EventDetails;
