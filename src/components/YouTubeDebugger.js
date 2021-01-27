// Code YouTubeDebugger Component Here
import React, { Component } from "react";

export default class YouTubeDebugger extends Component {
  constructor(props) {
    super();
    this.state = {
      user: null,
      errors: [],
      settings: {
        bitrate: 8,
        video: {
          resolution: "1080p",
        },
      },
    };
  }
  handleClick = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12,
      },
    });
    console.log(this.state.settings.bitrate);
  };
    
    handleChangeResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    ...this.state.settings.video,
                    resolution: '720p'
                }
            }
        });
    }

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleClick}>
          {this.state.settings.bitrate}
        </button>
        <button className="resolution" onClick={this.handleChangeResolution}>
          {this.state.settings.video.resolution}
        </button>
      </div>
    );
  }
}
