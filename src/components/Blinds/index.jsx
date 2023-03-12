import React, { useState } from 'react';
import Open from './img/blinds-open.svg'
import Closed from './img/blinds-closed.svg'
import './style.css'

export const Blinds = ({state}) => {
  const [blindsState, setBlindsState] = useState(state)
  const closeBlindesOnClick = () => {
    setBlindsState('closed')
  }
  const openBlindesOnClick = () => {
    setBlindsState('open')
  }

  return (
    <div className="blinds">
      <div className="blinds__icon">
        <img src={blindsState==='open' ? Open : Closed}/>
      </div>
      <div className="blinds__name">
        Žaluzie
      </div>
      <div className="blinds__controls">
        <button className={`button ${blindsState==='open' ? 'button--active' : ''}`} onClick={openBlindesOnClick}>Otevřeno</button>
        <button className={`button ${blindsState==='closed' ? 'button--active' : ''}`} onClick={closeBlindesOnClick}>Zavřeno</button>
      </div>
  </div>
  )
}