import React, {Component} from 'react'
import PropTypes from 'prop-types'
require ('../css/style.css')

export default class Counter extends Component {

  static propTypes = {
    count: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired
  }

  increment = () => {
    const number = this.refs.numSelect.value*1
    this.props.increment(number)
  }

  decrement = () => {
    const number = this.refs.numSelect.value*1
    this.props.decrement(number)
  }

  render() {
    const {count} = this.props
    return (
      <div id='wrap'>
        <p>Count</p>

        <div id='select'>
          <select  ref='numSelect'>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div><br/>
        <div id='count'>
          <button onClick={this.increment}>+</button>{' '}
          <div>{count}</div>{' '}
          <button onClick={this.decrement}>-</button>{' '}
        </div>
      </div>
    );
  }
}
