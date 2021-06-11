import React, { useState, useEffect } from 'react'

const Stopwatch = () => {

  const [ time, setTime ] = useState(0);
  const [ isTimerOn, setIsTimerOn ] = useState(false);

  useEffect(() => {
    let interval = null;
    
    if(isTimerOn) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime + 100 )
      }, 100)

    } else {
      clearInterval(interval)
    }

    return () => clearInterval(interval)

  }, [isTimerOn])

  return (

    <div className="stopwatch">
      <div className="timer">
        <span>{("0" + Math.floor((time / 600000) % 60)).slice(-2) + ":"}</span>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2) + ":"}</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
      </div>
      <div className="buttons">
        {!isTimerOn ? 
          <button onClick={() => setIsTimerOn(true)} title={"start"} ><i className="fas fa-play"></i></button>
        :
          <button onClick={() => setIsTimerOn(false)} title={"pause"} ><i className="fas fa-pause"></i></button>
        }
        <button onClick={() => setTime(0)} title={"reset time"}><i className="fas fa-history"></i></button>
      </div>
    </div>

  )
}

export default Stopwatch;
