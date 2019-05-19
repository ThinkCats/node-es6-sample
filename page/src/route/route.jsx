import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { observer } from 'mobx-react';
import countStore from '../store/Count';
import Button from 'antd/lib/button';

const route = () => (
  <Router>
    <Route path="/" exact component={Index} />
    <Route path="/about/" component={About} />
    <Route path="/users/" component={Users} />
  </Router>
);

export default route;

@observer
class Index extends Component {
  incre = () => {
    countStore.incre();
  }

  decre = () => {
    countStore.decre();
  }
  render() {
    console.log('Store:', countStore);
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