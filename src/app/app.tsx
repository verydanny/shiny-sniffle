import React from 'react'

const sayHello = () => console.log('Hello!')

export const App = () => {
  return <h1 onClick={sayHello}>React is live!</h1>
}
