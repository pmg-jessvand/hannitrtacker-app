import React from 'react'
// Apollo Imports
// import { gql, useQuery } from '@apollo/client';
// Components Import
import { CalendarComponent } from '../components';

const SchedulePage = () => {

  return (
    <div className="page schedule-page">

      <CalendarComponent />
      <div className="container">
      </div>
    </div>
  )
}

export default SchedulePage;