import React from 'react'
// Component Imports
import { ProjectListItem } from '../../components'

const Overview = ({ listdata }) => {

  return (
    <>
      { listdata ? listdata.map(listItem => (
        <ProjectListItem key={listItem.entity.uuid} title={listItem.entity.title} slug={`/projecten/${listItem.entity.uuid}`} uuid={listItem.entity.uuid} />
      ))
      : null
      }
    </>
  )
}

export default Overview;
