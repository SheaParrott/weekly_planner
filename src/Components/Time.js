import React, { Component } from 'react'

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
    console.log(this.props.i)
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
              <span className="event" value={this.props.date.id}>
                {this.props.date.content.body}
              </span>
              {this.props.showEdit ? (
                <span>
                  <i
                    className="fas fa-ellipsis-v"
                    onClick={this.showEditOrDelete}
                  />
                  {this.state.showEditOrDelete ? (
                    <div className="editOrDelete">
                      <div className="edit">
                        <i className="fas fa-pen" onClick={this.updateEvent} />
                        <span>EDIT</span>
                      </div>
                      <div className="delete">
                        <i
                          className="fas fa-trash-alt"
                          onClick={this.deleteEvent}
                        />
                        <span>DELETE</span>
                      </div>
                    </div>
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

{
  /* <div key={i} className="eventSpace">
<span className="time">
  {time <= 12 ? `${time}am` : `${time - 12}pm`}
</span>
</div> */
}
