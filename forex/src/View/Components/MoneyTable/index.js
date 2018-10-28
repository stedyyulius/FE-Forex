import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changeCurrencyAmount } from '../../../Controller';

import { addDecimal } from '../../../helpers/addDecimal';

class MoneyTable extends Component {
  constructor(props) {
    super(props)
    this.state = {
      onInput: false,
    }
  }

  setOnInput() {
    this.setState({ onInput: true});
  }

  setCurrencyAMount(amount) {
    this.setState({ onInput: false })
    this.props.changeCurrencyAmount(amount);
  }

  moneyBody() {
    if (!this.state.onInput) {
      return (
        <tr>
          <td className="currency">{this.props.currency}</td>
          <td onClick={() => this.setOnInput()}>{addDecimal(this.props.currencyAmount)}</td>
        </tr>
      )
    } else {
      return (
        <tr>
          <td>{this.props.currency}</td>
          <td>
            <input
              type="text"
              defaultValue={addDecimal(this.props.currencyAmount)}
              onBlur={(e) => this.setCurrencyAMount(e.target.value)}
            />
          </td>
        </tr>
      )
    }
  }

  render() {
    return (
      <div>
        <table className="table-bordered">
          <thead>
            <tr>
              <th className="base">Base</th>
              <th className="jumlah">Jumlah</th>
            </tr>
          </thead>
          <tbody>
            {this.moneyBody()}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currency: state.currency,
    currencyAmount: state.currencyAmount,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeCurrencyAmount: (amount) => dispatch(changeCurrencyAmount(amount)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoneyTable);
