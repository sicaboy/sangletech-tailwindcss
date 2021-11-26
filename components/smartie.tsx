import React from "react";
import Lottie from "react-lottie";
import * as animationData from "../public/assets/animation/robot.json";
import Layout from "./layout";

interface Props {
  title?: string;
  height?: number;
  width?: number;
}

export default class UnderConstruction extends React.Component<Props> {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return (
      <div className="py-6 bg-white sm:py-8 lg:py-12">
        <div className="px-4 mx-auto max-w-screen-2xl md:px-8">
          <div className="flex flex-col items-center max-w-xl mx-auto text-center">
            <Lottie
              options={defaultOptions}
              height={this.props.height || 200}
              width={this.props.width || 200}
            />
          </div>
        </div>
      </div>
    );
  }
}
