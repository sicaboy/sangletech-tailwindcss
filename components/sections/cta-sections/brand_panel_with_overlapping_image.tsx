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
  title?: string;
  description?: string;
  buttonName?: string;
  imgSrc?: string;
  alt?: string;
  buttonSrc?: string;
  onClick;
}

export default function BrandPanelWithOverlappingImage(props: Props) {
  const description = props.description
    ? `<div class="note">

${props.description}

</div>`
    : `<div class="note">

"Semper curabitur ullamcorper posuere nunc sed. Ornare iaculisbibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus viverra dui tellus ornare pharetra."

</div>`;

  return (
    <div className="relative py-16 m-3 bg-white ">
      <div
        className="absolute inset-x-0 top-0 hidden h-1/2 bg-gray-50 lg:block"
        aria-hidden="true"
      />
      <div className="mx-auto bg-indigo-600 max-w-7xl lg:bg-transparent lg:px-8">
        <div className="lg:grid lg:grid-cols-12">
          <div className="relative z-10 lg:col-start-1 lg:row-start-1 lg:col-span-4 lg:py-16 lg:bg-transparent">
            <div
              className="absolute inset-x-0 h-1/2 bg-gray-50 lg:hidden"
              aria-hidden="true"
            />
            <div className="max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
              <div className="aspect-w-10 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                <img
                  className="object-cover object-center shadow-2xl rounded-3xl"
                  src={
                    props.imgSrc ||
                    "https://images.unsplash.com/photo-1507207611509-ec012433ff52?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80"
                  }
                  alt={props.alt || "sangletech"}
                />
              </div>
            </div>
          </div>

          <div className="relative bg-indigo-600 lg:col-start-3 lg:row-start-1 lg:col-span-10 lg:rounded-3xl lg:grid lg:grid-cols-10 lg:items-center">
            <div
              className="absolute inset-0 hidden overflow-hidden rounded-3xl lg:block"
              aria-hidden="true"
            >
              <svg
                className="absolute transform bottom-full left-full translate-y-1/3 -translate-x-2/3 xl:bottom-auto xl:top-0 xl:translate-y-0"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
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
                      className="text-indigo-500"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                />
              </svg>
              <svg
                className="absolute transform top-full -translate-y-1/3 -translate-x-1/3 xl:-translate-y-1/2"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
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
                      className="text-indigo-500"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={384}
                  fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                />
              </svg>
            </div>
            <div className="relative max-w-md px-4 py-12 mx-auto space-y-6 sm:max-w-3xl sm:py-16 sm:px-6 lg:max-w-none lg:p-0 lg:col-start-4 lg:col-span-6">
              <h2
                className="text-3xl font-extrabold text-white"
                id="join-heading"
              >
                {props.title || "Title"}
              </h2>

              <ReactMarkdown
                children={description}
                rehypePlugins={[rehypeRaw]}
                remarkPlugins={[remarkGfm]}
                className="text-white ext-lg"
              />

              <Link href={props.buttonSrc || "#"}>
                <a className="block w-full px-5 py-3 text-base font-medium text-center text-indigo-700 bg-white border border-transparent rounded-md shadow-md hover:bg-gray-50 sm:inline-block sm:w-auto">
                  {props.buttonName || "Enter Button name"}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
