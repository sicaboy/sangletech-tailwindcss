import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

function GalleryTwo(props) {
  const images = [
    {
      id: 1,
      src: props.imgOneSrc || "https://dummyimage.com/600x360",
      alt: props.imgOneAlt || "sang le tech",
    },
    {
      id: 2,
      src: props.imgTwoSrc || "https://dummyimage.com/600x360",
      alt: props.imgTwoAlt || "sang le tech",
    },
    {
      id: 3,
      src: props.imgThreeSrc || "https://dummyimage.com/600x360",
      alt: props.imgThreeAlt || "sang le tech",
    },
    {
      id: 4,
      src: props.imgFourSrc || "https://dummyimage.com/600x360",
      alt: props.imgFourAlt || "sang le tech",
    },
    {
      id: 5,
      src: props.imgFiveSrc || "https://dummyimage.com/600x360",
      alt: props.imgFiveAlt || "sang le tech",
    },
    {
      id: 6,
      src: props.imgSixSrc || "https://dummyimage.com/600x360",
      alt: props.imgSixAlt || "sang le tech",
    },

    {
      id: 7,
      src: props.imgSevenSrc || "https://dummyimage.com/600x360",
      alt: props.imgSevenAlt || "sang le tech",
    },
    {
      id: 8,
      src: props.imgEightSrc || "https://dummyimage.com/600x360",
      alt: props.imgEightAlt || "sang le tech",
    },
    {
      id: 9,
      src: props.imgNineSrc || "https://dummyimage.com/600x360",
      alt: props.imgNineAlt || "sang le tech",
    },
  ];

  const description = props.description
    ? `<div class="note">

${props.description}

</div>`
    : `<div class="note">

"Semper curabitur ullamcorper posuere nunc sed. Ornare iaculisbibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus viverra dui tellus ornare pharetra."

</div>`;

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
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
          <div className="flex flex-wrap -m-4 shadow-lg">
            {images.map((item) => (
              <div className="p-4 lg:w-1/3 sm:w-1/2">
                <div className="relative flex " key={item.id}>
                  <img
                    alt={item.alt}
                    className="inset-0 object-cover object-center w-full h-full rounded-lg "
                    src={item.src}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default GalleryTwo;
