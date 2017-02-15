import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

class Button extends Component {
    startTim(event) {
        return this.props.st(this.props.time)
    }
    render() {
        return (
            <button type="button" className='btndefault btn' onClick={this.startTim.bind(this)}>
                {this.props.time} seconds
            </button >
        )
    }
}

export default Button;