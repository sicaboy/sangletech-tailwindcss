import React from "react";

function CompanyAchivement(props) {
  const achivements = [
    {
      id: 1,
      iconSrc: props.listOneIconSrc || "",
      title: props.listOneTitle || "",
      description:
        props.listOneDescription ||
        "Skate ipsum dolor sit amet, alley oop vert mute-air Colby Carter flail 180 berm. Half-cab camel back ollie transition ledge Wes Humpston 1080.",
    },
    {
      id: 2,
      iconSrc: props.listTwoIconSrc || "",
      title: props.listTwoTitle || "",
      description:
        props.listTwoDescription ||
        "Skate ipsum dolor sit amet, alley oop vert mute-air Colby Carter flail 180 berm. Half-cab camel back ollie transition ledge Wes Humpston 1080.",
    },
    {
      id: 3,
      iconSrc: props.listThreeIconSrc || "",
      title: props.listThreeTitle || "",
      description:
        props.listThreeDescription ||
        "Skate ipsum dolor sit amet, alley oop vert mute-air Colby Carter flail 180 berm. Half-cab camel back ollie transition ledge Wes Humpston 1080.",
    },
  ];

  return (
    <div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="text-base font-semibold tracking-wide text-indigo-600 uppercase">
          <div>
            <p className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
              Brand new
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="3071a3ad-db4a-4cbe-ac9a-47850b69e4b7"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#3071a3ad-db4a-4cbe-ac9a-47850b69e4b7)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative"></span>
            </span>{" "}
            {props.title || "quick, brown fox jumps over a lazy dog"}
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            {props.description ||
              " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae."}
          </p>
        </div>
        <div className="flex flex-col-reverse gap-8 sm:grid sm:max-w-screen-lg lg:grid-cols-2 sm:mx-auto">
          <div className="flex flex-col justify-center mt-8">
            {achivements.map((item) => (
              <div className="w-full p-2 sm:w-full" key={item.id}>
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
                  <div>
                    <h6 className="text-lg font-semibold leading-6 text-gray-900">
                      {item.title || " They urge you to put down"}
                    </h6>
                    <p className="mt-2 text-base text-gray-500">
                      {item.description ||
                        "Skate ipsum dolor sit amet, alley oop vert mute-air Colby Carter flail 180 berm. Half-cab camel back ollie transition ledge Wes Humpston 1080."}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-5">
            <img
              className="object-cover w-full h-56 col-span-2 rounded shadow-lg"
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
            <img
              className="object-cover w-full h-48 rounded shadow-lg"
              src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
            <img
              className="object-cover w-full h-48 rounded shadow-lg"
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyAchivement;
