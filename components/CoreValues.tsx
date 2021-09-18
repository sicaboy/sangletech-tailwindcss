import React from "react";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

function CoreValues(props) {
  const description = props.description
    ? `<div class="note">

${props.description}

</div>`
    : `<div class="note">

"Semper curabitur ullamcorper posuere nunc sed. Ornare iaculisbibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus viverra dui tellus ornare pharetra."

</div>`;

  const list = [
    {
      id: 1,
      text: props.listOneText || "list text",
    },
    {
      id: 2,
      text: props.listTwoText || "list text",
    },
    {
      id: 3,
      text: props.listThreeText || "list text",
    },
    {
      id: 4,
      text: props.listFourText || "list text",
    },
    {
      id: 5,
      text: props.listFiveText || "list text",
    },
    {
      id: 6,
      text: props.listSixText || "list text",
    },
  ];

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="mb-20 text-center">
            <h1 className="mb-4 text-2xl font-medium text-center text-gray-900 sm:text-3xl title-font">
              {props.title || "Raw Denim Heirloom Man Braid"}
            </h1>

            <ReactMarkdown
              children={description}
              rehypePlugins={[rehypeRaw]}
              remarkPlugins={[remarkGfm]}
              className="mt-3 text-lg text-gray-500"
            />
          </div>
          <div className="flex flex-wrap -mx-2 lg:w-4/5 sm:mx-auto sm:mb-2">
            {list.map((item) => (
              <div className="w-full p-2 sm:w-1/2" key={item.id}>
                <div className="flex items-center h-full p-4 bg-gray-100 rounded">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    className="flex-shrink-0 w-6 h-6 mr-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="font-medium title-font">{item.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default CoreValues;
