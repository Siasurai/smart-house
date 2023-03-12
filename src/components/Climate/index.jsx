import React, { useState } from 'react';
import Temp from './img/temp.svg'
import './style.css';

export const Climate = ({temperature, humidity}) => {
  const [roomTemperature, setRoomTemperature] = useState(temperature)
  const addDegreeOnClick = () => {
    setRoomTemperature(roomTemperature + 1)
  }
  const removeDegreeOnClick = () => {
    setRoomTemperature(roomTemperature - 1)
  }
  return (
    <div className="climate">
    <div className="climate__icon">
      <img src={Temp}/>
    </div>
    <div className="climate__content">
      <div className="climate__temperature">{roomTemperature}&deg;C</div>
      <div className="climate__humidity">Vlhost vzduchu {humidity}&nbsp;%</div>
    </div>
    <div className="climate__controls">
      <button className="button" onClick={addDegreeOnClick}>+</button>
      <button className="button" onClick={removeDegreeOnClick}>-</button>
    </div>
  </div>
  )
}