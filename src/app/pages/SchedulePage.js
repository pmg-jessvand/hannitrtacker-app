import React from 'react';
// Apollo Imports
import { gql, useQuery } from '@apollo/client';
// Hooks import 
// import { useGetEventInfo } from '../hooks';
// Components Import
import { CalendarComponent } from '../components';
import { useGetEventInfo } from '../hooks';

const SchedulePage = () => {

  const TASKS = gql `
    query {
      nodeQuery(
        filter: {conditions: [{operator: EQUAL, field: "type", value: ["Opdracht"]}]}
      ) {
        entities {
          ... on NodeOpdracht {
            title
            uuid
            fieldTaskStartDate {
              value
            }
            fieldTaskKlant {
              entity {
                ... on NodeKlant {
                  entityId
                  title
                }
              }
            }
          }
        }
      }
    }
  `;

  const { data } = useQuery(TASKS, {
    fetchPolicy: 'cache-first'
  })

  return (
    <div className="page schedule-page">

      <CalendarComponent eventData={ useGetEventInfo(data) }/>
      <div className="container">
      </div>
    </div>
  )
}

export default SchedulePage;