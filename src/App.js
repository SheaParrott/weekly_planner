import React, { Component } from 'react'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import WeekCalender from './Components/WeekCalender'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <WeekCalender />
        <Footer />
      </div>
    )
  }
}

export default App
