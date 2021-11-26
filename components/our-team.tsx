import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

function OurTeam(props) {
  const description = props.description
    ? `<div class="note">

${props.description}

</div>`
    : `<div class="note">

"Semper curabitur ullamcorper posuere nunc sed. Ornare iaculisbibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus viverra dui tellus ornare pharetra."

</div>`;

  const members = [
    {
      id: 1,
      imgSrc:
        props.personOneImgSrc ||
        "https://dummyimage.com/600x400/000/e0e0e0.jpg",
      alt: props.personOneImgAlt || "sang le",
      name: props.personOneName || "",
      position: props.personOnePosition || "",
      description: props.personOneDescription || "",
    },
    {
      id: 2,
      imgSrc:
        props.personTwoImgSrc ||
        "https://dummyimage.com/600x400/000/e0e0e0.jpg",
      alt: props.personTwoImgAlt || "sang le",
      name: props.personTwoName || "",
      position: props.personTwoPosition || "",
      description: props.personTwoDescription || "",
    },
    {
      id: 3,
      imgSrc:
        props.personThreeImgSrc ||
        "https://dummyimage.com/600x400/000/e0e0e0.jpg",
      alt: props.personThreeImgAlt || "sang le",
      name: props.personThreeName || "",
      position: props.personThreePosition || "",
      description: props.personThreeDescription || "",
    },
    {
      id: 4,
      imgSrc:
        props.personFourImgSrc ||
        "https://dummyimage.com/600x400/000/e0e0e0.jpg",
      alt: props.personFourImgAlt || "sang le",
      name: props.personFourName || "",
      position: props.personFourPosition || "",
      description: props.personFourDescription || "",
    },
    {
      id: 5,
      imgSrc:
        props.personFiveImgSrc ||
        "https://dummyimage.com/600x400/000/e0e0e0.jpg",
      alt: props.personFiveImgAlt || "sang le",
      name: props.personFiveName || "",
      position: props.personFivePosition || "",
      description: props.personFiveDescription || "",
    },
    {
      id: 6,
      imgSrc:
        props.personSixImgSrc ||
        "https://dummyimage.com/600x400/000/e0e0e0.jpg",
      alt: props.personSixImgAlt || `sangletech`,
      name: props.personSixName || "",
      position: props.personSixPosition || "",
      description: props.personSixDescription || "",
    },
  ];

  return (
    <div className="p-4">
      <p className="text-3xl font-bold text-center text-gray-800">
        {props.title || "Professional team"}
      </p>

      <ReactMarkdown
        children={description}
        rehypePlugins={[rehypeRaw]}
        remarkPlugins={[remarkGfm]}
        className="mb-32 text-xl font-normal text-center text-gray-500"
      />
      <div className="flex flex-wrap justify-center ">
        {members.map((item) => (
          <div className="relative p-4 my-12 sm:w-1/3 ">
            <div className="absolute mb-4 text-center transform translate-x-1/2 -top-16 right-1/2">
              <a href="#" className="relative block">
                <img
                  alt={item.alt || "sang le tech"}
                  src={
                    item.imgSrc ||
                    "https://dummyimage.com/600x400/000/e0e0e0.jpg"
                  }
                  className="object-cover w-40 h-40 mx-auto border-2 border-white rounded-lg dark:border-gray-800"
                />
              </a>
            </div>
            <div className="h-full px-8 py-4 pt-24 bg-white rounded-lg shadow dark:bg-gray-800">
              <div className="text-center">
                <p className="text-2xl text-gray-800 dark:text-white">
                  {item.name || "Patrick Sebastien"}
                </p>
                <p className="text-xl font-light text-gray-500 dark:text-gray-200">
                  {item.position || "Developpeur"}
                </p>

                <ReactMarkdown
                  children={item.description}
                  rehypePlugins={[rehypeRaw]}
                  remarkPlugins={[remarkGfm]}
                  className="py-4 mx-auto font-light text-gray-500 text-md w-60 dark:text-gray-500"
                />
              </div>
              <div className="flex items-center justify-center w-40 pt-8 mx-auto text-gray-500 border-t border-gray-200 ">
                <a href="#">
                  <svg
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
                  </svg>
                </a>

                <a href="#">
                  <svg
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="text-xl transition-colors duration-200 hover:text-gray-800 dark:hover:text-white"
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M477 625v991h-330v-991h330zm21-306q1 73-50.5 122t-135.5 49h-2q-82 0-132-49t-50-122q0-74 51.5-122.5t134.5-48.5 133 48.5 51 122.5zm1166 729v568h-329v-530q0-105-40.5-164.5t-126.5-59.5q-63 0-105.5 34.5t-63.5 85.5q-11 30-11 81v553h-329q2-399 2-647t-1-296l-1-48h329v144h-2q20-32 41-56t56.5-52 87-43.5 114.5-15.5q171 0 275 113.5t104 332.5z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurTeam;
