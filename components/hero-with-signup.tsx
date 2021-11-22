import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Link from "next/link";
import { GoogleOutlined } from "@ant-design/icons"
import { ChevronRightIcon } from "@heroicons/react/solid";


export default function HeroWithSignUp(props) {

  const { description, caption, titleHighlight, imgSrc, alt, termUrl, cookieUrl } = props


  const textBlock = description
    ? `<div class="note">

${description}

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
            className="absolute   bottom-0 right-0 mb-48 text-gray-700 transform translate-x-1/2 lg:top-0 lg:mt-28 lg:mb-0 xl:transform-none xl:translate-x-0"
            width={364}
            height={384}
            viewBox="0 0 364 384"
            fill="none"
          > <defs>
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
        <div className="my-16  sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
          <h1 className="text-center">
            <button className="block px-3 py-1 mx-auto my-8 mb-3 text-sm font-semibold tracking-wide text-white uppercase bg-indigo-600 rounded-full cursor-text sm:text-base lg:text-sm xl:text-base">
              {caption || "Coming soon"}
            </button>

            <span className=" mt-1 text-4xl font-extrabold tracking-tight sm:text-5xl xl:text-6xl">
              <span className="text-indigo-600 ">
                {titleHighlight || "This is a FreeOnline Course from Sang Le "}
              </span>
            </span>
          </h1>

          <ReactMarkdown
            children={textBlock}
            rehypePlugins={[rehypeRaw]}
            remarkPlugins={[remarkGfm]}
            className="mt-3 text-base text-center text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
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
                      imgSrc ||
                      "https://images.unsplash.com/photo-1556740758-90de374c12ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    }
                    alt={alt || "sangletech"}
                  />
                </div>
                <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
                  <div className="bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
                    <div className="px-4 py-8 sm:px-10">
                      <div>
                        <p className="text-sm font-medium text-gray-700">
                          Đăng ký nhanh với Google hoặc Facebook
                        </p>

                        <div className="mt-3 grid grid-cols-2 gap-3 mt-1">
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
                              <span className="sr-only ">
                                Sign in with Google
                              </span>
                              <GoogleOutlined style={{ fontSize: '20px' }} />
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
                              Full e
                            </label>
                            <input
                              type="text"
                              name="name"
                              id="name"
                              autoComplete="name"
                              placeholder="Họ & Tên"
                              required
                              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                          </div>

                          <div>
                            <label
                              htmlFor="email"
                              className="sr-only"
                            >
                              Email
                            </label>
                            <input
                              type="text"
                              name="email"
                              id="mobile-or-email"
                              autoComplete="email"
                              placeholder="Email"
                              required
                              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="mobile"
                              className="sr-only"
                            >
                              Số điện thoại
                            </label>
                            <input
                              type="text"
                              name="mobile"
                              id="mobile"
                              autoComplete="mobile"
                              placeholder="Số Điện Thoại"
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
                              Tạo tài khoản
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="text-center px-4 py6 border-t-2 border-gray-200 bg-gray-50 sm:px-10">
                      <p className="text-xs leading-5 text-gray-500">
                        Bạn đồng ý với{" "}
                        <a
                          href={termUrl || "#"}
                          className="font-medium text-gray-900 hover:underline"
                        >
                          Điều Khoản
                        </a>
                        ,{" "}

                        and{" "}
                        <a
                          href={cookieUrl || "#"}
                          className="font-medium text-gray-900 hover:underline"
                        >
                          Cookies
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


