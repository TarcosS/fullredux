import React from 'react';
import './App.css';
import List from './Companents/List';
import { Reminder } from './features/reminder/Reminder';

function App() {
  return (
    <div className="App pt-4">
      {/* <div className="container">
        <h5>Reminder Pro</h5>
        <hr></hr>
        <form className="d-flex">
          <div className="col">
            <div className="mb-3">
              <label htmlFor="" className="form-label">Inline Form</label>
              <div className='d-flex flex-row gap-3'>
                <input name="" className="form-control" placeholder="" aria-describedby="helpId" />
                <button type="button" name="" className="btn btn-primary">Ekle!</button>
              </div>
              <small id="helpId" className="text-muted">Help text</small>
            </div>
          </div>
        </form>
      </div> */}

      <div className='container'>
        <div className='row'>
          <Reminder />
          <List />
        </div>
      </div>
    </div>
  );
}

export default App;
