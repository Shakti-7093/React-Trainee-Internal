import React from "react";
var week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

export default class DigitalClock extends React.Component {
  currentTime() {
    return new Date().toLocaleTimeString();
  }
  currentDate() {
    return new Date().getDate();
  }
  currentMonth() {
    return new Date().getMonth() + 1;
  }
  currentYear() {
    return new Date().getFullYear();
  }
  currentDay() {
    return new Date().getDay();
  }

  constructor(props) {
    super(props);
    this.state = {
      time: this.currentTime(),
      date: this.currentDate(),
      month: this.currentMonth(),
      year: this.currentYear(),
      day: week[this.currentDay()],
    };
  }

  render() {
    return (
      <>
        <div>
          <h4>
            {this.state.date}-{this.state.month}-{this.state.year}{" "}
            {this.state.day}
          </h4>
          <h1>{this.state.time}</h1>
        </div>
      </>
    );
  }

  componentDidMount() {
    this.interval = setInterval(
      () => this.setState({ time: this.currentTime() }),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
}
