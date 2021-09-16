/* This example requires Tailwind CSS v2.0+ */

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import {
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
  YoutubeFilled,
} from "@ant-design/icons";

interface Props {
  titleMain?: string;
  titleSecondary?: string;
  description?: string;

  buttonFacebookLink?: string;
  buttonYoutubeLink?: string;
  buttonLinkedinLink?: string;
  buttonInstagramLink?: string;
}

export default function Example(props: Props) {
  const description = props.description
    ? `<div class="note">

  ${props.description}
  
  </div>`
    : `<div class="note">

"Semper curabitur ullamcorper posuere nunc sed. Ornare iaculisbibendum malesuada faucibus lacinia porttitor. Pulvinar laoreet sagittis viverra duis. In venenatis sem arcu pretium pharetra at. Lectus viverra dui tellus ornare pharetra."

</div>`;

  return (
    <div className="max-w-5xl mx-auto bg-indigo-700 rounded-3xl">
      <div className="max-w-3xl px-4 py-16 mx-auto text-center sm:py-20 sm:px-6 lg:px-8 ">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">{props.titleMain || "Kết Nối"}</span>
          <span className="block">
            {props.titleSecondary || "Start using Workflow today."}
          </span>
        </h2>

        <ReactMarkdown
          children={description}
          rehypePlugins={[rehypeRaw]}
          remarkPlugins={[remarkGfm]}
          className="mt-4 text-lg leading-6 text-indigo-200"
        />

        {/* Buttons  */}
        <div className="flex-wrap items-center justify-center flex-1 flex-grow-0 flex-shrink-0 pt-16 space-x-4 space-y-4">
          <button className="inline-flex items-center px-5 py-3 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none">
            <FacebookFilled style={{ fontSize: 24 }} />
            <span className="flex flex-col items-start ml-4 leading-none">
              <span className="mb-1 text-xs text-gray-600">Kết nối</span>
              <span className="font-medium title-font">Facebook</span>
            </span>
          </button>
          <button className="inline-flex items-center px-5 py-3 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none">
            <InstagramFilled style={{ fontSize: 24 }} />
            <span className="flex flex-col items-start ml-4 leading-none">
              <span className="mb-1 text-xs text-gray-600">Kết nối</span>
              <span className="font-medium title-font">Instagram</span>
            </span>
          </button>
          <button className="inline-flex items-center px-5 py-3 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none">
            <LinkedinFilled style={{ fontSize: 24 }} />
            <span className="flex flex-col items-start ml-4 leading-none">
              <span className="mb-1 text-xs text-gray-600">Kết nối</span>
              <span className="font-medium title-font">LinkedIn</span>
            </span>
          </button>
          <button className="inline-flex items-center px-5 py-3 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none">
            <YoutubeFilled style={{ fontSize: 24 }} />
            <span className="flex flex-col items-start ml-4 leading-none">
              <span className="mb-1 text-xs text-gray-600">Đăng Ký</span>
              <span className="font-medium title-font">Youtube</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
