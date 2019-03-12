import React, { Component } from 'react'
import CreateEvent from './CreateEvent'

class Time extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showEditOrDelete: false
    }
  }
  showEditOrDelete = () => {
    this.setState({
      showEditOrDelete: !this.state.showEditOrDelete
    })
  }
  render() {
    return (
      <div
        key={this.props.i}
        className={`timeCell ${this.props.i % 2 ? 'shading' : ''}`}
      >
        {this.props.isTrue ? (
          <div key={this.props.i}>
            <div className="content">
              <span className="time">
                {this.props.time <= 12
                  ? `${this.props.time}am`
                  : `${this.props.time - 12}pm`}
              </span>
              <span className="event">{this.props.date.content.body}</span>
              {this.props.showEdit ? (
                <span>
                  <i
                    className="fas fa-ellipsis-v"
                    onClick={this.showEditOrDelete}
                  />
                  {this.state.showEditOrDelete ? (
                    <CreateEvent
                      date_id={this.props.date_id}
                      content={this.props.date.content}
                      day={this.props.date.content.date}
                      showEditOrDelete={this.showEditOrDelete}
                      optionsMenu={true}
                    />
                  ) : null}
                </span>
              ) : null}
            </div>
          </div>
        ) : (
          <div
            key={this.props.i}
            className={`timeCell ${this.props.i % 0 ? 'shading' : ''}`}
          >
            <span className="time">
              {this.props.time <= 12
                ? `${this.props.time}am`
                : `${this.props.time - 12}pm`}
            </span>
          </div>
        )}
      </div>
    )
  }
}

export default Time
