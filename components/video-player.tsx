import React from "react";
import ReactPlayer from 'react-player/lazy'


interface Props {
  videoId: string;
}

export default function VideoPlayer({ videoId }: Props) {
  return (
    <div className="player-wrapper">
      <ReactPlayer className="react-player" url={`https://www.youtube.com/watch?v=${videoId}`} width='100%' height='100%' />
    </div>
  )
}
