/* This example requires Tailwind CSS v2.0+ */
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  MailIcon,
  ScaleIcon,
} from "@heroicons/react/outline";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import ButtonAppsGroup from "../../button-apps-group";
import Button from "../../button";

import Link from "next/link";

// interface Props {
//   mainTitle?: string;
//   mainDescription?: string;
//   leftIconOne?: {};
//   leftIconOneTitle?: string;
//   leftIconOneDescription?: string;
//   leftIconTwo?: {};
//   leftIconTwoTitle?: string;
//   leftIconTwoDescription?: string;
//   leftIconThree?: {};
//   leftIconThreeTitle?: string;
//   leftIconThreeDescription?: string;
//   leftTitle?: string;
//   leftDescription?: string;
//   leftButtonName?: string;
//   leftButtonSrc?: string;
//   leftAppleSrc?: string;
//   leftGoogleSrc?: string;
//   leftWebSrc?: string;
//   leftTestimonial?: string;
//   leftAuthor?: string;
//   leftImgSrc?: string;
//   leftAlt?: string;
//   leftAuthorImgSrc?: string;
//   rightIconOne?: string;
//   rightIconOneTitle?: string;
//   rightIconOneDescription?: string;
//   rightIconTwo?: string;
//   rightIconTwoTitle?: string;
//   rightIconTwoDescription?: string;
//   rightIconThree?: string;
//   rightIconThreeTitle?: string;
//   rightIconThreeDescription?: string;
//   rightTitle?: string;
//   rightDescription?: string;
//   rightButtonName?: string;
//   rightButtonSrc?: string;
//   rightAppleSrc?: string;
//   rightGoogleSrc?: string;
//   rightWebSrc?: string;
//   rightImgSrc?: string;
//   rightAlt?: string;
// }

