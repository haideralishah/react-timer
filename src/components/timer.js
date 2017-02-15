import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

class Timer extends Component {
    render() {
        if (this.props.timeLeft === 0) {
            document.getElementById('end-of-time').play()
        }
        if (this.props.timeLeft === null || this.props.timeLeft === 0)
            return <div />
        return <h1>Time left: {this.props.timeLeft}</h1>
    }
}


export default Timer;