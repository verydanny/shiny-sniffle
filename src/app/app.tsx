import React from 'react'

const sayHello = () => console.log('Hello!')

export const App = () => {
  return (
    <button type="button" onClick={sayHello} onKeyDown={sayHello}>
      React is live!
    </button>
  )
}
