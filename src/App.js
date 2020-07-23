import React from 'react';
import './App.css';
import {
  FunctionalComponent,
  CreateElementComponent,
  ClassComponent,
  PureClassComponent,
} from './components';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={process.env.PUBLIC_URL + '/logo_white-blue.svg'} className="App-logo" alt="logo" />
      </header>
      <div className="components">
        <FunctionalComponent />
        <CreateElementComponent />
        <ClassComponent />
        <PureClassComponent />
      </div>
    </div>
  );
}

export default App;
