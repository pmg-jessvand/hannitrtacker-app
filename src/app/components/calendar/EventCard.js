import React from 'react'

const EventCard = ({ title, klant }) => {
  return (
    // <Link className="event-card-link" to={`/opdrachten/${id}`}>
      <div className="event-card">
        { klant !=null ? <p className="event-client">{klant}</p> : null }
        <p>{title}</p>
      </div>
    // </Link> 
  )
}

export default EventCard;