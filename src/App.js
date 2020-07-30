import React from 'react';
import logo from './logo.svg';
import './App.css';
import TimeZoneClock from './components/TimeZoneClock';
import Choose from './components/Choose';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div>
              Main
            <TimeZoneClock />
            </div>

          </div>
          <div className="col-sm-3 col-xs-12">
            Add new time-zone
            <Choose />
          </div>

        </div>
      </div>


    </div>
  );
}

export default App;
