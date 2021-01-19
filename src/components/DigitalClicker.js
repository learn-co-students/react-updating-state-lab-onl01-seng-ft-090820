import React, {Component} from 'react'

export default class DigitalClicker extends Component {
    constructor() {
        super();

        this.state = {
            timesClicked: 0
        }
    }

    handleClick = () => {

        this.setState(previousState => {
            return {
                timesClicked: previousState.timesClicked + 1
            }
        })
        
        //let newCount = this.state.timesClicked + 1
        //this.setState ({
        //    timesClicked: newCount
        //})
    }

    render() {
        return (
            <div>
              <button onClick={this.handleClick}>{this.state.timesClicked}</button>
            </div>
        )
    }
}