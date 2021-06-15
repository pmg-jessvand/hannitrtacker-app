import React from 'react'

const EventCard = ({ title, klant }) => {
  return (
    <div className="event-card animate__animated animate__fadeIn">
      { klant !=null ? <p className="event-client">{klant}</p> : null }
      <p>{title}</p>
    </div>
  )
}

export default EventCard;