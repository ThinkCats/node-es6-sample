import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Index from '../component/torrents/Index';
import Login from '../component/login/Login';

const route = () => (
  <BrowserRouter>
    <Route path="/" exact component={Index} />
    <Route path="/login" component={Login}/>
    <Route path="/about/" component={About} />
    <Route path="/users/" component={Users} />
  </BrowserRouter>
);

export default route;

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}