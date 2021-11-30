/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from "@heroicons/react/outline";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import Link from 'next/link'

export default function OpenPosition(props) {

  const { caption, title, description, positions } = props

  const markdown = description
    ? `<div className="note">

${description}
  
  </div>`
    : `<div className="note">

"Semper curabitur ullamcorper posuere nunc sed. Ornare iaculisbibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus viverra dui tellus ornare pharetra."

</div>`;


  return (
    <div className="bg-white">
      <div className="px-5 py-24 mx-auto ">
        <div>
          <div className="flex flex-col flex-wrap items-center w-full mb-20 text-center">
            <h2 className="text-base font-semibold tracking-wide text-indigo-600 uppercase">
              {props.caption || "Everything you need"}
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900">
              {props.title || " All-in-one platform"}
            </p>

            {description && (
              <ReactMarkdown
                children={markdown}
                rehypePlugins={[rehypeRaw]}
                remarkPlugins={[remarkGfm]}
                className="container w-full mt-8 text-lg leading-relaxed text-gray-500 lg:w-2/3"
              />
            )}
          </div>
        </div>
        <div className="mt-16 lg:mt-0 lg:col-span-2">
          <dl className="flex flex-wrap m-4">
            {positions.map((item) => (
              <Link href={item.url} >
                <div className="p-4 sm:w-1/3" key={item.position}>
                  {item.position && (
                    <div className=" flex items-center h-full p-6 border border-gray-200 rounded-lg shadow-md cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 w-6 h-6 mr-4 text-indigo-500"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                      </svg>

                      <div>
                        <h1 className="font-bold text-black font-xl">{item.position}</h1>
                        <p className="text-base text-gray-500 ">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