export default function AlternativeSideBySideWithImages(props) {
  const leftIconOneDescription = props.leftIconOneDescription
    ? `<div class="note">

  ${props.leftIconOneDescription}
  
  </div>`
    : `<div class="note">

"Semper curabitur ullamcorper posuere nunc sed. Ornare iaculisbibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus viverra dui tellus ornare pharetra."

</div>`;
  const leftIconTwoDescription = props.leftIconTwoDescription
    ? `<div class="note">

${props.leftIconTwoDescription}

</div>`
    : `<div class="note">

"Semper curabitur ullamcorper posuere nunc sed. Ornare iaculisbibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus viverra dui tellus ornare pharetra."

</div>`;
  const leftIconThreeDescription = props.leftIconThreeDescription
    ? `<div class="note">

${props.leftIconThreeDescription}

</div>`
    : `<div class="note">

"Semper curabitur ullamcorper posuere nunc sed. Ornare iaculisbibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus viverra dui tellus ornare pharetra."

</div>`;

  const rightIconOneDescription = props.rightIconOneDescription
    ? `<div class="note">

${props.rightIconOneDescription}

</div>`
    : `<div class="note">

"Semper curabitur ullamcorper posuere nunc sed. Ornare iaculisbibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus viverra dui tellus ornare pharetra."

</div>`;
  const rightIconTwoDescription = props.rightIconTwoDescription
    ? `<div class="note">

${props.rightIconTwoDescription}

</div>`
    : `<div class="note">

"Semper curabitur ullamcorper posuere nunc sed. Ornare iaculisbibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus viverra dui tellus ornare pharetra."

</div>`;
  const rightIconThreeDescription = props.rightIconThreeDescription
    ? `<div class="note">

${props.rightIconThreeDescription}

</div>`
    : `<div class="note">

"Semper curabitur ullamcorper posuere nunc sed. Ornare iaculisbibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus viverra dui tellus ornare pharetra."

</div>`;

  const rightDescription = props.rightDescription
    ? `<div class="note">

${props.rightDescription}

</div>`
    : `<div class="note">

"Semper curabitur ullamcorper posuere nunc sed. Ornare iaculisbibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus viverra dui tellus ornare pharetra."

</div>`;

  const leftDescription = props.leftDescription
    ? `<div class="note">

${props.leftDescription}

</div>`
    : `<div class="note">

"Semper curabitur ullamcorper posuere nunc sed. Ornare iaculisbibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus viverra dui tellus ornare pharetra."

</div>`;

  const mainDescription = props.mainDescription
    ? `<div class="note">

${props.mainDescription}

</div>`
    : `<div class="note">

"Semper curabitur ullamcorper posuere nunc sed. Ornare iaculisbibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus viverra dui tellus ornare pharetra."

</div>`;

  const leftFeatures = [
    {
      id: 1,
      name: `${props.leftIconOneTitle || "Title"}`,
      description: leftIconOneDescription,
      icon: props.leftIconOne || GlobeAltIcon,
    },
    {
      id: 2,
      name: `${props.leftIconTwoTitle || "Title"}`,
      description: leftIconTwoDescription,
      icon: props.leftIconTwo || ScaleIcon,
    },
    {
      id: 3,
      name: `${props.leftIconThreeTitle || "Title"}`,
      description: leftIconThreeDescription,
      icon: props.leftIconThree || LightningBoltIcon,
    },
  ];
  const rightFeatures = [
    {
      id: 1,
      name: `${props.rightIconOneTitle || "Title"}`,
      description: rightIconOneDescription,
      icon: props.rightIconOne || GlobeAltIcon,
    },
    {
      id: 2,
      name: `${props.rightIconTwoTitle || "Title"}`,
      description: rightIconTwoDescription,
      icon: props.rightIconTwo || ScaleIcon,
    },
    {
      id: 3,
      name: `${props.rightIconThreeTitle || "Title"}`,
      description: rightIconThreeDescription,
      icon: props.rightIconThree || LightningBoltIcon,
    },
  ];

  return (
    <div className="py-16 overflow-hidden bg-gray-50 lg:py-24">
      <div className="relative max-w-xl px-4 mx-auto sm:px-6 lg:px-8 lg:max-w-7xl">
        <svg
          className="absolute hidden transform -translate-x-1/2 lg:block left-full -translate-y-1/4"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={784}
            fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
          />
        </svg>

        <div className="relative mt-12 lg:mt-8 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              {props.leftTitle || "Transfer funds world-wide"}
            </h2>
            <ReactMarkdown
              children={leftDescription}
              rehypePlugins={[rehypeRaw]}
              remarkPlugins={[remarkGfm]}
              className="mt-3 text-lg text-gray-500"
            />

            <dl className="mt-10 space-y-10">
              {leftFeatures.map((item) => (
                <div key={item.id} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                      <item.icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                      {item.name}
                    </p>
                  </dt>

                  <dd>
                    <ReactMarkdown
                      children={item.description}
                      rehypePlugins={[rehypeRaw]}
                      remarkPlugins={[remarkGfm]}
                      className="mt-2 ml-16 text-base text-gray-500"
                    />
                  </dd>
                </div>
              ))}
            </dl>
            <div className="h-16" />
            <Button url={props.leftButtonSrc} name={props.leftButtonName} />
            <ButtonAppsGroup
              AppleSrc={props.leftAppleSrc}
              GoogleSrc={props.leftGoogleSrc}
              WebSrc={props.leftWebSrc}
            />
          </div>

          <div className="relative mt-10 -mx-4 lg:mt-0" aria-hidden="true">
            <svg
              className="absolute transform -translate-x-1/2 translate-y-16 left-1/2 lg:hidden"
              width={784}
              height={404}
              fill="none"
              viewBox="0 0 784 404"
            >
              <defs>
                <pattern
                  id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={784}
                height={404}
                fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
              />
            </svg>
            <img
              className="relative mx-auto rounded-lg ring-1"
              width={490}
              src={
                props.leftImgSrc ||
                "https://tailwindui.com/img/features/feature-example-1.png"
              }
              alt={props.leftAlt || "sangletech"}
            />
          </div>
        </div>

        <svg
          className="absolute hidden transform translate-x-1/2 translate-y-12 lg:block right-full"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={784}
            fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
          />
        </svg>

        <div className="relative mt-12 sm:mt-16 lg:mt-24">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="lg:col-start-2">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                {props.rightTitle || "Always in the loop"}
              </h2>

              <ReactMarkdown
                children={rightDescription}
                rehypePlugins={[rehypeRaw]}
                remarkPlugins={[remarkGfm]}
                className="mt-3 text-lg text-gray-500"
              />

              <dl className="mt-10 space-y-10">
                {rightFeatures.map((item) => (
                  <div key={item.id} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                        <item.icon className="w-6 h-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                        {item.name}
                      </p>
                    </dt>
                    <dd>
                      <ReactMarkdown
                        children={item.description}
                        rehypePlugins={[rehypeRaw]}
                        remarkPlugins={[remarkGfm]}
                        className="mt-2 ml-16 text-base text-gray-500"
                      />
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="h-16" />
              <Button url={props.rightButtonSrc} name={props.rightButtonName} />
              <ButtonAppsGroup
                AppleSrc={props.rightAppleSrc}
                GoogleSrc={props.rightGoogleSrc}
                WebSrc={props.rightWebSrc}
              />
            </div>

            <div className="relative mt-10 -mx-4 lg:mt-0 lg:col-start-1">
              <svg
                className="absolute transform -translate-x-1/2 translate-y-16 left-1/2 lg:hidden"
                width={784}
                height={404}
                fill="none"
                viewBox="0 0 784 404"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="e80155a9-dfde-425a-b5ea-1f6fadd20131"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={784}
                  height={404}
                  fill="url(#e80155a9-dfde-425a-b5ea-1f6fadd20131)"
                />
              </svg>
              <img
                className="relative mx-auto rounded-lg"
                width={490}
                src={
                  props.rightImgSrc ||
                  "https://tailwindui.com/img/features/feature-example-2.png"
                }
                alt={props.rightAlt || "sangletech"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
