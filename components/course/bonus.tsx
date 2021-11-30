import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import Link from "next/link";

function Bonus({ bonuses }) {
  return (
    <div className="m-3 my-32 sm:m-8">
      <h2 className="mb-16 text-3xl font-extrabold text-center text-gray-900 sm:text-4xl">
        {bonuses.title || "Bonus Included When You Join Today"}
      </h2>
      <div className="flex flex-col">
        {bonuses.list.map((bonus) => (
          <div
            className="contain]er p-8 mx-auto my-3 border border-gray-200 rounded-lg shadow-lg sm:p-16"
            id={bonus.title}
          >
            <div className="relative lg:grid lg:grid-cols-3 lg:gap-8 lg:items-center">
              <div className="relative col-span-2 sm:mr-16">
                <button className="block px-3 py-1 mb-3 text-sm font-semibold tracking-wide text-white uppercase bg-indigo-600 rounded-full cursor-text sm:text-base lg:text-sm xl:text-base">
                  {bonus.caption || "Coming soon"}
                </button>
                <h2 className="text-3xl font-extrabold tracking-tight text-black sm:text-3xl">
                  {bonus.title || "Transfer funds world-wide"}
                </h2>
                <ReactMarkdown
                  children={bonus.description}
                  rehypePlugins={[rehypeRaw]}
                  remarkPlugins={[remarkGfm]}
                  className="mt-3 text-lg text-gray-500"
                />
              </div>
              <div
                className="relative col-span-1 mt-10 -mx-4 lg:mt-0"
                aria-hidden="true"
              >
                <div className="relative w-full mx-auto rounded-lg shadow-lg lg:max-w-md ring ring-offset-4 ring-indigo-400">
                  <button className="relative block w-full overflow-hidden bg-white rounded-lg cursor-default focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <img
                      className="w-full"
                      src={
                        bonus.imgSrc ||
                        "https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                      }
                      alt={bonus.alt || "sang le tech"}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bonus;
