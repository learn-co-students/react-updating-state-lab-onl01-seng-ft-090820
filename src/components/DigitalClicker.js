import React, { Component } from 'react'

export default class DigitalClicker extends Component {
    constructor(props) {
        super()
        this.state = {
            timesClicked: 0
        }
    }
    handleClick = () => {
        this.setState((state) => {
          return {timesClicked: state.timesClicked + 1}
        })
    }
    render() {
        return (
            <div style={{ textAlign: 'center'}}>
                <button style={{ width: 100, height: 100, marginTop: 100 }} onClick={this.handleClick}>{this.state.timesClicked}</button>
            </div>
        )
    }
}
