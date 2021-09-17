import React from "react";

import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

function GalleryTwoPhotos(props) {
  const descriptionOne = props.certificateOneDescription
    ? `<div class="note">

${props.certificateOneDescription}

</div>`
    : `<div class="note">

"Semper curabitur ullamcorper posuere nunc sed. Ornare iaculisbibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu ."

</div>`;

  const descriptionTwo = props.certificateTwoDescription
    ? `<div class="note">

${props.certificateTwoDescription}

</div>`
    : `<div class="note">

"Semper curabitur ullamcorper posuere nunc sed. Ornare iaculisbibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu."

</div>`;

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            <div className="px-4 mb-10 sm:w-1/2">
              <div className="h-64 overflow-hidden rounded-lg">
                <img
                  alt={props.certificateOneImgAlt || "sang le tech"}
                  className="object-contain object-center w-full h-full"
                  src={
                    props.certificateOneImgSrc ||
                    "https://dummyimage.com/1201x501"
                  }
                />
              </div>
              <h2 className="mt-6 mb-3 text-2xl font-medium text-gray-900 title-font">
                {props.certificateOneTitle || " Buy YouTube Videos"}
              </h2>
              <ReactMarkdown
                children={descriptionOne}
                rehypePlugins={[rehypeRaw]}
                remarkPlugins={[remarkGfm]}
                className="mt-4 text-lg text-gray-500"
              />
            </div>
            <div className="px-4 mb-10 sm:w-1/2">
              <div className="h-64 overflow-hidden rounded-lg">
                <img
                  alt={props.certificateTwoImgAlt || "sang le tech"}
                  className="object-contain object-center w-full h-full"
                  src={
                    props.certificateTwoImgSrc ||
                    "https://dummyimage.com/1201x501"
                  }
                />
              </div>
              <h2 className="mt-6 mb-3 text-2xl font-medium text-gray-900 title-font">
                {props.certificateTwoTitle || " Buy YouTube Videos"}
              </h2>
              <ReactMarkdown
                children={descriptionTwo}
                rehypePlugins={[rehypeRaw]}
                remarkPlugins={[remarkGfm]}
                className="mt-4 text-lg text-gray-500"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GalleryTwoPhotos;
