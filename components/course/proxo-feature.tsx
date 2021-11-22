
import React from "react";
import Component from "../selectable-left-right-img-video-with-content";
import { CheckCircleIcon } from "@heroicons/react/solid";
import ReactMarkdown from "react-markdown";

import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import Link from "next/link";

function ProXOFeatures({ main, features }) {
  return (
    <div>
      <Main main={main} features={features} />
    </div>
  );
}

function FeatureList({ features }) {
  return (
    <div>
      <ul
        role="list"
        className="mt-8 space-y-5 md:grid-cols-2 lg:space-y-0 lg:pt-6 lg:px-6 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:gap-y-5 "
      >
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-start p-4 bg-gray-100 rounded-lg shadow-md lg:col-span-1"
          >
            <div className="flex-shrink-0">
              <CheckCircleIcon
                className="w-5 h-5 text-green-400"
                aria-hidden="true"
              />
            </div>
            <p className="ml-3 text-sm text-gray-700">{feature}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Main({ main, features }) {

  return (
    <div className="py-16 overflow-hidden bg-gray-50 lg:py-24">
      <Component {...main} />

      <FeatureList features={features} />
    </div>
  );
}

export default ProXOFeatures;
