import React, { Component } from 'react';
import logo from './logo.svg';
import Button from 'antd/lib/button';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import { observer } from 'mobx-react';
import countStore from './store/Count';
import { action } from 'mobx';


@observer
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload. ok
          </p>
          <Button>Hello</Button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </a>
          <Router>
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about/">About</Link>
                  </li>
                  <li>
                    <Link to="/users/">Users</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <Route path="/" exact component={Index} />
            <Route path="/about/" component={About} />
            <Route path="/users/" component={Users} />
          </Router>
        </header>
      </div>
    );
  }

}

@observer
class Index extends Component {
  incre = () => {
    countStore.incre();
  }

  decre = () => {
    countStore.decre();
  }
  render() {
    console.log('Store:',countStore);
    return (
      <div>
        <h2>Home</h2>
        <h2>{countStore.count}</h2>
        <Button onClick={this.incre}>Add</Button>
        <Button onClick={this.decre}>Decre</Button>
      </div>
    );
  }
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}


export default App;
