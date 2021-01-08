// Code YouTubeDebugger Component Here
// import { render } from 'enzyme'
import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {
    constructor() {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }

    }

    handleBitRate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    handleResolution = () => {
        console.log('clicked resolution')
        this.setState(previousState => ({
            ...previousState,
            settings: {
                ...previousState.settings,
                video: {
                    ...previousState.settings.video,
                    resolution: '720p'
                }
            }
        }))
  
    }



    render() {
        return (
            <div>
                <button onClick={this.handleBitRate} className="bitrate">{this.state.settings.bitrate}</button>
                <button onClick={this.handleResolution} className="resolution">{this.state.settings.video.resolution}</button>
            </div>
        )
    }
}