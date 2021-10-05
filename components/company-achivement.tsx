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
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base font-semibold tracking-wide text-indigo-600 uppercase">
              {props.caption || "Transactions"}
            </h2>
            <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              {props.title || "A better way to send money"}
            </p>
            <p className="max-w-2xl mt-4 text-xl text-gray-500 lg:mx-auto">
              {props.description ||
                "Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam."}
            </p>
          </div>
        </div>
        <div className="h-16" />
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
              src={
                props.imgOneSrc ||
                "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              }
              alt="sang le tech team"
            />
            <img
              className="object-cover w-full h-48 rounded shadow-lg"
              src={
                props.imgTwoSrc ||
                "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              }
              alt="sang le tech team"
            />
            <img
              className="object-cover w-full h-48 rounded shadow-lg"
              src={
                props.imgThreeSrc ||
                "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              }
              alt="sang le tech team"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyAchivement;
