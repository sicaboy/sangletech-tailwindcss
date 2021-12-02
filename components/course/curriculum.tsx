import React from "react";
import Hero from "../selectable-left-right-img-video-with-content";
import { Disclosure } from "@headlessui/react";
import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/outline";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Curriculum(props) {
  const { details, general } = props;
  // const details = props.details;
  // const general = props.general;

  const Section = () => (
    <div>
      <div className="bg-gray-50">
        <div className="px-4 py-12 mx-auto max-w-7xl sm:py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
            <dl className="mt-6 space-y-6">
              {details.map((item) => (
                <Disclosure
                  as="div"
                  key={item.section}
                  className="p-8 pt-6 border-2 rounded-lg shadow-lg"
                >
                  {({ open }) => (
                    <>
                      <dt className="text-lg">
                        <Disclosure.Button className="flex items-start justify-between w-full text-left text-gray-400">
                          <ReactMarkdown
                            children={item.section}
                            rehypePlugins={[rehypeRaw]}
                            remarkPlugins={[remarkGfm]}
                            className="text-lg font-medium text-gray-900 capitalize sm:text-xl"
                          />

                          <span className="flex items-center ml-6 h-7">
                            {open ? (
                              <MinusCircleIcon className="w-6 h-6 text-indigo-500" />
                            ) : (
                              <PlusCircleIcon
                                className={classNames(
                                  open
                                    ? "-rotate-180"
                                    : "rotate-0 text-indigo-500",
                                  "h-6 w-6 transform "
                                )}
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="pr-12 mt-2">
                        {/* <p className="text-base text-gray-500">{item.topic}</p> */}
                        <ReactMarkdown
                          children={item.topic}
                          rehypePlugins={[rehypeRaw]}
                          remarkPlugins={[remarkGfm]}
                          className="text-base text-gray-500"
                        />
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <Hero {...general} />
      <Section />
    </div>
  );
}

export default Curriculum;
