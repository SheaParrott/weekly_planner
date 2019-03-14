import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateCurrentDay } from '../Actions/updateStateCurrentDay'
import {
  updateSelectedDay,
  updateSelectedMonth,
  updateSelectedYear
} from '../Actions/updateSelectedDay'

class DaySelectorBar extends Component {
  constructor(props) {
    super(props)
    this.onUpdateStateCurrentDay = this.onUpdateStateCurrentDay.bind(this)
    this.updateDayChosen = this.updateDayChosen.bind(this)
    this.updateYearChosen = this.updateYearChosen.bind(this)
    this.updateMonthChosen = this.updateMonthChosen.bind(this)
  }
  onUpdateStateCurrentDay() {
    this.props.onUpdateStateCurrentDay(this.setDateChosen())
  }
  setDateChosen = () => {
    return new Date(
      this.props.yearChosen,
      this.props.monthChosen,
      this.props.dayChosen
    )
  }
  updateMonthChosen = event => {
    this.props.updateMonthChosen(parseInt(event.target.value))
  }
  updateDayChosen = event => {
    this.props.updateDayChosen(event.target.value)
  }
  updateYearChosen = event => {
    this.props.updateYearChosen(event.target.value)
  }

  render() {
    let chosenMonth = this.props.months.filter(
      month => month.number === this.props.monthChosen
    )

    return (
      <div className="daySelectorBar">
        <div className="inputContainer">
          <select onChange={this.updateMonthChosen} name="months">
            <option value={this.props.monthChosen}>--Month--</option>
            {this.props.months.map((month, index) => {
              return (
                <option key={index} value={month.number}>
                  {month.name}
                </option>
              )
            })}
          </select>
          <select onChange={this.updateDayChosen} name="days">
            <option value={this.props.dayChosen}>--Day--</option>
            {chosenMonth.map(days => {
              let array = []
              for (let i = 1; i <= days.days; i++) {
                array.push(i)
              }
              return array.map((number, index) => {
                return (
                  <option key={index} value={number}>
                    {number}
                  </option>
                )
              })
            })}
          </select>
          <select onChange={this.updateYearChosen} name="year">
            <option value={this.props.yearChosen}>--Year--</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
          </select>
          <button onClick={this.onUpdateStateCurrentDay}>Search</button>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  months: state.months,
  monthChosen: state.monthChosen,
  dayChosen: state.dayChosen,
  yearChosen: state.yearChosen
})

const mapActionsToProps = {
  onUpdateStateCurrentDay: updateCurrentDay,
  updateDayChosen: updateSelectedDay,
  updateYearChosen: updateSelectedYear,
  updateMonthChosen: updateSelectedMonth
}
export default connect(
  mapStateToProps,
  mapActionsToProps
)(DaySelectorBar)
