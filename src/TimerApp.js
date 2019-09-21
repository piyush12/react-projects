import React from "react";

const INITIAL_TIME = {
  hours: 0,
  minutes: 0,
  seconds: 0
};

export default class TimerApp extends React.Component {
  state = {
    hours: INITIAL_TIME.hours,
    minutes: INITIAL_TIME.minutes,
    seconds: INITIAL_TIME.seconds,
    startTimer: false,
    stopTimer: true,
    captureTimer: []
  };

  componentDidMount() {}

  handleTImerStart = () => {
    if (this.state.stopTimer) {
      this.setState(
        {
          startTimer: true,
          stopTimer: false
        },
        () => {
          this.timerLogic();
        }
      );
    }
  };

  timerLogic = () => {
    this.timer = setInterval(() => {
      if (this.state.seconds < 60) {
        this.setState(prevState => ({
          ...prevState,
          hours: prevState.hours,
          minutes: prevState.minutes,
          seconds: prevState.seconds + 1
        }));
      } else if (this.state.seconds >= 60) {
        this.setState(prevState => ({
          ...prevState,
          hours: prevState.hours,
          minutes: prevState.minutes + 1,
          seconds: 0
        }));
      }
      if (this.state.minutes > 60) {
        this.setState(prevState => ({
          ...prevState,
          hours: prevState.hours + 1,
          minutes: 0,
          seconds: 0
        }));
      }
    }, 1000);
  };

  handleTImerStop = () => {
    if (this.state.startTimer) {
      this.setState(
        {
          startTimer: false,
          stopTimer: true
        },
        () => clearInterval(this.timer)
      );
    }
  };

  handleResetTImer = () => {
    this.setState({
      ...INITIAL_TIME,
      startTimer: false,
      stopTimer: true,
      captureTimer: []
    });
    clearInterval(this.timer);
  };

  handleCaptureTImer = () => {
    this.setState({
      captureTimer: [
        ...this.state.captureTimer,
        {
          hours: this.state.hours,
          minutes: this.state.minutes,
          seconds: this.state.seconds
        }
      ]
    });
  };

  render() {
    const { hours, minutes, seconds } = this.state;
    return (
      <React.Fragment>
        <h5>
          {hours} : {minutes} : {seconds}
        </h5>
        <button onClick={this.handleTImerStart} className="btn btn-primary">
          Start Timer
        </button>{" "}
        <button onClick={this.handleTImerStop} className="btn btn-danger">
          Stop Timer
        </button>{" "}
        <button onClick={this.handleResetTImer} className="btn btn-success">
          Reset
        </button>{" "}
        <button onClick={this.handleCaptureTImer} className="btn btn-info">
          Capture
        </button>{" "}
        <h5>Time Capture</h5>
        {this.state.captureTimer.length > 0 &&
          this.state.captureTimer.map((time, i) => (
            <p key={i}>
              {`timer capture at ${time.hours} hours : ${time.minutes} minutes :
              ${time.seconds} seconds `}
            </p>
          ))}
      </React.Fragment>
    );
  }
}
