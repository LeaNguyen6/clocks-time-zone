import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './components/MainPage';
function App() {
  let listTimezone = [
    {
      "value": -12,
      "text": "(UTC-10:00) Hawaii"
    },
    {
      "value": -12,
      "text": "(UTC -12:00) Eniwetok, Kwajalein"
    },
  ]
  return (
    <div className="App">

<MainPage/>

    </div>
  );
}

export default App;
