/* This example requires Tailwind CSS v2.0+ */
export default function Example(props) {
  const logos = [
    {
      id: 1,
      src:
        props.logoOneSrc ||
        "https://tailwindui.com/img/logos/tuple-logo-indigo-300.svg",
      alt: props.logoOneAlt || "sang le tech",
    },
    {
      id: 1,
      src:
        props.logoTwoSrc ||
        "https://tailwindui.com/img/logos/tuple-logo-indigo-300.svg",
      alt: props.logoTwoAlt || "sang le tech",
    },
    {
      id: 1,
      src:
        props.logoThreeSrc ||
        "https://tailwindui.com/img/logos/tuple-logo-indigo-300.svg",
      alt: props.logoThreeAlt || "sang le tech",
    },
    {
      id: 1,
      src:
        props.logoFourSrc ||
        "https://tailwindui.com/img/logos/tuple-logo-indigo-300.svg",
      alt: props.logoFourAlt || "sang le tech",
    },
    {
      id: 1,
      src:
        props.logoFiveSrc ||
        "https://tailwindui.com/img/logos/tuple-logo-indigo-300.svg",
      alt: props.logoFiveAlt || "sang le tech",
    },
    {
      id: 1,
      src:
        props.logoSixSrc ||
        "https://tailwindui.com/img/logos/tuple-logo-indigo-300.svg",
      alt: props.logoSixAlt || "sang le tech",
    },
    {
      id: 1,
      src:
        props.logoSevenSrc ||
        "https://tailwindui.com/img/logos/tuple-logo-indigo-300.svg",
      alt: props.logoSevenAlt || "sang le tech",
    },
  ];

  return (
    <div className="sm:max-w-[1100px] mx-auto  sm:rounded-lg ">
      <div className="px-3 py-16 mx-8 max-w-8xl sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold text-center text-indigo-600 sm:text-2xl">
          {props.title || "The world's most innovative companies use Workflow"}
        </h2>
        <div className="flex flex-wrap justify-center w-full mx-0 mt-4 space-x-4 lg:-ml-4">
          {logos.map((item) => (
            <div className="flow-root mt-10 lg:mt-10">
              <div className="flex flex-wrap justify-between -mt-4 -ml-8 align lg:-ml-4">
                <div className="flex flex-wrap justify-between flex-grow flex-shrink-0 mt-4 ml-8 lg:flex-grow-0 lg:ml-4">
                  <img
                    className="h-12"
                    src={
                      item.src ||
                      "https://tailwindui.com/img/logos/tuple-logo-indigo-300.svg"
                    }
                    alt={item.alt || "Sang Le Tech tren tv va saigonfm"}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
