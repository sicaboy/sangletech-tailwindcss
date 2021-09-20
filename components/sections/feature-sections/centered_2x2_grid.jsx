/* This example requires Tailwind CSS v2.0+ */
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";

export default function Example(props) {
  const features = [
    {
      name: props.listOneTitle || "Competitive exchange rates",
      description:
        props.listOneDescription ||
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
      icon: props.listOneIconSrc || GlobeAltIcon,
    },
    {
      name: props.listTwoTitle || "No hidden fees",
      description:
        props.listTwoDescription ||
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratiTwo.",
      icon: props.listOneIconSrc || ScaleIcon,
    },
    {
      name: props.listThreeTitle || "Transfers are instant",
      description:
        props.listThreeDescription ||
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratiThree.",
      icon: props.listThreeIconSrc || LightningBoltIcon,
    },
    {
      name: props.listFourTitle || "Mobile notifications",
      description:
        props.listFourDescription ||
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratiFour.",
      icon: props.listFourIconSrc || AnnotationIcon,
    },
    {
      name: props.listFiveTitle || "Mobile notifications",
      description:
        props.listFiveDescription ||
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratiFive.",
      icon: props.listFiveIconSrc || AnnotationIcon,
    },
    {
      name: props.listSixTitle || "Mobile notifications",
      description:
        props.listSixDescription ||
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratiSix.",
      icon: props.listSixIconSrc || AnnotationIcon,
    },
  ];

  return (
    <div className="py-12 my-24 bg-white">
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

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                    <feature.icon className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                    {feature.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
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
