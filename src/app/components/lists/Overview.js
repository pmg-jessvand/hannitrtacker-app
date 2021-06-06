import React from 'react'
// Component Imports
import OverviewItem from './OverviewItem';
import Separator from './Separator'

const Overview = ({ listdata }) => {

  return (
    <div className="overview">
        <div className="row title-row">
          <div className="col-4">
            <h3>Klant</h3>
          </div>
          <div className="col-4">
            <h3>Adres</h3>
          </div>
          <div className="col-4">
            <h3>E-mail</h3>
          </div>
        </div>
        <Separator height="1px"/>

        { listdata ? listdata.map(listItem => (
            <OverviewItem id={listItem.entityId} key={listItem.entityId} col1={listItem.entityLabel} col2={listItem.fieldKlantAdres} col3={listItem.fieldKlantEmail}/>
        ))
        : null
        }
    </div>
  )
}

export default Overview;
