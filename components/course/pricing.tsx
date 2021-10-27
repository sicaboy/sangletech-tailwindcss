import React from "react";
import { CheckCircleIcon, ShieldCheckIcon } from "@heroicons/react/solid";

function Pricing({ pricing }) {
  return (
    <div className="my-32">
      <Header pricing={pricing} />
      <Body pricing={pricing} />
      <Payment pricing={pricing} />
    </div>
  );
}

export default Pricing;

function Header({ pricing }) {
  return (
    <div className="bg-gray-100">
      <div className="pt-12 sm:pt-16 lg:pt-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <button className="block px-3 py-1 mx-auto mb-3 text-sm font-semibold tracking-wide text-white uppercase bg-indigo-600 rounded-full cursor-text sm:text-base lg:text-sm xl:text-base">
              {pricing.header.caption || "Pricing"}
            </button>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
              {pricing.header.primaryTitle || "Simple no-tricks pricing"}
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              {pricing.header.primaryDescription ||
                "  If you're not satisfied, contact us within the first 14 days and we'll send you a full refund."}
            </p>
            <img
              src={
                pricing.header.imgSrc ||
                "https://storyblok-cdn.mindvalley.com/f/60579/700x430/275e75822c/sb_ordermenu_no-cert_2x.jpg?quality=30&dpr=2&width=464"
              }
              className="mx-auto my-3 rounded-lg"
              alt={pricing.header.imgSrc || "Sang Le Tech"}
            />
          </div>
        </div>
      </div>
      <div className="pb-16 mt-8 bg-white sm:mt-12 sm:pb-20 lg:pb-28">
        <div className="relative">
          <div className="absolute inset-0 bg-gray-100 h-1/2" />
          <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-lg mx-auto overflow-hidden rounded-lg shadow-lg lg:max-w-none lg:flex">
              <div className="flex-1 px-6 py-8 bg-white lg:p-12">
                <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                  {pricing.header.secondaryTitle || "LifeTime Membership"}
                </h3>
                <p className="mt-6 text-base text-gray-500">
                  {pricing.header.secondaryDescription ||
                    "Lorem ipsum dolor sit amet consect etur adipisicing elit Itaque amet indis perferendis blanditiis repellendus etur quidem assumenda."}
                </p>
                <div className="mt-8">
                  <div className="flex items-center">
                    <h4 className="flex-shrink-0 pr-4 text-sm font-semibold tracking-wider text-indigo-600 uppercase bg-white">
                      {pricing.header.listTitle || "What's included"}
                    </h4>
                    <div className="flex-1 border-t-2 border-gray-200" />
                  </div>
                  <ul
                    role="list"
                    className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:gap-y-5"
                  >
                    {pricing.includedBoth.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start lg:col-span-1"
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Body({ pricing }) {
  return (
    <div className="py-6 bg-white sm:py-8 lg:py-12">
      <div className="max-w-screen-lg px-4 mx-auto md:px-8">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-0">
          {/* <!-- left side - start --> */}
          <div className="w-full p-6 bg-gray-800 rounded-lg sm:w-1/2 lg:w-1/3 sm:rounded-r-none sm:p-8">
            <div className="mb-4">
              <h3 className="text-2xl font-semibold text-gray-100 sm:text-3xl">
                {pricing.single.title || "Single Program"}
              </h3>
              <p className="text-gray-300">
                {pricing.single.description ||
                  "Get Access to only Superbrain on all devices."}
              </p>
              <img
                src={
                  pricing.single.imgSrc ||
                  "https://storyblok-cdn.mindvalley.com/f/60579/1920x1080/da25f4caa8/sb_questcover_en.jpg?trans?quality=30&dpr=2&width=219"
                }
                className="mx-auto my-3 rounded-lg"
                alt={pricing.single.imgSrc || "Sang Le Tech"}
              />
            </div>
            <div className="mb-4 space-x-2 ">
              <span className="text-6xl font-bold text-gray-100 ">
                {pricing.single.promotedPrice || "$29"}
              </span>
              <span className="text-2xl text-gray-300 line-through">
                {pricing.single.originalPrice || "$49"}
              </span>
            </div>

            <ul className="mb-6 space-y-2 text-gray-300">
              {/* <!-- feat - start --> */}
              {pricing.single.list.map((item) => (
                <li className="flex items-center gap-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <span>{item}</span>
                  {/* <!-- feat - end --> */}
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="block px-8 py-3 text-sm font-semibold text-center text-gray-100 transition duration-100 bg-gray-500 rounded-lg outline-none hover:bg-gray-600 focus-visible:ring ring-indigo-300 active:text-gray-300 md:text-base"
            >
              {pricing.single.buttonName || "Join the Program"}
            </a>
          </div>
          {/* <!-- left side - end --> */}
          {/* <!-- right side - start --> */}
          <div className="w-full p-6 rounded-lg shadow-xl sm:w-1/2 bg-gradient-to-tr from-indigo-500 to-purple-400 sm:p-8">
            <div className="flex flex-col items-start justify-between gap-4 mb-4 lg:flex-row">
              <div>
                <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                  {pricing.membership.title || "Sang Le Membership"}
                </h3>
                <p className="text-indigo-100">
                  {pricing.membership.description ||
                    "Get Access to Superbrain on all devices PLUS unlock everything else on Mindvalley. You get the entire vault of programs unlocked for less than $2 a day."}
                </p>
              </div>

              <span className="order-first inline-block px-3 py-1 text-xs font-semibold tracking-wider text-white uppercase bg-indigo-200 bg-opacity-50 rounded-full lg:order-none">
                {pricing.membership.valueCaption || "Best Value"}
              </span>
            </div>

            <Gallery pricing={pricing} />
            <div className="mb-4 space-x-2 ">
              <span className="text-6xl font-bold text-white">
                {pricing.membership.promotedPrice || "$49"}
              </span>
              <span className="text-2xl text-indigo-100 line-through">
                {pricing.membership.originalPrice || " $89"}
              </span>
            </div>

            <ul className="mb-6 space-y-2 text-indigo-50">
              {/* <!-- feat - start --> */}
              {pricing.membership.list.map((item) => (
                <li className="flex items-center gap-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <span>{item}</span>
                  {/* <!-- feat - end --> */}
                </li>
              ))}
            </ul>

            <a
              href="#"
              className="block px-8 py-3 text-sm font-semibold text-center text-white transition duration-100 bg-indigo-200 bg-opacity-50 rounded-lg outline-none hover:bg-indigo-300 active:bg-indigo-400 focus-visible:ring ring-indigo-300 md:text-base"
            >
              {pricing.membership.buttonName || "Join the Program"}
            </a>
          </div>
          {/* <!-- right side - end --> */}
        </div>
      </div>
    </div>
  );
}

function Gallery({ pricing }) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container flex flex-wrap py-6 mx-auto">
        <div className="flex flex-wrap -m-1 md:-m-2">
          <div className="flex flex-wrap w-full">
            {pricing.membershipPrograms.map((item) => (
              <div className="w-1/4 p-1 md:p-1">
                <img
                  alt={item.alt || "sang le tech program"}
                  className="block object-cover object-center w-full h-full rounded"
                  src={item.src || "https://dummyimage.com/500x300"}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

//SANG: Improve the payment info here
function Payment({ pricing }) {
  return (
    <div className="w-full p-6 mx-auto">
      <p>Payment Logos: visa, master, momo, zalopay, vietelpay</p>
      <div className="flex justify-center w-1/2 align-center">
        <div className="w-1/5">
          <ShieldCheckIcon className="w-12 h-12 text-indigo-600 " />
        </div>
        <p className="w-4/5">
          For your security, all orders are processed on a secured server.
        </p>
      </div>
    </div>
  );
}
