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
import { Fragment } from "react";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Link from "next/link";

interface Props {
  title?: string;
  description?: string;
  buttonName?: string;
  buttonLink?: string;
  buttonSrc?: string;

  videoOneThumbnail?: string;
  videoOneLink?: string;
  videoOneAlt?: string;

  videoTwoThumbnail?: string;
  videoTwoLink?: string;
  videoTwoAlt?: string;

  videoThreeThumbnail?: string;
  videoThreeLink?: string;
  videoThreeAlt?: string;
}

export default function Example(props: Props) {
  const data = [
    {
      id: 1,
      thumbnail:
        props.videoOneThumbnail ||
        "https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: props.videoOneLink,
      alt: props.videoOneAlt,
    },
    {
      id: 2,
      thumbnail:
        props.videoTwoThumbnail ||
        "https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: props.videoTwoLink,
      alt: props.videoTwoAlt,
    },
    {
      id: 3,
      thumbnail:
        props.videoThreeThumbnail ||
        "https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      link: props.videoThreeLink,
      alt: props.videoThreeAlt,
    },
  ];

  const description = props.description
    ? `<div class="note">
${props.description}
</div>`
    : `<div class="note">
"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
libero labore natus atque, ducimus sed.."
</div>`;

  return (
    <div className="relative mt-16 overflow-hidden bg-white">
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {props.title || "From the blog"}
          </h2>

          <ReactMarkdown
            children={description}
            rehypePlugins={[rehypeRaw]}
            remarkPlugins={[remarkGfm]}
            className="max-w-2xl mx-auto mt-3 text-xl text-gray-500 sm:mt-4"
          />
        </div>
      </div>
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

            <div className="grid max-w-lg gap-5 mx-auto mt-3 lg:grid-cols-3 lg:max-w-none">
              {data.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col overflow-hidden rounded-lg shadow-lg"
                >
                  <Link href={item.link}>
                    <div className="relative w-full mx-auto rounded-lg shadow-lg lg:max-w-md">
                      <button
                        type="button"
                        className="relative block w-full overflow-hidden bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        <span className="sr-only">Watch our video to</span>
                        <img
                          className="w-full"
                          src={item.thumbnail}
                          alt={item.alt}
                        />
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
                      </button>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="pt-32 text-center">
            <Link href={props.buttonSrc || "#"}>
              <a className="inline-flex px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700">
                {props.buttonName || "Get started"}
              </a>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
