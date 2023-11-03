import React, { Component } from "react";
import "./assets/scss/App.scss";
import Clock from "./Clock";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: this._getCurrentTime(),
    };
  }

  _getCurrentTime() {
    const d = new Date();
    const hours = d.getHours();
    const minutes = d.getMinutes();
    const seconds = d.getSeconds();
    const session = hours >= 12 ? "pm" : "am";

    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = seconds.toString().padStart(2, "0");

    return {
      hours: formattedHours.toString(),
      minutes: formattedMinutes,
      seconds: formattedSeconds,
      session: session,
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        currentTime: this._getCurrentTime(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { hours, minutes, seconds, session } = this.state.currentTime;
    return (
      <div className="clock-display">
        <h2>ex05 - Component LifeCycle Practice</h2>
        <Clock
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          session={session}
        />
      </div>
    );
  }
}
