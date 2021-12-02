import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Smartie from "../components/smartie";

const social = [
  {
    name: "Facebook",
    href: "http://facebook.sangletech.com",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "http://instagram.sangletech.com",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "Youtube",
    href: "http://youtube.sangletech.com",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
        />
      </svg>
    ),
  },
  {
    name: "Linkedin",
    href: "http://linkedin.sangletech.com",
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
];
function HeroWithSocialNStats(props) {
  const description = props.description
    ? `<div class="note">

${props.description}

</div>`
    : `<div class="note">

"Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure quilorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."

</div>`;
  return (
    <div>
      <div className="pb-6 bg-white sm:mt-16 sm:pb-8 lg:pb-12">
        <div className="px-4 mx-auto max-w-screen-2xl md:px-8">
          <section className="flex flex-col flex-col-reverse items-center justify-between gap-8 mb-8 lg:flex-row sm:gap-10 md:gap-16 md:mb-16">
            {/* <!-- content - start --> */}
            <div className="text-center lg:text-left">
              <Smartie />
              <h1 className="tracking-tight text-gray-500 ">
                {/* <span className="block text-3xl font-semibold sm:text-4xl xl:inline">
                  {props.titleNormal || "Data to enrich your"}
                </span>{" "} */}
                <span className="block mt-6 text-3xl font-extrabold text-indigo-600 sm:text-4xl xl:inline">
                  {props.titleHighlight || "online business"}
                </span>
              </h1>
              <ReactMarkdown
                children={description}
                rehypePlugins={[rehypeRaw]}
                remarkPlugins={[remarkGfm]}
                className="mt-3 text-base text-gray-900 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              />

              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href={props.buttonHighlightSrc}
                    className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    {props.buttonHighlight || "Get started"}
                  </a>
                </div>

                {props.buttonNormal && <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href={props.buttonNormalSrc}
                    className="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-indigo-700 bg-indigo-100 border border-transparent rounded-md hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    {props.buttonNormal || "Live demo"}
                  </a>
                </div>}

              </div>
            </div>
            {/* <!-- content - end --> */}

            {/* <!-- image - start --> */}
            <div className="w-full mb-6 overflow-hidden origin-top bg-gray-100 rounded-lg shadow-lg sm:w-1/2 h-72 xl:w-5/12 lg:h-96">
              <img
                src={
                  props.imgSrc ||
                  "https://images.unsplash.com/photo-1618556450991-2f1af64e8191?auto=format&q=75&fit=crop&w=1000"
                }
                loading="lazy"
                alt="Photo by Fakurian Design"
                className="object-cover object-center w-full h-full"
              />
            </div>
            {/* <!-- image - end --> */}
          </section>

          {props.stats &&

            <section className="flex flex-col items-center justify-between gap-10 pt-8 border-t lg:flex-row lg:gap-8">
              {/* <!-- stats - start --> */}
              <div className="grid grid-cols-2 gap-4 -mx-6 md:flex md:divide-x md:-mx-8">
                <div className="px-6 md:px-8">
                  <span className="block text-lg font-bold text-center text-indigo-500 md:text-xl md:text-left">
                    250 Dự Án
                  </span>
                  <span className="block text-sm font-semibold text-center text-gray-800 md:text-base md:text-left">
                    đã hoàn thành Đa Quốc Gia
                  </span>
                </div>

                <div className="px-6 md:px-8">
                  <span className="block text-lg font-bold text-center text-indigo-500 md:text-xl md:text-left">
                    10 Giải Thưởng
                  </span>
                  <span className="block text-sm font-semibold text-center text-gray-800 md:text-base md:text-left">
                    Trao Tặng Bởi TopCoders
                  </span>
                </div>

                <div className="px-6 md:px-8">
                  <span className="block text-lg font-bold text-center text-indigo-500 md:text-xl md:text-left">
                    13 Năm
                  </span>
                  <span className="block text-sm font-semibold text-center text-gray-800 md:text-base md:text-left">
                    Kinh Nghiệm
                  </span>
                </div>
              </div>
              {/* <!-- stats - end --> */}

              {/* <!-- social - start --> */}

              <span className="w-12 h-px bg-gray-200"></span>
              <div className="flex space-x-6 md:order-2">
                {social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-gray-300"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="w-6 h-6" aria-hidden="true" />
                  </a>
                ))}
              </div>
              {/* <!-- social - end --> */}
            </section>
          }
        </div>
      </div>
    </div>
  );
}

export default HeroWithSocialNStats;
