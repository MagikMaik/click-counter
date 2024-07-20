import React from 'react';
import './stylesheets/Counter.css'

export default function Counter( { clickCount }) {
  return (
    <div className='counter'>
      {clickCount}
    </div>
  )

}
