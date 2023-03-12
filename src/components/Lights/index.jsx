import React from 'react';
import { Light } from './../Light';
import './style.css'

export const Lights = ({lights}) => {
  return (
    <div className="lights">
      {lights.map((light) => (
          <Light 
            name={light.name}
            state={light.state}
            key={light.name}
          />
      ))}
    </div>
  )
}