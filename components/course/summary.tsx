/* This example requires Tailwind CSS v2.0+ */
import { CheckCircleIcon } from "@heroicons/react/outline";

export default function Summary({ features, heading }) {
  return (
    <div className="bg-white">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:py-24 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <button className="block px-3 py-1 mx-auto mb-3 text-sm font-semibold tracking-wide text-white uppercase bg-indigo-600 rounded-full cursor-text sm:text-base lg:text-sm xl:text-base">
            {heading.caption || "Coming soon"}
          </button>
          <h2 className="text-3xl font-extrabold text-gray-900">
            {heading.title || "All-in-one platform"}
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            {heading.description ||
              "Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec."}
          </p>
        </div>
        <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
          {features.map((feature) => (
            <div key={feature.name} className="relative">
              <dt>
                <CheckCircleIcon
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
  );
}
