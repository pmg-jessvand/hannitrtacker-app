import React from 'react'

const EventCard = ({ title, klant }) => {
  return (
    // <Link className="event-card-link" to={`/opdrachten/${id}`}>
      <div className="event-card">
        <p className="event-client">{klant}</p>
        <p>{title}</p>
      </div>
    // </Link> 
  )
}

export default EventCard;