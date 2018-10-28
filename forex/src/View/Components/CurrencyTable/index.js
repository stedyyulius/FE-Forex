import React, { Component } from 'react';
import { connect } from 'react-redux';

class CurrencyTable extends Component {

  currencyAmount(currency) {
    return this.props.rates[currency] * this.props.currencyAmount;
  }

  render() {
    return (
      <div>
        <table className="table-bordered">
          <thead>
            <tr>
              <th className="mata-uang">Mata Uang</th>
              <th className="kurs">Kurs</th>
              <th className="calculated">Calculated</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(this.props.rates).map((currency, i) =>
              <tr key={i}>
                <td>{currency}</td>
                <td>{this.currencyAmount(currency)}</td>
                <td>{Math.round(this.currencyAmount(currency) * 100) / 100}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currencyAmount: state.currencyAmount,
    rates: state.rates,
  }
}

export default connect(mapStateToProps)(CurrencyTable);
