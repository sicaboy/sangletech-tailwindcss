import React from "react";
import ReactMarkdown from "react-markdown";

import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

//YUNNIE: Change the gaurantee section here
function Guarantee({ guarantee }) {
  //   const guarantee = {
  //     description: `<span className="text-3xl">**Try It For 15 Days Risk Free**</span>
  // <br></br>
  // Remember you don’t have to say YES right now. You only have to say MAYBE. Go through the materials for 15 days risk-free from the day of purchase. <br></br> You can refund yourself anytime with one click. No emails, no phone calls, no hassle. Just reach out through our Refund Page and get a full, friendly and fast refund. No questions asked.`,
  //     name: "Yunnie Nguyen",
  //     position: "Customer Happiness Manager",
  //     listItems: [
  //       {
  //         title: "Lifetime Access",
  //         description:
  //           "Join once, own it for life and repeat as often as you want.",
  //       },
  //       {
  //         title: "Free Upgrades",
  //         description:
  //           "We upgrade our program every year. All upgrades are free.",
  //       },
  //       {
  //         title: "Limited Time Discount",
  //         description:
  //           "You can join today for a special discount over regular pricing.",
  //       },
  //     ],
  //   };

  return (
    <div className="my-16">
      {/* Start Avatar Section   */}
      <div className="pt-8 m-3 bg-white sm:pt-16 ">
        <div className="pb-16 bg-indigo-600 rounded-lg lg:pb-0 lg:z-10 lg:relative">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
            <div className="relative lg:-my-8">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 bg-white h-1/2 lg:hidden"
              />
              <div className="max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
                <div className="overflow-hidden shadow-xl aspect-w-10 aspect-h-6 rounded-xl sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                  <img
                    className="object-cover lg:h-full lg:w-full"
                    src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
              <div className="max-w-md px-4 mx-auto sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
                <blockquote>
                  <div>
                    <ReactMarkdown
                      children={
                        guarantee.description ||
                        `<span className="text-xl sm:text-3xl">**Try It For 15 Days Risk Free**</span>
                         <br></br>
                        Remember you don’t have to say YES right now. You only have to say MAYBE. Go through the materials for 15 days risk-free from the day of purchase. <br></br> You can refund yourself anytime with one click. No emails, no phone calls, no hassle. Just reach out through our Refund Page and get a full, friendly and fast refund. No questions asked.`
                      }
                      rehypePlugins={[rehypeRaw]}
                      remarkPlugins={[remarkGfm]}
                      className="mt-6 text-lg font-medium text-white sm:text-xl"
                    />
                  </div>
                  <footer className="mt-6">
                    <p className="text-base font-medium text-white">
                      {guarantee.name || "Yunnie Nguyen"}
                    </p>
                    <p className="text-base font-medium text-indigo-100">
                      {guarantee.position || "Customer Happiness Manager"}
                    </p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Avatar Section */}
      <div className="px-3 py-3 mx-auto sm:py-16 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <div className="grid gap-8 row-gap-5 lg:grid-cols-3">
          {guarantee.listItems.map((item) => (
            <div className="relative p-px overflow-hidden transition duration-300 transform border border-indigo-500 rounded-lg shadow-sm hover:scale-105 group hover:shadow-xl">
              <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-indigo-800 group-hover:scale-x-100" />
              <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-indigo-800 group-hover:scale-y-100" />
              <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-indigo-800 group-hover:scale-x-100" />
              <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-indigo-800 group-hover:scale-y-100" />
              <div className="relative p-5 bg-white rounded-s ">
                <div className="flex flex-col mb-2 lg:items-center lg:flex-row">
                  <div className="flex items-center justify-center w-10 h-10 mb-4 mr-2 text-indigo-600 rounded-full bg-indigo-50 lg:mb-0">
                    <svg
                      className="w-8 h-8 text-deep-purple-accent-400"
                      stroke="currentColor"
                      viewBox="0 0 52 52"
                    >
                      <polygon
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        points="29 13 14 29 25 29 23 39 38 23 27 23"
                      />
                    </svg>
                  </div>
                  <h6 className="text-xl font-semibold leading-5 text-black capitalize">
                    {item.title || "The quick, brown fox"}
                  </h6>
                </div>
                <p className="mb-2 text-sm text-gray-900">
                  {item.description ||
                    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam."}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Guarantee;
