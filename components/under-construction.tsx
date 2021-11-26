import React from "react";
import Lottie from "react-lottie";
import * as animationData from "../public/assets/animation/robot.json";
import Layout from "./layout";

interface Props {
  title?: string;
  description?: string;
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
      <Layout>
        <div className="py-6 bg-white sm:py-8 lg:py-12">
          <div className="px-4 mx-auto max-w-screen-2xl md:px-8">
            <div className="flex flex-col items-center max-w-xl mx-auto text-center">
              <h1 className="mb-8 text-3xl font-bold text-black-800 sm:text-4xl md:text-5xl md:mb-12">
                {this.props.title || "Revolutionary way to build the web"}
              </h1>
              {/* TODO: Replace Smartie component */}
              <Lottie options={defaultOptions} height={200} width={200} />
              <p className="mb-4 font-semibold text-indigo-500 md:text-lg xl:text-xl md:mb-6">
                {this.props.description ||
                  "Chào Bạn. Anh Sang và đội ngũ đang xây dựng trang này. Trong lúc chờ đợi. Bạn xem các thông tin khác nhé. Tks!"}
              </p>

              <div className="h-16" />

              <div className="w-full flex flex-col sm:flex-row sm:justify-center gap-2.5">
                <a
                  href="/blog"
                  className="inline-block px-8 py-3 text-sm font-semibold text-center text-white transition duration-100 bg-indigo-500 rounded-lg outline-none hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 md:text-base"
                >
                  Xem Blog
                </a>
                <a
                  href="/"
                  className="inline-block px-8 py-3 text-sm font-semibold text-center text-gray-500 transition duration-100 bg-gray-200 rounded-lg outline-none hover:bg-gray-300 focus-visible:ring ring-indigo-300 active:text-gray-700 md:text-base"
                >
                  Trang Chủ
                </a>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
