import ReactMarkdown from "react-markdown";

import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import Link from "next/link";

function Example(props) {
  const description = props.description
    ? `<div class="note">

${props.description}

</div>`
    : `<div class="note">

"Semper curabitur ullamcorper posuere nunc sed. Ornare iaculisbibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus viverra dui tellus ornare pharetra."

</div>`;

  return (
    <div className="py-6 overflow-hidden">
      <div className="relative max-w-xl px-4 mx-auto sm:px-6 lg:px-8 lg:max-w-7xl">
        {props.direction === "left" && (
          <div>
            <svg
              className="absolute hidden transform -translate-x-1/2 lg:block left-full -translate-y-1/4"
              width={404}
              height={784}
              fill="none"
              viewBox="0 0 404 784"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={784}
                fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
              />
            </svg>
            <div className="relative mt-12 lg:mt-8 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
              <div className="relative">
                <button className="block px-3 py-1 mb-3 text-sm font-semibold tracking-wide text-white uppercase bg-indigo-600 rounded-full cursor-text sm:text-base lg:text-sm xl:text-base">
                  {props.caption || "Coming soon"}
                </button>
                <h2 className="text-3xl font-extrabold tracking-tight text-black sm:text-3xl">
                  {props.title || "Transfer funds world-wide"}
                </h2>
                <ReactMarkdown
                  children={description}
                  rehypePlugins={[rehypeRaw]}
                  remarkPlugins={[remarkGfm]}
                  className="mt-3 text-lg text-gray-500"
                />
              </div>
              <div className="relative mt-10 -mx-4 lg:mt-0" aria-hidden="true">
                <svg
                  className="absolute transform -translate-x-1/2 translate-y-16 left-1/2 lg:hidden"
                  width={784}
                  height={404}
                  fill="none"
                  viewBox="0 0 784 404"
                >
                  <defs>
                    <pattern
                      id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className="text-gray-200"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={784}
                    height={404}
                    fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
                  />
                </svg>
                <div className="relative w-full mx-auto rounded-lg shadow-lg lg:max-w-md ring ring-offset-4 ring-indigo-400">
                  <Link href={props.videoSrc || "#"}>
                    <button
                      type="button"
                      className="relative block w-full overflow-hidden bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <span className="">{props.videoCaption}</span>
                      <img
                        className="w-full"
                        src={
                          props.imgSrc ||
                          "https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                        }
                        alt={props.alt || "sang le tech"}
                      />
                      {props.videoSrc && (
                        <div
                          className="absolute inset-0 flex items-center justify-center w-full h-full"
                          aria-hidden="true"
                        >
                          <svg
                            className="w-20 h-20 text-indigo-500"
                            fill="currentColor"
                            viewBox="0 0 84 84"
                          >
                            <circle
                              opacity="0.9"
                              cx={42}
                              cy={42}
                              r={42}
                              fill="white"
                            />
                            <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
                          </svg>
                        </div>
                      )}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
        {props.direction === "right" && (
          <div>
            {" "}
            <svg
              className="absolute hidden transform translate-x-1/2 translate-y-12 lg:block right-full"
              width={404}
              height={784}
              fill="none"
              viewBox="0 0 404 784"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={784}
                fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
              />
            </svg>
            <div className="relative mt-12 sm:mt-16 lg:mt-24">
              <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                <div className="lg:col-start-2">
                  <button className="block px-3 py-1 mb-3 text-sm font-semibold tracking-wide text-white uppercase bg-indigo-600 rounded-full cursor-text sm:text-base lg:text-sm xl:text-base">
                    {props.caption || "Coming soon"}
                  </button>
                  <h2 className="text-3xl font-extrabold tracking-tight text-black sm:text-3xl">
                    {props.title || "Always in the loop"}
                  </h2>

                  <ReactMarkdown
                    children={description}
                    rehypePlugins={[rehypeRaw]}
                    remarkPlugins={[remarkGfm]}
                    className="mt-3 text-lg text-gray-500"
                  />
                </div>

                <div className="relative mt-10 -mx-4 lg:mt-0 lg:col-start-1">
                  <svg
                    className="absolute transform -translate-x-1/2 translate-y-16 left-1/2 lg:hidden"
                    width={784}
                    height={404}
                    fill="none"
                    viewBox="0 0 784 404"
                    aria-hidden="true"
                  >
                    <defs>
                      <pattern
                        id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                        x={0}
                        y={0}
                        width={20}
                        height={20}
                        patternUnits="userSpaceOnUse"
                      >
                        <rect
                          x={0}
                          y={0}
                          width={4}
                          height={4}
                          className="text-gray-200"
                          fill="currentColor"
                        />
                      </pattern>
                    </defs>
                    <rect
                      width={784}
                      height={404}
                      fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
                    />
                  </svg>
                  <div className="relative w-full mx-auto rounded-lg shadow-lg lg:max-w-md ring ring-offset-4 ring-indigo-400">
                    <Link href={props.videoSrc || "#"}>
                      <button
                        type="button"
                        className="relative block w-full bg-white rounded-lg overflow-hiddn focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        <span className="">{props.videoCaption}</span>
                        <img
                          className="w-full"
                          src={
                            props.imgSrc ||
                            "https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                          }
                          alt={props.alt || "sang le tech"}
                        />
                        {props.videoSrc && (
                          <div
                            className="absolute inset-0 flex items-center justify-center w-full h-full"
                            aria-hidden="true"
                          >
                            <svg
                              className="w-20 h-20 text-indigo-500"
                              fill="currentColor"
                              viewBox="0 0 84 84"
                            >
                              <circle
                                opacity="0.9"
                                cx={42}
                                cy={42}
                                r={42}
                                fill="white"
                              />
                              <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
                            </svg>
                          </div>
                        )}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Example;
