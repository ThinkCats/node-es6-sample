import React, { Component } from 'react';
import { observer } from 'mobx-react';
import countStore from '../../store/Count';
import { Button } from 'antd';

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
        <Button type="primary" onClick={this.decre}>Decre</Button>
      </div>
    );
  }
}

export default Index;