import React from "react";

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

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col w-full mb-20 text-center">
            <h1 className="mb-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font">
              Master Cleanse Reliac Heirloom
            </h1>
            <p className="mx-auto text-base leading-relaxed lg:w-2/3">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {images.map((item) => (
              <div className="p-4 lg:w-1/3 sm:w-1/2">
                <div className="relative flex " key={item.id}>
                  <img
                    alt={item.alt}
                    className="inset-0 object-cover object-center w-full h-full "
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
