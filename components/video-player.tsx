import React from "react";

interface Props {
  url?: string;
}

export default function VideoPlayer(props: Props) {
  return (
    <div>
      <iframe
        className="inset-0 hidden mx-auto my-6 sm:block "
        src={props.url}
        // src={`https://player.vimeo.com/video/${vimeoId}`}
        width="640"
        height="360"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
      ></iframe>
      <iframe
        className="inset-0 block py-1 mx-auto my-6 sm:hidden"
        src={props.url}
        // src={`https://player.vimeo.com/video/${vimeoId}`}
        width="320"
        height="180"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}
