/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from "@headlessui/react";
import { PlusCircleIcon, MinusCircleIcon } from "@heroicons/react/outline";
import Link from "next/link";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example(props) {
  return (
    <div className="bg-gray-50">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
          <h2 className="text-3xl font-extrabold text-center text-gray-900 sm:text-4xl">
            {props.title || "Frequently asked questions"}
          </h2>
          <div className="w-full mx-auto my-16 rounded-lg shadow-lg lg:max-w-md ring ring-offset-4 ring-indigo-400">
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
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {props.faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="flex items-start justify-between w-full text-left text-gray-400">
                        <span className="font-medium text-gray-900">
                          {faq.question}
                        </span>
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
                      <p className="text-base text-gray-500">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
