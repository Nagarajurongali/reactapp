import React from 'react'
import CompB from './CompB'

export const userContaxt = React.createContext();

function CompA() {

  return (
    <div className='box'>
        newComp

        <userContaxt.Provider value={"data Passing to A to D"}>
            <CompB  />
        </userContaxt.Provider>
        
    </div>
  )
}

export default CompA