import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import Image from "next/image";

interface Props {
  title?: string;
  description?: string;
  imgSmallOneSrc?: string;
  imgSmallOneAlt?: string;
  imgSmallTwoSrc?: string;
  imgSmallTwoAlt?: string;
  imgSmallThreeSrc?: string;
  imgSmallThreeAlt?: string;
  imgSmallFourSrc?: string;
  imgSmallFourAlt?: string;
  imgLargeOneSrc?: string;
  imgLargeOneAlt?: string;
  imgLargeTwoSrc?: string;
  imgLargeTwoAlt?: string;
  caption?: string;
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
          <div className="flex flex-col w-3/4 mx-auto mb-20 text-center">
            {props.caption && (
              <button className="self-center block px-3 py-1 mb-3 text-sm font-semibold tracking-wide text-white uppercase bg-indigo-600 rounded-full cursor-text sm:text-base lg:text-sm xl:text-base">
                {props.caption || "Coming soon"}
              </button>
            )}

            <h1 className="mb-4 text-2xl font-medium text-gray-900 sm:text-4xl title-font">
              {props.title || "Master Cleanse Reliac Heirloom"}
            </h1>
            <ReactMarkdown
              children={description}
              rehypePlugins={[rehypeRaw]}
              remarkPlugins={[remarkGfm]}
              className="mt-3 text-lg text-gray-500"
            />
          </div>
          <div className="flex flex-wrap -m-1 md:-m-2">
            <div className="flex flex-wrap gap-3 sm:w-1/2">
              <div className="p-1 md:p-2">
                <img
                  alt={props.imgSmallOneAlt || "sang le tech"}
                  className="block w-full h-full rounded objec t-center ob-lgject-cover"
                  src={props.imgSmallOneSrc || "https://dummyimage.com/500x300"}
                />
              </div>
              <div className="p-1 md:p-2">
                <img
                  alt={props.imgSmallTwoAlt || "sang le tech"}
                  className="block w-full h-full rounded objec t-center ob-lgject-cover"
                  src={props.imgSmallTwoSrc || "https://dummyimage.com/501x301"}
                />
              </div>
              <div className="p-1 sm:w-full md:p-2">
                <img
                  alt={props.imgLargeOneAlt || "sang le tech"}
                  className="block w-full h-full rounded objec t-center ob-lgject-cover"
                  src={props.imgLargeOneSrc || "https://dummyimage.com/601x361"}
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-3 sm:w-1/2">
              <div className="p-1 sm:w-full md:p-2">
                <img
                  alt={props.imgLargeTwoAlt || "sang le tech"}
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={props.imgLargeTwoSrc || "https://dummyimage.com/601x361"}
                />
              </div>
              <div className="p-1 md:p-2">
                <img
                  alt={props.imgSmallThreeAlt || "sang le tech"}
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={
                    props.imgSmallThreeSrc || "https://dummyimage.com/502x302"
                  }
                />
              </div>
              <div className="p-1 md:p-2">
                <img
                  alt={props.imgSmallFourAlt || "sang le tech"}
                  className="block object-cover object-center w-full h-full rounded-lg"
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
