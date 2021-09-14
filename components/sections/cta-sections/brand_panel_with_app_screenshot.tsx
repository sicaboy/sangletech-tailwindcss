/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/

interface Props {
  titleFirst?: string;
  titleSecond?: string;
  description?: string;
  buttonName?: string;
  imgSrc?: string;
  alt?: string;
}

export default function BrandPanelWithAppScreenShot(props: Props) {
  return (
    <div className="bg-white">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="overflow-hidden bg-indigo-700 rounded-lg shadow-xl lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="px-6 pt-10 pb-12 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                <span className="block">
                  {props.titleFirst || "Ready to dive in?"}
                </span>
                <span className="block">
                  {props.titleSecond || "Start your free trial today."}
                </span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-indigo-200">
                {props.description ||
                  "Ac euismod vel sit maecenas id pellentesque eu sed consectetur.Malesuada adipiscing sagittis vel nulla nec."}
              </p>
              <a
                href="#"
                className="inline-flex items-center px-5 py-3 mt-8 text-base font-medium text-indigo-600 bg-white border border-transparent rounded-md shadow hover:bg-indigo-50"
              >
                {props.buttonName || " Sign up for free"}
              </a>
            </div>
          </div>
          <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
            <img
              className="object-cover object-left-top transform translate-x-6 translate-y-6 rounded-md sm:translate-x-16 lg:translate-y-20"
              src={
                props.imgSrc ||
                "https://tailwindui.com/img/component-images/full-width-with-sidebar.jpg"
              }
              alt={props.alt || "App screenshot"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
