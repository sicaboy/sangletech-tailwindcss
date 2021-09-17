/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from "@heroicons/react/outline";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

export default function Example(props) {
  const description = props.description
    ? `<div class="note">

  ${props.description}
  
  </div>`
    : `<div class="note">

"Semper curabitur ullamcorper posuere nunc sed. Ornare iaculisbibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus viverra dui tellus ornare pharetra."

</div>`;

  const features = [
    {
      name: props.listOneTitle || "Invite team members",
      description:
        props.listOneDescription ||
        "You can manage phone, email and chat conversations all from a single mailbox.",
    },
    {
      name: props.listTwoTitle || "List view",
      description:
        props.listTwoDescription ||
        "You can manage phone, email and chat conversations all from a single mailbox.",
    },
    {
      name: props.listThreeTitle || "Keyboard shortcuts",
      description:
        props.listThreeDescription ||
        "You can manage phone, email and chat conversations all from a single mailbox.",
    },
    {
      name: props.listFourTitle || "Calendars",
      description:
        props.listFourDescription ||
        "You can manage phone, email and chat conversations all from a single mailbox.",
    },
    {
      name: props.listFiveTitle || "Notifications",
      description:
        props.listFiveDescription ||
        "Find what you need with advanced filters, bulk actions, and quick views.",
    },
    {
      name: props.listSixTitle || "Boards",
      description:
        props.listSixDescription ||
        "Find what you need with advanced filters, bulk actions, and quick views.",
    },
    {
      name: props.listSevenTitle || "Reporting",
      description:
        props.listSevenDescription ||
        "Find what you need with advanced filters, bulk actions, and quick views.",
    },
    {
      name: props.listEightTitle || "Mobile app",
      description:
        props.listEightDescription ||
        "Find what you need with advanced filters, bulk actions, and quick views.",
    },
    {
      name: props.listNineTitle || "Mobile app",
      description:
        props.listNineDescription ||
        "Find what you need with advanced filters, bulk actions, and quick views.",
    },
    {
      name: props.listTenTitle || "Mobile app",
      description:
        props.listTenDescription ||
        "Find what you need with advanced filters, bulk actions, and quick views.",
    },
    {
      name: props.listElevenTitle || "Mobile app",
      description:
        props.listElevenDescription ||
        "Find what you need with advanced filters, bulk actions, and quick views.",
    },
    {
      name: props.listTwelveTitle || "Mobile app",
      description:
        props.listTwelveDescription ||
        "Find what you need with advanced filters, bulk actions, and quick views.",
    },
  ];
  return (
    <div className="bg-white">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
        <div>
          <h2 className="text-base font-semibold tracking-wide text-indigo-600 uppercase">
            {props.caption || "Everything you need"}
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900">
            {props.title || " All-in-one platform"}
          </p>

          <ReactMarkdown
            children={description}
            rehypePlugins={[rehypeRaw]}
            remarkPlugins={[remarkGfm]}
            className="mt-4 text-lg text-gray-500"
          />
        </div>
        <div className="mt-12 lg:mt-0 lg:col-span-2">
          <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-6 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <CheckIcon
                    className="absolute w-6 h-6 text-green-500"
                    aria-hidden="true"
                  />
                  <p className="text-lg font-medium leading-6 text-gray-900 ml-9">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 text-base text-gray-500 ml-9">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
