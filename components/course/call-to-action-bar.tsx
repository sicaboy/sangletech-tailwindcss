import Link from "next/link";
import React from "react";

function CallToAction() {
  return (
    <div className="py-6 bg-white sm:py-8 lg:py-12">
      <div className="px-4 mx-auto max-w-screen-2xl md:px-8">
        <div className="flex flex-col items-center justify-between gap-4 p-4 bg-gray-100 rounded-lg sm:flex-row md:p-8">
          <div>
            <h2 className="text-xl font-bold text-indigo-500 md:text-2xl">
              Start your free trial
            </h2>
            <p className="text-gray-600">No Credit Card required</p>
          </div>

          <Link href="#">
            <a className="inline-block px-8 py-3 text-sm font-semibold text-center text-white transition duration-100 bg-indigo-500 rounded-lg outline-none hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 md:text-base">
              Start now
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
