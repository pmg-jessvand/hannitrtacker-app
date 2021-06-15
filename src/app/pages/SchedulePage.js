import React, { useState } from 'react';
// Apollo Imports
import { gql, useQuery } from '@apollo/client';
// Hooks import 
import { useGetEventInfo } from '../hooks';
// Components Import
import { AddEventButton, AddEventModal, CalendarComponent } from '../components';

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

  const [ open, setOpen ] = useState(false);

  const { data } = useQuery(TASKS, {
    fetchPolicy: 'cache-first'
  })

  const handleModal = () => {
    setOpen(!open)
  }

  return (
    <div className="page schedule-page">
      <CalendarComponent eventData={ useGetEventInfo(data) }/>
      <AddEventButton handleClick={handleModal} isModalOpen={open}/>
      <AddEventModal isOpen={open} />
    </div>
  )
}

export default SchedulePage;