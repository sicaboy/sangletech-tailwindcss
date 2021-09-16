/* This example requires Tailwind CSS v2.0+ */

interface Props {
  title: string;

  logoOneName: {};
  logoOneSrc: string;
  logoOneAlt: string;

  logoTwoName: {};
  logoTwoSrc: string;
  logoTwoAlt: string;

  logoThreeName: {};
  logoThreeSrc: string;
  logoThreeAlt: string;
}

export default function Example(props: Props) {
  return (
    <div className="bg-indigo-200 bg-opacity-25">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <h2 className="max-w-md mx-auto text-3xl font-extrabold text-center text-indigo-900 lg:max-w-xl lg:text-left">
            {props.title ||
              "The world's most innovative companies use Workflow"}
          </h2>
          <div className="self-center flow-root mt-8 lg:mt-0">
            <div className="flex flex-wrap justify-between -mt-4 -ml-8 lg:-ml-4">
              <div className="flex justify-center flex-grow flex-shrink-0 mt-4 ml-8 lg:flex-grow-0 lg:ml-4">
                <img
                  className="h-12"
                  src={
                    props.logoOneSrc ||
                    "https://tailwindui.com/img/logos/workcation-logo-indigo-900.svg"
                  }
                  alt={props.logoOneAlt || "galatek"}
                />
              </div>
              <div className="flex justify-center flex-grow flex-shrink-0 mt-4 ml-8 lg:flex-grow-0 lg:ml-4">
                <img
                  className="h-12"
                  src={
                    props.logoTwoSrc ||
                    "https://tailwindui.com/img/logos/tuple-logo-indigo-900.svg"
                  }
                  alt={props.logoTwoAlt || "CafeS"}
                />
              </div>
              <div className="flex justify-center flex-grow flex-shrink-0 mt-4 ml-8 lg:flex-grow-0 lg:ml-4">
                <img
                  className="h-12"
                  src={
                    props.logoThreeSrc ||
                    "https://tailwindui.com/img/logos/level-logo-indigo-900.svg"
                  }
                  alt={props.logoThreeAlt || "SPMET"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
