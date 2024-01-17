import React from 'react'
import {Function} from './components/Function'


export const App: React.FC = () => {
  return (
    <div>
      <h1>My App</h1>
      <Function name='John' age={22} />
    </div>
  )
}