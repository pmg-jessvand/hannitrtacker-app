import React from 'react'

import { Link } from 'react-router-dom'

const EventCard = ({ title, id }) => {
  return (
    <Link className="event-card-link" to={`/opdrachten/${id}`}>
      <div className="event-card">
        <p>{title}</p>
      </div>
    </Link> 
  )
}

export default EventCard;