import React from 'react'
import { Link } from 'react-router-dom'
// Components Import
import { PageHeader } from '../components';

const ProjectDetailPage = ({match: {params} }) => {
  return (
    <div className="page projecet-detail-page">
      <PageHeader title="Project Detail" />

      <div className="container">
        <div className="project-detail-tasklist">
          <p>Project: {params.id}</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetailPage
