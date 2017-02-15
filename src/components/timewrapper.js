import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import audio from '../flute_c_long_01.wav';

import Timer from './timer.js';
import Button from './button.js';


class TimerWrapper extends Component {
    constructor(props) {
        super(props)
        this.state = { timeLeft: null, timer: null }
        this.startTimer = this.startTimer.bind(this)
    }


    startTimer(timeLeft) {
        clearInterval(this.state.timer)
        let timer = setInterval(() => {
            console.log('2: Inside of setInterval')
            let timeLeft = this.state.timeLeft - 1
            if (timeLeft === 0) clearInterval(timer)
            this.setState({ timeLeft: timeLeft })
        }, 1000)
        console.log('1: After setInterval')
        return this.setState({ timeLeft: timeLeft, timer: timer })
    }


    render() {
        return (
            <div className="row-fluid">
                <h2>Timer</h2>
                <div className="btn-group" role="group" >
                    <Button time="5" st={this.startTimer} />
                    <Button time="10" st={this.startTimer} />
                    <Button time="15" st={this.startTimer} />
                </div>
                <Timer timeLeft={this.state.timeLeft} />
                <audio id="end-of-time" src={audio} preload="auto"></audio>
            </div>
        )
    }
}


export default TimerWrapper;
