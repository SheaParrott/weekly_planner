import React, { Component } from 'react'
import { connect } from 'react-redux'

class Day extends Component {
  render() {
    let array = []
    for (let i = 0; i <= 24; i++) {
      array.push(i)
    }
    return (
      <div className={`${this.props.onWeekPage ? 'week' : 'day'}`}>
        <p>{this.props.currentDay}</p>
        {this.props.onWeekPage
          ? array.map((space, index) => {
              if (space % 2 === 0) {
                return <div key={index} className="shaded eventSpace" />
              } else {
                return <div key={index} className="eventSpace" />
              }
            })
          : null}
      </div>
    )
  }
}
export default Day
