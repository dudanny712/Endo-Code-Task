import React from 'react'
import Data from './data.json'
const Name = () => {
  return (
    <div>
      {
        Data.map((id, name) => {
          return <h1>Hello {id.name}</h1>
        })
      }
    </div>
  )
}

export default Name
