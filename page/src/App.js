import React, { Component } from 'react';
import './App.css';
import { observer } from 'mobx-react';
import Route from './route/route';

@observer
class App extends Component {
  render() {
    return (
      <div className="App">
        <Route />
      </div>
    );
  }
}

export default App;
