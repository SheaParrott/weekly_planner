import React, { Component } from 'react'

class CreateEvent extends Component {
  render() {
    return (
      <form className="CreateEvent">
        <h3>{this.props.currentDay}</h3>
        <input type="hidden" value="5/5/3" />
        <select>
          <option />
        </select>
        <textarea required rows="3" />
        <button type="submit">SUBMIT</button>
      </form>
    )
  }
}

export default CreateEvent
