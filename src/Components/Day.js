import React, { Component } from 'react'
import { connect } from 'react-redux'

class Day extends Component {
  render() {
    return (
      <div className={`${this.props.NumberOfDays === 7 ? 'week' : 'day'}`}>
        <p>{this.props.currentDay}</p>
      </div>
    )
  }
}
export default Day
