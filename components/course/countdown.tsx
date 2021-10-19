import React from "react";
import Timer, { zeroPad } from "react-countdown";

// 10 minutes timer

export default function Countdown({ expiryTimestamp }) {
  const convertMinsToMiliSeconds = expiryTimestamp * 60 * 1000;

  // Random component
  const Completionist = () => <span>You are good to go!</span>;

  // Renderer callback with condition
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
          {/* <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="font-mono text-5xl countdown">
                  <span></span>
                </span>
                days
              </div> */}
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="font-mono text-5xl countdown">
              {zeroPad(hours)}
            </span>
            hours
          </div>
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="font-mono text-5xl countdown">
              {zeroPad(minutes)}
            </span>
            min
          </div>
          <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="font-mono text-5xl countdown">
              {zeroPad(seconds)}
            </span>
            sec
          </div>
        </div>
      );
    }
  };

  return (
    <div className="mx-auto">
      <Timer
        autoStart={true}
        date={Date.now() + convertMinsToMiliSeconds}
        renderer={renderer}
      />
    </div>
  );
}
