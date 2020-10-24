import React from 'react';
import {Button} from "reactstrap";

function App() {
  function handleClick() {
    alert('The link was clicked.')
  }
  return (
    <div className="App">
      <Button color="danger" onClick={handleClick}>Danger!</Button>
    </div>
  );
}

export default App;
