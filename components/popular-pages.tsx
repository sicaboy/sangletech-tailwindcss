import React from "react";
import { ChevronRightIcon } from "@heroicons/react/solid";
import {
  BookmarkAltIcon,
  BookOpenIcon,
  RssIcon,
  ViewListIcon,
} from "@heroicons/react/outline";

const links = [
  {
    title: "Documentation",
    description: "Learn how to integrate our tools with your app",
    icon: BookOpenIcon,
  },
  {
    title: "API Reference",
    description: "A complete API reference for our libraries",
    icon: ViewListIcon,
  },
  {
    title: "Guides",
    description: "Installation guides that cover popular setups",
    icon: BookmarkAltIcon,
  },
  {
    title: "Blog",
    description: "Read our latest news and articles",
    icon: RssIcon,
  },
];

//SANG: Create this page when have time!
function PopularPages() {
  return (
    <div>
      <main className="w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl py-16 mx-auto sm:py-24">
          <div className="mt-12">
            <h2 className="text-sm font-semibold tracking-wide text-gray-500 uppercase">
              Popular pages
            </h2>
            <ul
              role="list"
              className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200"
            >
              {links.map((link, linkIdx) => (
                <li
                  key={linkIdx}
                  className="relative flex items-start py-6 space-x-4"
                >
                  <div className="flex-shrink-0">
                    <span className="flex items-center justify-center w-12 h-12 rounded-lg bg-indigo-50">
                      <link.icon
                        className="w-6 h-6 text-indigo-700"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-medium text-gray-900">
                      <span className="rounded-sm focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                        <a href="#" className="focus:outline-none">
                          <span
                            className="absolute inset-0"
                            aria-hidden="true"
                          />
                          {link.title}
                        </a>
                      </span>
                    </h3>
                    <p className="text-base text-gray-500">
                      {link.description}
                    </p>
                  </div>
                  <div className="self-center flex-shrink-0">
                    <ChevronRightIcon
                      className="w-5 h-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <a
                href="#"
                className="text-base font-medium text-indigo-600 hover:text-indigo-500"
              >
                Or go back home<span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default PopularPages;
