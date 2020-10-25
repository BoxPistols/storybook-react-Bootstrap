import React from 'react'
import { Button } from 'reactstrap'
import CardStyle from './components/Card'

function App() {
  function handleClick() {
    alert('The link was clicked.')
  }
  return (
    <div className="App">
      <Button color="danger" onClick={handleClick}>
        Danger!
      </Button>
      <CardStyle/>
    </div>
  )
}

export default App
