import React from 'react'
import { Link } from 'react-router-dom'
// Components Import 
import { Separator } from '../../components';

const ProjectListItem = ({ title, slug, uuid }) => {
  return (
    <>
      <div className="project-list-item">
        <Link to={slug}>
          <div className="project-list-item-id">
            <p>{uuid}</p>
          </div>
          <div className="project-list-item-title">
            <p>{title}</p>
          </div>
        </Link>
      </div>
      <Separator height="1px"/>
    </>
  )
}

export default ProjectListItem
