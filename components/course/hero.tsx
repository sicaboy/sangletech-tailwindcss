/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Link from "next/link";

// interface Props {
//   caption?: string;
//   titleNormal?: string;
//   titleHighlight?: string;
//   description?: string;
//   buttonNormal?: string;
//   buttonHighlight?: string;
//   imgSrc?: string;
//   videoSrc?: string;
//   videoCaption?: string;
//   alt?: string;
// }

export default function Hero(props) {
  const shockingStatement = props.description
    ? `<div class="note">

${props.description}

</div>`
    : `<div class="note">

"Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure quilorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."

</div>`;

  return (
    <div className="relative overflow-hidden bg-white">
      <div
        className="hidden lg:block lg:absolute lg:inset-0"
        aria-hidden="true"
      >
        <svg
          className="absolute top-0 transform translate-x-64 -translate-y-8 left-1/2"
          width={640}
          height={784}
          fill="none"
          viewBox="0 0 640 784"
        >
          <defs>
            <pattern
              id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047"
              x={118}
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
            y={72}
            width={640}
            height={640}
            className="text-gray-50"
            fill="currentColor"
          />
          <rect
            x={118}
            width={404}
            height={784}
            fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)"
          />
        </svg>
      </div>

      <div className="relative pt-6 pb-16 sm:pb-24 lg:pb-32">
        <main className="px-4 mx-auto mt-16 max-w-7xl sm:mt-24 sm:px-6 lg:mt-32">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1>
                <button className="block px-3 py-1 mb-3 text-sm font-semibold tracking-wide text-white uppercase bg-indigo-600 rounded-full cursor-text sm:text-base lg:text-sm xl:text-base">
                  {props.caption || "Coming soon"}
                </button>

                <span className="mt-1 text-4xl font-extrabold tracking-tight sm:text-5xl xl:text-6xl">
                  <span className="text-indigo-600">
                    {props.headline || "online business"}
                  </span>
                </span>
              </h1>

              <ReactMarkdown
                children={shockingStatement}
                rehypePlugins={[rehypeRaw]}
                remarkPlugins={[remarkGfm]}
                className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
              />
            </div>
            <div className="relative mt-12 sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <svg
                className="absolute top-0 origin-top transform scale-75 -translate-x-1/2 -translate-y-8 left-1/2 sm:scale-100 lg:hidden"
                width={640}
                height={784}
                fill="none"
                viewBox="0 0 640 784"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
                    x={118}
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
                  y={72}
                  width={640}
                  height={640}
                  className="text-gray-50"
                  fill="currentColor"
                />
                <rect
                  x={118}
                  width={404}
                  height={784}
                  fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)"
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
                      alt={props.alt || "sangletech"}
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
        </main>
      </div>
    </div>
  );
}
