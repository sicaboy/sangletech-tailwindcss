import React from "react";
import Layout from "../../components/layout";
import * as Icon from "@heroicons/react/outline";
import CallToAction from "../../components/course/call-to-action-bar";
import Curriculum from "../../components/course/curriculum";
import MeetYourCoach from "../../components/course/meet-you-coach";
import Stories from "../../components/course/stories";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Link from "next/link";

import { ChevronRightIcon } from "@heroicons/react/solid";
function HeroWithSignUp(props) {
  const description = props.description
    ? `<div class="note">

${props.description}

</div>`
    : `<div class="note">

"Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure quilorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."

</div>`;

  return (
    <div>
      <div className="relative overflow-hidden bg-gray-800">
        <div
          className="hidden sm:block sm:absolute sm:inset-0"
          aria-hidden="true"
        >
          <svg
            className="absolute bottom-0 right-0 mb-48 text-gray-700 transform translate-x-1/2 lg:top-0 lg:mt-28 lg:mb-0 xl:transform-none xl:translate-x-0"
            width={364}
            height={384}
            viewBox="0 0 364 384"
            fill="none"
          >
            <defs>
              <pattern
                id="eab71dd9-9d7a-47bd-8044-256344ee00d0"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} fill="currentColor" />
              </pattern>
            </defs>
            <rect
              width={364}
              height={384}
              fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)"
            />
          </svg>
        </div>
        <div className="my-16 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
          <h1>
            <button className="block px-3 py-1 mx-auto my-8 mb-3 text-sm font-semibold tracking-wide text-white uppercase bg-indigo-600 rounded-full cursor-text sm:text-base lg:text-sm xl:text-base">
              {props.caption || "Coming soon"}
            </button>

            <span className="mt-1 text-4xl font-extrabold tracking-tight sm:text-5xl xl:text-6xl">
              <span className="text-indigo-600 ">
                {props.titleHighlight || "online business"}
              </span>
            </span>
          </h1>

          <ReactMarkdown
            children={description}
            rehypePlugins={[rehypeRaw]}
            remarkPlugins={[remarkGfm]}
            className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
          />
        </div>
        <div className="relative pt-6 pb-16 sm:pb-24">
          <main className="mt-16 sm:mt-24">
            <div className="mx-auto max-w-7xl">
              <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
                  <img
                    className="w-full sm:px-6"
                    src={
                      props.imgSrc ||
                      "https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    }
                    alt={props.alt || "sangletech"}
                  />
                </div>
                <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
                  <div className="bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
                    <div className="px-4 py-8 sm:px-10">
                      <div>
                        <p className="text-sm font-medium text-gray-700">
                          Sign in with
                        </p>

                        <div className="grid grid-cols-3 gap-3 mt-1">
                          <div>
                            <a
                              href="#"
                              className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
                            >
                              <span className="sr-only">
                                Sign in with Facebook
                              </span>
                              <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </a>
                          </div>

                          <div>
                            <a
                              href="#"
                              className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
                            >
                              <span className="sr-only">
                                Sign in with Twitter
                              </span>
                              <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                              </svg>
                            </a>
                          </div>

                          <div>
                            <a
                              href="#"
                              className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50"
                            >
                              <span className="sr-only">
                                Sign in with GitHub
                              </span>
                              <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="relative mt-6">
                        <div
                          className="absolute inset-0 flex items-center"
                          aria-hidden="true"
                        >
                          <div className="w-full border-t border-gray-300" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                          <span className="px-2 text-gray-500 bg-white">
                            Or
                          </span>
                        </div>
                      </div>

                      <div className="mt-6">
                        <form action="#" method="POST" className="space-y-6">
                          <div>
                            <label htmlFor="name" className="sr-only">
                              Full name
                            </label>
                            <input
                              type="text"
                              name="name"
                              id="name"
                              autoComplete="name"
                              placeholder="Full name"
                              required
                              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="mobile-or-email"
                              className="sr-only"
                            >
                              Mobile number or email
                            </label>
                            <input
                              type="text"
                              name="mobile-or-email"
                              id="mobile-or-email"
                              autoComplete="email"
                              placeholder="Mobile number or email"
                              required
                              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                          </div>

                          <div>
                            <label htmlFor="password" className="sr-only">
                              Password
                            </label>
                            <input
                              id="password"
                              name="password"
                              type="password"
                              placeholder="Password"
                              autoComplete="current-password"
                              required
                              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                          </div>

                          <div>
                            <button
                              type="submit"
                              className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                              Create your account
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="px-4 py-6 border-t-2 border-gray-200 bg-gray-50 sm:px-10">
                      <p className="text-xs leading-5 text-gray-500">
                        By signing up, you agree to our{" "}
                        <a
                          href="#"
                          className="font-medium text-gray-900 hover:underline"
                        >
                          Terms
                        </a>
                        ,{" "}
                        <a
                          href="#"
                          className="font-medium text-gray-900 hover:underline"
                        >
                          Data Policy
                        </a>{" "}
                        and{" "}
                        <a
                          href="#"
                          className="font-medium text-gray-900 hover:underline"
                        >
                          Cookies Policy
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

function WatchPreview() {
  return <div>Preview Video</div>;
}

// export default Hero
// export default WatchPreview

const callToAction = {
  courseLength: "",
  dateStart: "",
  buttonName: "",
};

const curriculum = {
  general: {
    direction: "left", // left or right
    caption: "Nội Dung Lớp Học",
    title: "Tên Khóa Học",
    description: `The Superbrain Quest is a 30-day daily coaching program with accelerated learning coach Jim Kwik. In just 15 - 20 minutes a day, you’ll join Jim as he guides you through his signature tools and techniques for supercharging your memory, focus, and learning capacity.

The program is designed to be both easy to follow, and instantly transformational. As you progress through the days, you’ll quickly notice tangible changes in your memory and mind power - and the people around you likely will too.

By the end of the program, your ‘Superbrain’ will be permanently installed into you: allowing you to access your newfound inner gifts whenever and wherever you need them.
`,
    imgSrc:
      "https://storyblok-cdn.mindvalley.com/f/60579/2068x1110/37b76048b1/sb_sp_devices_curriculum.png?trans?quality=30&dpr=2&width=752",
    videoSrc: "",
    videoCaption: "",
    alt: "",
  },
  details: [
    {
      section: `**Section 1** : What's the best thing about Switzerland?`,
      topic: `<span className="text-lg text-indigo-500">**Highlight include:** </span><br></br>
      **<span className="mr-3 text-indigo-500">✓</span>   Nếu Bạn là doanh nhân muốn kinh doanh sản phẩm Online** thông qua Phễu Bán Hàng.
   `,
    },
    {
      section: `**Section 2** : What's the best thing about Switzerland?`,
      topic: `<span className="text-lg text-indigo-500">**Highlight include:** </span><br></br>
      **<span className="mr-3 text-indigo-500">✓</span>   Nếu Bạn là doanh nhân muốn kinh doanh sản phẩm Online** thông qua Phễu Bán Hàng.
   `,
    },
  ],
};
const stories = {
  general: {
    caption: "Stories",
    title: "Câu Chuyện Khách Hàng",
    description: ``,
  },
  details: [
    {
      name: "Student 1",
      title: "CEO",
      quote:
        "To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself",
      img: "/assets/sangle-profilePic.jpg",
      alt: "sang le tech",
    },
    {
      name: "Student 1",
      title: "CEO",
      quote:
        "To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself",
      img: "/assets/sangle-profilePic.jpg",
      alt: "sang le tech",
    },
    {
      name: "Student 1",
      title: "CEO",
      quote:
        "To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself",
      img: "/assets/sangle-profilePic.jpg",
      alt: "sang le tech",
    },
  ],
};

function FreeLessonSignedUp() {
  return (
    <Layout>
      <HeroWithSignUp />
      <CallToAction {...callToAction} />
      <WatchPreview />
      <Curriculum general={curriculum.general} details={curriculum.details} />
      <MeetYourCoach />
      <Stories stories={stories} />
      <HeroWithSignUp />
    </Layout>
  );
}

export default FreeLessonSignedUp;
