import React from 'react'
import Data from './data.json'
const Version = () => {
  return (
    <div>
      {
          Data.map(post => {
              return (
                  <>
                    <h1>{post.name}</h1>
                    <h1>{post.version}</h1>
                  </>
                  
              )
          })
      }
    </div>
  )
}

export default Version
