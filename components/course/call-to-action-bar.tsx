import Link from "next/link";
import React from "react";

function CallToAction(props) {
  return (
    <div className="mx-3 my-16 bg-white sm:mx-8">
      <div className="mx-auto max-w-screen-2xl">
        <div className="flex flex-col items-center justify-between gap-4 p-4 bg-pink-100 rounded-lg sm:flex-row md:p-8">
          <div>
            <h2 className="text-xl font-bold text-pink-500 md:text-2xl">
              {props.courseLength || "Start your free trial"}
            </h2>
            <p className="text-gray-600">
              {props.dateStart || "No Credit Card required"}
            </p>
          </div>

          <Link href="#">
            <a className="inline-block px-8 py-3 text-sm font-semibold text-center text-white transition duration-100 bg-pink-500 rounded-lg outline-none hover:bg-pink-600 active:bg-pink-700 focus-visible:ring ring-pink-300 md:text-base">
              {props.buttonName || "Start now"}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
