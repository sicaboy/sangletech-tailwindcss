import React from "react";
import ReactPlayer from "react-player";

interface Props {
  url?: string;
}

export default class VideoPlayer extends React.Component<Props> {
  render() {
    return (
      <div className="relative pt-56.25%">
        <ReactPlayer
          className="absolute mt-0 ml-0"
          url={this.props.url || "https://www.youtube.com/watch?v=ysz5S6PUM-U"}
          width="100%"
          height="100%"
        />
      </div>
    );
  }
}
