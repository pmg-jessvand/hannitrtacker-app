import React, { useEffect, useState } from 'react';
import { gql, useMutation } from '@apollo/client';

const AddEventModal = ({ isOpen }) => {

  const CREATE_TASK = gql`
    mutation($input: TaskInput!) {
      createTask(input:$input) {
        entity {
          ... on NodeOpdracht {
            title
            entityUuid
            fieldTaskDescription,
            fieldTaskEstimatedTime,
            fieldTaskKlant {
              entity {
                entityLabel
              }
            }
            fieldTaskProject {
              entity {
                entityLabel
              }
            }
            fieldTaskStartDate {
              date
            }
          }
        }
        errors
        violations {
          message
        }
      }
    }
  `;

  const [ title, setTitle ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ estimatedTime, setEstimatedTime ] = useState('');
  const [ date, setDate ] = useState('');
  const [createTask, createdTask] = useMutation(CREATE_TASK);

  useEffect(() => {
    if(createdTask.data) {
      console.log(createdTask.data.createTask);
      window.location.href=`/opdrachten/${createdTask.data.createTask.entity.entityUuid}`
    }
  }, [createdTask]);

  const inputObject = {
    "title": title,
    "field_task_description": description,
    "field_task_estimated_time": parseFloat(estimatedTime),
    "field_task_start_date": date
  }

  if(isOpen) {
    return (
      <div className="add-event-modal">
        <div className="form-container">
          <h2>Opdracht Toevoegen</h2>
          <form
              onSubmit={ async e => {
                e.preventDefault();
                createTask({variables: {"input": inputObject}})
              }}>
            <input onChange={e => setTitle(e.target.value)} type="text" placeholder="Titel..."></input>
            <textarea onChange={e => setDescription(e.target.value)} placeholder="Beschrijving..."></textarea>
            <input onChange={e => setEstimatedTime(e.target.value)} type="text" placeholder="Geschatte Tijd (min)..."></input>
            <input onChange={e => setDate(e.target.value)} type="text" placeholder="Datum (YYYY-MM-DD)"></input>
            <button type="submit" className="submit-button">Voeg Toe</button>
          </form>
        </div>
      </div>
    );

  } else {
    return null
  }
}

export default AddEventModal;