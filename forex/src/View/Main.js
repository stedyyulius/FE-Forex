import React, { Component } from 'react';

import './index.css';

import CurrencyDropdown from './Components/CurrencyDropdown';
import CurrencyTable from './Components/CurrencyTable';
import MoneyTable from './Components/MoneyTable';

class Main extends Component {
  render() {
    return (
      <div>
        <h1 className="title">FE - Forex</h1>
        <CurrencyDropdown />
        <MoneyTable />
        <CurrencyTable />
      </div>
    )
  }
}

export default Main;
