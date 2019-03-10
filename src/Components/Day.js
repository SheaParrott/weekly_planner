import React, { Component } from 'react'
import { connect } from 'react-redux'

class Day extends Component {
  render() {
    let array = []
    for (let i = 0; i <= 23; i++) {
      if (i == 0) {
        array.push('M.N')
      } else if (i > 12 && i !== 0) {
        array.push(i - 12)
      } else {
        array.push(i)
      }
    }
    return (
      <div className={`${this.props.onWeekPage ? 'week' : 'day'}`}>
        <p>{this.props.currentDay}</p>
        {this.props.onWeekPage
          ? array.map((space, index) => {
              return (
                <div key={index} className="eventSpace">
                  {typeof space === 'string' ? (
                    <span className="time">{space}</span>
                  ) : space <= 11 ? (
                    <span className="time">{space} am</span>
                  ) : (
                    <span className="time">{space} pm</span>
                  )}
                </div>
              )
            })
          : null}
      </div>
    )
  }
}
export default Day
