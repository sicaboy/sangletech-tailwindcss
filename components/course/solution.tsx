/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from "@heroicons/react/outline";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

export default function Solution(props) {
  const description = props.description
    ? `<div className="note">

  ${props.description}
  
  </div>`
    : `<div className="note">

"Semper curabitur ullamcorper posuere nunc sed. Ornare iaculisbibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus viverra dui tellus ornare pharetra."

</div>`;

  return (
    <div className="bg-white">
      <div className="py-24 mx-auto sm:px-5 ">
        <div>
          <div className="flex flex-col flex-wrap items-center w-full mb-20 text-center">
            <h2 className="block px-3 py-1 mb-3 text-sm font-semibold tracking-wide text-white uppercase bg-indigo-600 rounded-full cursor-text sm:text-base lg:text-sm xl:text-base">
              {props.caption || "Everything you need"}
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900">
              {props.title || " All-in-one platform"}
            </p>

            {props.description && (
              <ReactMarkdown
                children={description}
                rehypePlugins={[rehypeRaw]}
                remarkPlugins={[remarkGfm]}
                className="container w-full mt-8 text-lg leading-relaxed text-gray-500 lg:w-2/3"
              />
            )}
          </div>
        </div>
        <div className="mt-16 lg:mt-0 lg:col-span-2">
          <dl className="flex flex-wrap m-4">
            {props.features.map((item) => (
              <div className="p-4 sm:w-1/3" key={item.name}>
                {item.description && (
                  <div className="flex items-center h-full p-6 border border-gray-200 rounded-lg shadow-md ">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      className="flex-shrink-0 w-6 h-6 mr-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                    <div>
                    <h1 className="font-semibold text-md text-gray-900">{item.name}</h1>
                      <p className="text-base text-gray-500 ">
                        {item.description}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
