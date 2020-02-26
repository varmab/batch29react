import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome'
import Counter from './Counter'
import Friends from './Friends'
import Todos from './Todos'

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Welcome title="Batch 29" password="123456"/>
          <Welcome title="Varma" year={2019} password="123456"/>
        </header>
        <Todos/>
      </div>
    );
  }
}

export default App;
