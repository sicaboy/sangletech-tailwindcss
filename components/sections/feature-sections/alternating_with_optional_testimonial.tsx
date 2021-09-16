/* This example requires Tailwind CSS v2.0+ */
import * as Icon from "@heroicons/react/outline";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

interface Props {
  leftIconName?: {};
  leftTitle?: string;
  leftDescription?: string;
  leftButtonName?: string;
  leftButtonSrc?: string;
  leftAppleSrc?: string;
  leftGoogleSrc?: string;
  leftWebSrc?: string;
  leftTestimonial?: string;
  leftAuthor?: string;
  leftImgSrc?: string;
  leftAlt?: string;
  leftAuthorImgSrc?: string;
  rightIconName?: {};
  rightTitle?: string;
  rightDescription?: string;
  rightButtonName?: string;
  rightButtonSrc?: string;
  rightAppleSrc?: string;
  rightGoogleSrc?: string;
  rightWebSrc?: string;
  rightImgSrc?: string;
  rightAlt?: string;
}

export default function AlternatingWithOptionalTestimonial(props: Props) {
  const leftTestimonial = props.leftDescription
    ? `<div class="note">

  ${props.leftTestimonial}
  
  </div>`
    : `<div class="note">

"Cras velit quis eros eget rhoncus lacus ultrices sed diam. Sit orci risus aenean curabitur donec aliquet. Mi venenatis in euismod ut."

</div>`;

  const leftDescription = props.leftDescription
    ? `<div class="note">

  ${props.leftDescription}
  
  </div>`
    : `<div class="note">

"Semper curabitur ullamcorper posuere nunc sed. Ornare iaculisbibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus viverra dui tellus ornare pharetra."

</div>`;

  const rightDescription = props.rightDescription
    ? `<div class="note">

  ${props.rightDescription}
  
  </div>`
    : `<div class="note">

"Semper curabitur ullamcorper posuere nunc sed. Ornare iaculisbibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus viverra dui tellus ornare pharetra."

</div>`;

  return (
    <div className="relative pt-16 pb-32 overflow-hidden bg-white">
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="max-w-xl px-4 mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div>
                <span className="flex items-center justify-center w-12 h-12 bg-indigo-600 rounded-md">
                  {props.leftIconName || (
                    <Icon.InboxIcon
                      className="w-6 h-6 text-white"
                      aria-hidden="true"
                    />
                  )}
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  {props.leftTitle || "Stay on top of customer support"}
                </h2>
                <ReactMarkdown
                  children={leftDescription}
                  rehypePlugins={[rehypeRaw]}
                  remarkPlugins={[remarkGfm]}
                  className="mt-4 text-lg text-gray-500"
                />

                <div className="mt-6 mb-3">
                  <a
                    href={props.leftButtonSrc || "#"}
                    className="inline-flex px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700"
                  >
                    {props.leftButtonName || "Get started"}
                  </a>
                </div>
                <div className="flex mt-6 mb-3 space-x-4">
                  {props.leftAppleSrc?.length > 0 && (
                    <a
                      href={props.leftAppleSrc || "/"}
                      className="transition duration-300 hover:shadow-lg"
                    >
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1000px-Download_on_the_App_Store_Badge.svg.png"
                        className="object-cover object-top w-32 mx-auto"
                        alt={"sangletech"}
                      />
                    </a>
                  )}
                  {props.leftGoogleSrc?.length > 0 && (
                    <a
                      href={props.leftGoogleSrc || "/"}
                      className="transition duration-300 hover:shadow-lg"
                    >
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1000px-Google_Play_Store_badge_EN.svg.png"
                        className="object-cover object-top w-32 mx-auto"
                        alt="sangletech"
                      />
                    </a>
                  )}
                  {props.leftWebSrc?.length > 0 && (
                    <a
                      href={props.leftWebSrc || "/"}
                      className="transition duration-300 hover:shadow-lg"
                    >
                      <img
                        src="https://blueislanddigital.com/wp-content/uploads/2019/10/Progressive-Web-App.png"
                        className="object-cover object-top w-32 mx-auto"
                        alt="sangletech"
                      />
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className="pt-6 mt-8 border-t border-gray-200">
              <blockquote>
                <div>
                  <ReactMarkdown
                    children={leftTestimonial}
                    rehypePlugins={[rehypeRaw]}
                    remarkPlugins={[remarkGfm]}
                    className="text-base text-gray-500 "
                  />
                </div>
                <footer className="mt-3">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <img
                        className="w-6 h-6 rounded-full"
                        src={
                          props.leftAuthorImgSrc ||
                          "https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                        }
                        alt="sangletech"
                      />
                    </div>
                    <div className="text-base font-medium text-gray-700">
                      {props.leftAuthor ||
                        "Marcia Hill, Digital Marketing Manager"}
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full shadow-xl rounded-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src={
                  props.leftImgSrc ||
                  "https://tailwindui.com/img/component-images/inbox-app-screenshot-1.jpg"
                }
                alt={props.leftAlt || "sangletech"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="max-w-xl px-4 mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div>
              <div>
                <span className="flex items-center justify-center w-12 h-12 bg-indigo-600 rounded-md">
                  <Icon.SparklesIcon
                    className="w-6 h-6 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  {props.rightTitle || "Better understand your customers"}
                </h2>
                <ReactMarkdown
                  children={props.rightDescription || rightDescription}
                  rehypePlugins={[rehypeRaw]}
                  remarkPlugins={[remarkGfm]}
                  className="mt-4 text-lg text-gray-500"
                />

                <div className="mt-6">
                  <a
                    href="#"
                    className="inline-flex px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 "
                  >
                    {props.rightButtonName || "Get started"}
                  </a>
                </div>
                <div className="flex mt-6 mb-3 space-x-4 ">
                  {props.rightAppleSrc?.length > 0 && (
                    <a
                      href={props.rightAppleSrc || "/"}
                      className="transition duration-300 hover:shadow-lg"
                    >
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1000px-Download_on_the_App_Store_Badge.svg.png"
                        className="object-cover object-top w-32 mx-auto"
                        alt={"sangletech"}
                      />
                    </a>
                  )}
                  {props.rightGoogleSrc?.length > 0 && (
                    <a
                      href={props.rightGoogleSrc || "/"}
                      className="transition duration-300 hover:shadow-lg"
                    >
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1000px-Google_Play_Store_badge_EN.svg.png"
                        className="object-cover object-top w-32 mx-auto"
                        alt="sangletech"
                      />
                    </a>
                  )}
                  {props.rightWebSrc?.length > 0 && (
                    <a
                      href={props.rightWebSrc || "/"}
                      className="transition duration-300 hover:shadow-lg"
                    >
                      <img
                        src="https://blueislanddigital.com/wp-content/uploads/2019/10/Progressive-Web-App.png"
                        className="object-cover object-top w-32 mx-auto"
                        alt="sangletech"
                      />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full shadow-xl rounded-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src={
                  props.rightImgSrc ||
                  "https://tailwindui.com/img/component-images/inbox-app-screenshot-2.jpg"
                }
                alt={props.rightAlt || "Customer profile user interface"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
