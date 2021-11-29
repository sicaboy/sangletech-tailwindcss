/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from "@heroicons/react/outline";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

export default function OpenPositions(props) {
  const description = props.description
    ? `<div className="note">

  ${props.description}
  
  </div>`
    : `<div className="note">

"Semper curabitur ullamcorper posuere nunc sed. Ornare iaculisbibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus viverra dui tellus ornare pharetra."

</div>`;

  const features = [
    {
      name: props.listOneTitle || "Invite team members",
      description:
        props.listOneDescription
      ,
    },
    {
      name: props.listTwoTitle || "List view",
      description:
        props.listTwoDescription,
    },
    {
      name: props.listThreeTitle || "Keyboard shortcuts",
      description:
        props.listThreeDescription,
    },
    {
      name: props.listFourTitle || "Calendars",
      description:
        props.listFourDescription,
    },
    {
      name: props.listFiveTitle || "Notifications",
      description:
        props.listFiveDescription,
    },
    {
      name: props.listSixTitle || "Boards",
      description:
        props.listSixDescription,
    },
    {
      name: props.listSevenTitle || "Reporting",
      description:
        props.listSevenDescription
    },
    {
      name: props.listEightTitle || "Mobile app",
      description:
        props.listEightDescription,
    },
    {
      name: props.listNineTitle || "Mobile app",
      description:
        props.listNineDescription,
    },
    {
      name: props.listTenTitle || "Mobile app",
      description:
        props.listTenDescription,
    },
    {
      name: props.listElevenTitle || "Mobile app",
      description:
        props.listElevenDescription,
    },
    {
      name: props.listTwelveTitle || "Mobile app",
      description:
        props.listTwelveDescription,
    },
    {
      name: props.listThirteenTitle,
      description: props.listThirteenDescription,
    },
    {
      name: props.listFourteenTitle,
      description: props.listFourteenDescription,
    },
    {
      name: props.listFifteenTitle,
      description: props.listFifteenDescription,
    },
    {
      name: props.listSixteenTitle,
      description: props.listSixteenDescription,
    },
    {
      name: props.listSeventeenTitle,
      description: props.listSeventeenDescription,
    },
    {
      name: props.listEighteenTitle,
      description: props.listEighteenDescription,
    },
  ];
  return (
    <div className="bg-white">
      <div className="px-5 py-24 mx-auto ">
        <div>
          <div className="flex flex-col flex-wrap items-center w-full mb-20 text-center">
            <h2 className="text-base font-semibold tracking-wide text-indigo-600 uppercase">
              {props.caption || "Everything you need"}
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900">
              {props.title || " All-in-one platform"}
            </p>

            {props.description && (
              <ReactMarkdown
                children={description}
                rehypePlugins={[rehypeRaw]}
                remarkPlugins={[remarkGfm]}
                className="container w-full mt-8 text-lg leading-relaxed text-gray-500 lg:w-2/3"
              />
            )}
          </div>
        </div>
        <div className="mt-16 lg:mt-0 lg:col-span-2">
          <dl className="flex flex-wrap m-4">
            {features.map((item) => (
              <div className="p-4 sm:w-1/3" key={item.name}>
                {item.description && (
                  <div className="flex items-center h-full p-6 border border-gray-200 rounded-lg shadow-md ">
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
                      <h1 className="font-bold text-black font-xl">{item.name}</h1>
                      <p className="text-base text-gray-500 ">
                        {item.description}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
