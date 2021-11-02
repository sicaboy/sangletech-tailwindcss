import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

function Stories({ stories }) {
  const description = stories.general.description
    ? `<div className="note">

  ${stories.general.description}
  
  </div>`
    : `<div className="note">

"Semper curabitur ullamcorper posuere nunc sed. Ornare iaculisbibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus viverra dui tellus ornare pharetra."

</div>`;
  return (
    <div className="my-8">
      <div className="flex flex-col flex-wrap items-center w-full mb-10 text-center">
        <h2 className="block px-3 py-1 mb-3 text-sm font-semibold tracking-wide text-white uppercase bg-indigo-600 rounded-full cursor-text sm:text-base lg:text-sm xl:text-base">
          {stories.general.caption || "Everything you need"}
        </h2>
        <p className="mx-3 mt-2 text-3xl font-extrabold text-gray-900">
          {stories.general.title || " All-in-one platform"}
        </p>
        {stories.general.description && (
          <ReactMarkdown
            children={description}
            rehypePlugins={[rehypeRaw]}
            remarkPlugins={[remarkGfm]}
            className="container w-full mt-8 text-lg leading-relaxed text-gray-500 lg:w-2/3"
          />
        )}
      </div>

      <div className="flex flex-col items-center w-full gap-8 p-6 mb-8 sm:p-8 md:flex-row md:mb-0 flex-between">
        {stories.details.map((story) => (
          <div className="w-full p-6 mx-auto bg-white shadow-lg dark:bg-gray-800 rounded-xl">
            <p className="text-gray-600 dark:text-white">
              <span className="text-lg font-bold text-indigo-500">“</span>
              {story.quote ||
                "To get social media testimonials like these, keep your customers engaged with your social media accounts by posting regularly yourself"}
              <span className="text-lg font-bold text-indigo-500">”</span>
            </p>
            <div className="flex items-center mt-4">
              <a href="#" className="relative block">
                <img
                  alt={story.alt || "profil"}
                  src={story.img || "/assets/sangle-profilePic.jpg"}
                  className="object-cover w-12 h-12 mx-auto rounded-full "
                />
              </a>
              <div className="flex flex-col justify-between ml-2">
                <span className="text-sm font-semibold text-indigo-500">
                  {story.name || "Jean Miguel"}
                </span>
                <span className="flex items-center text-xs dark:text-gray-400">
                  {story.title || "User of Tail-Kit"}
                  {/* <img src="/icons/rocket.svg" className="w-4 h-4 ml-2" /> */}
                </span>
                {/* <span className="flex items-center text-xs dark:text-gray-400">
                  🌟🌟🌟🌟🌟
                  <img src="/icons/rocket.svg" className="w-4 h-4 ml-2" />
                </span> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stories;
