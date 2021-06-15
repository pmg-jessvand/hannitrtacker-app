import React, { useEffect, useState, useRef } from 'react'
import { gql, useMutation } from '@apollo/client';

import { Popup } from '../components';

/*
* Timer component made with help of article written by Abdul Basit on dev.to
* article link: https://dev.to/abdulbasit313/how-to-develop-a-stopwatch-in-react-js-with-custom-hook-561b 
*/

const Stopwatch = ({ taskId, startValue }) => {

  const UPDATE_TASK = gql`
    mutation($id: String!, $input: TaskInput) {
      updateTask(id: $id, input: $input) {
        entity {
          ... on NodeOpdracht {
            title
            entityId
            fieldTaskTotalTime
          }
        }
        violations {
          message
        }
        errors
      }
    }
  `;

  const [ time, setTime ] = useState(0);
  const [ isTimerOn, setIsTimerOn ] = useState(false);
  const [ isOpen, setIsOpen ] = useState(false);
  const countRef = useRef(null);
  const [updateTask, updatedTask] = useMutation(UPDATE_TASK);

  useEffect(() => {
    if(updatedTask.data) {
      console.log(updatedTask.data.updateTask);
    }
  }, [updatedTask]);

  // Begin startValue logic
  useEffect(() => {
    setStartValue(startValue)
  }, [startValue])
  // If there is time present use that value as start time for the timer
  const setStartValue = (startValue) => {
    if(startValue != null) {
      return setTime(startValue)
    } else {
      return setTime(0)
    }
  }
  // End startValue logic
  // Begin Button logic
  const handleStart = () => {
    setIsTimerOn(!isTimerOn);
    countRef.current = setInterval(() => {
      setTime((timer) => timer + 1)
    }, 1000);
  }

  const handlePause = () => {
    clearInterval(countRef.current);
    setIsTimerOn(!isTimerOn);
  }

  const handleReset = () => {
    clearInterval(countRef.current);
    setTime(0);
    setIsTimerOn(false);
  }
  // End Button Logic

  // Format timer to look like HH:MM:SS
  const formatTime = () => {
    const getSeconds = `0${(time % 60)}`.slice(-2);
    const minutes = `${Math.floor(time / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600)}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds}`
  }

  // set time from seconds to minutes for mutation
  const timeInMinutes = Math.floor(time / 60);

  const handleSubmit = (taskId, inputObject) => {
    updateTask({variables: {
      "id": taskId,
      "input": inputObject
    }});
    
    setIsOpen(true);
  }

  return (
    <div className="stopwatch">
      <div className="timer-wrapper">
        <div className="timer">
          <span>{ formatTime() }</span>
        </div>
        <div className="buttons">
          { !isTimerOn ? 
            <button onClick={() => handleStart()} title={"start"}><i className="fas fa-play"></i></button>
            :
            <button onClick={() => handlePause()} title={"pauze"}><i className="fas fa-pause"></i></button>
          }
          <button onClick={() => handleReset()} title={"reset"}><i className="fas fa-history"></i></button>
        </div>
      </div>
      <div className="registration-wrapper">
        <button
          className="button-registrate"
          onClick={() => handleSubmit(taskId, {"field_task_total_time": timeInMinutes})}>
            Registreer tijd
        </button>
      </div>
      <Popup isOpen={isOpen} handleClose={() => setIsOpen(!isOpen)}/>
    </div>

  )
}

export default Stopwatch;
