import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MoneyTransferContainer from './features/money-transfer/money-transer-container';

class App extends Component {
  selectBank(value) {
    console.log("bank value:", value);
  }
  render() {
    return (
      <div className="App">
        <MoneyTransferContainer></MoneyTransferContainer>
      </div>
    );
  }
}

export default App;
