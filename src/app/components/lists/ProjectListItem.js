import React from 'react'
import { Link } from 'react-router-dom'

const ProjectListItem = ({ title, id, uuid }) => {
  return (
    <div className="project-list-item">
      <Link to={`/projecten/${uuid}`}>
        <div className="project-list-item-id">
          <p>{uuid}</p>
        </div>
        <div className="project-list-item-title">
          <p>{title}</p>
        </div>
      </Link>
    </div>
  )
}

export default ProjectListItem
