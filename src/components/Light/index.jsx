import React, { useState } from 'react';
import './style.css';
import Off from './img/light-off.svg';
import On from './img/light-on.svg';


export const Light = ({name, state}) => {
  const [lightState, setLightState] = useState(state)

  const handleClick = () => {
    setLightState(lightState ==='on' ? 'off' : 'on')
  }

  return(
    <div className="light" onClick={handleClick}>
    <div className="light__icon">
        <img src={lightState ==='on' ? On : Off }/>
    </div>
    <div className="light__name">
        {name}
    </div>
  </div>
  )
}