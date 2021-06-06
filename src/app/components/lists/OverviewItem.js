import React from 'react'
import { Link } from 'react-router-dom';
// Component Imports
import { Separator } from '../../components'

const OverviewItem = ({ id, col1, col2, col3 }) => {
  return (
    <Link to={`/klanten/${id}`}>
      <div className="row overview-item">
        <div className="col-4 col-md-4 col-lg-4 col-xl-4 item-col">
          <p>{ col1 }</p>
        </div>
        <div className="col-4 col-md-4 col-lg-4 col-xl-4 item-col">
          <p>{ col2 }</p>
        </div>
        <div className="col-4 col-md-4 col-lg-4 col-xl-4 item-col">
          <p>{ col3 }</p>
        </div>
      </div>
      <Separator height="1px"/>
    </Link>
  )
}

export default OverviewItem
