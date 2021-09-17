import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Image from "next/image";

interface Props {
  title?: string;
  description?: string;
  imgSmallOneSrc?: string;
  imgSmallTwoSrc?: string;
  imgSmallThreeSrc?: string;
  imgSmallFourSrc?: string;
  imgLargeOneSrc?: string;
  imgLargeTwoSrc?: string;
}

function Example(props: Props) {
  const description = props.description
    ? `<div class="note">

${props.description}

</div>`
    : `<div class="note">

"Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure quilorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."

</div>`;
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container flex flex-wrap px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <h1 className="mb-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font lg:w-1/3 lg:mb-0">
              {props.title || " Master Cleanse Reliac Heirloom"}
            </h1>
            <ReactMarkdown
              children={description}
              rehypePlugins={[rehypeRaw]}
              remarkPlugins={[remarkGfm]}
              className="mx-auto text-base leading-relaxed lg:pl-6 lg:w-2/3"
            />
          </div>
          <div className="flex flex-wrap -m-1 md:-m-2">
            <div className="flex flex-wrap w-1/2">
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full"
                  src={props.imgSmallOneSrc || "https://dummyimage.com/500x300"}
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full"
                  src={props.imgSmallTwoSrc || "https://dummyimage.com/501x301"}
                />
              </div>
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full"
                  src={props.imgLargeOneSrc || "https://dummyimage.com/601x361"}
                />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full"
                  src={props.imgLargeTwoSrc || "https://dummyimage.com/601x361"}
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full"
                  src={
                    props.imgSmallThreeSrc || "https://dummyimage.com/502x302"
                  }
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full"
                  src={
                    props.imgSmallFourSrc || "https://dummyimage.com/503x303"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Example;
