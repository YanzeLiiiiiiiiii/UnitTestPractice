import React, { useState } from 'react'
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('red')
  const nextColor = buttonColor === 'red' ? 'blue' : 'red'
  return (
    <div className="App">
      <button className={buttonColor} onClick={() => { setButtonColor(nextColor) }}>{nextColor}</button>
    </div>
  );
}

export default App;
