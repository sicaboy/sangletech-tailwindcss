/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Link from "next/link";

interface Props {
  titleFirst?: string;
  titleSecond?: string;
  description?: string;
  buttonName?: string;
  imgSrc?: string;
  videoSrc?: string;
  videoCaption?: string;
  alt?: string;
  buttonSrc?: string;
}

export default function BrandPanelWithAppScreenShot(props: Props) {
  const description = props.description
    ? `<div class="note">

${props.description}

</div>`
    : `<div class="note">

"Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure quilorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."

</div>`;

  return (
    <div className="bg-white">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="overflow-hidden bg-indigo-700 rounded-lg shadow-xl lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="px-6 pt-10 pb-12 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="">
              <h2 className="text-2xl font-extrabold text-left text-white sm:text-3xl">
                {props.titleFirst || "Ready to dive in?"}
              </h2>
              <button className="box-border px-3 py-1 mt-3 text-xl font-semibold text-left text-white rounded-lg ring-2 ring-white sm:text-2xl">
                {props.titleSecond || "Start your free trial today."}
              </button>

              <ReactMarkdown
                children={description}
                rehypePlugins={[rehypeRaw]}
                remarkPlugins={[remarkGfm]}
                className="mt-4 text-lg leading-6 text-indigo-200"
              />
              <Link href={props.buttonSrc || "#"}>
                <a className="inline-flex items-center px-5 py-3 mt-8 text-base font-medium text-indigo-600 bg-white border border-transparent rounded-md shadow hover:bg-indigo-50">
                  {props.buttonName || " Sign up for free"}
                </a>
              </Link>
            </div>
          </div>
          <div className="self-center aspect-w-16 aspect-h-3 md:aspect-w-2 md:aspect-h-1 ">
            <div className="relative w-full mx-auto rounded-lg lg:max-w-md ">
              <button
                type="button"
                className="relative block w-full overflow-hidden bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="">
                  {props.videoCaption || "Giúp Bạn Bước Đi Tự Tin"}
                </span>
                <img
                  className="object-fill w-full sm:w-full "
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
            </div>
          </div>

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
          </div>
        </div>
      </div>
    </div>
  );
}
