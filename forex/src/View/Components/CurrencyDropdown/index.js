import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getRates } from '../../../Controller';

class CurrencyDropdown extends Component {

  componentWillMount() {
    this.props.getRates('USD');
  }

  render() {
    return (
      <div>
        <select className="select-currency" onChange={(e) => this.props.getRates(e.target.value)}>
          <option className="usd">USD</option>
          <option className="sgd">SGD</option>
          <option className="eur">EUR</option>
        </select>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getRates: (currency) => dispatch(getRates(currency)),
  }
}

export default connect (null, mapDispatchToProps)(CurrencyDropdown);
