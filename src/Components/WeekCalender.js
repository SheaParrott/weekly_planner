import React, { Component } from 'react'
import { connect } from 'react-redux'
import Day from './Day'
import DateNavBar from './DateNavBar'

class Week extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hiddenDays: 0
    }
  }
  addToNumberOfHiddenDays = () => {
    this.setState(
      {
        hiddenDays: this.state.hiddenDays + 1
      },
      () => {
        console.log(this.state.hiddenDays)
      }
    )
  }
  subtractFromNumberOfHiddenDays = () => {
    if (!this.state.hiddenDays) {
      return
    }
    this.setState(
      {
        hiddenDays: this.state.hiddenDays - 1
      },
      () => {
        console.log(this.state.hiddenDays)
      }
    )
  }
  render() {
    return (
      <div className="Calender">
        <DateNavBar />
        <div
          className={` eventsContainer ${
            this.state.hiddenDays === 7 ? 'slide-left' : 'eventsContainer-flex'
          }`}
        >
          {this.props.daysShown.map((day, index) => {
            return (
              <div key={index} className="displayedDays">
                <Day
                  day={day}
                  addToNumberOfHiddenDays={this.addToNumberOfHiddenDays}
                  subtractFromNumberOfHiddenDays={
                    this.subtractFromNumberOfHiddenDays
                  }
                  hiddenDays={this.state.hiddenDays}
                />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  daysShown: state.daysShown,
  hours: state.hours
})

export default connect(mapStateToProps)(Week)
