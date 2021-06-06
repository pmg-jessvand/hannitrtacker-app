import React from 'react'
// Component Imports
import { Separator, ProjectListItem } from '../../components'

const Overview = ({ listdata }) => {

  return (
    <>
      { listdata ? listdata.map(listItem => (
      <div key={listItem.entity.uuid} className="project-list">
        <ProjectListItem title={listItem.entity.title} id={listItem.entity.entityId} uuid={listItem.entity.uuid} />
        <Separator height="1px"/>
      </div>
      ))
      : null
      }
    </>
  )
}

export default Overview;
