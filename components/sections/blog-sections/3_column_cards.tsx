/* This example requires Tailwind CSS v2.0+ */

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

interface Props {
  title?: string;
  description?: string;
  buttonIconName: {};
  buttonName?: string;
  buttonSrc?: string;

  blogOneThumbnail?: string;
  blogOneLink?: string;
  blogOneCategory?: string;
  blogOneTitle?: string;
  blogOneDescription?: string;
  blogOneAuthorImgSrc?: string;
  blogOneAuthorName?: string;
  blogOneReadingTime?: string;

  blogTwoThumbnail?: string;
  blogTwoLink?: string;
  blogTwoCategory?: string;
  blogTwoTitle?: string;
  blogTwoDescription?: string;
  blogTwoAuthorImgSrc?: string;
  blogTwoAuthorName?: string;
  blogTwoReadingTime?: string;

  blogThreeThumbnail?: string;
  blogThreeLink?: string;
  blogThreeCategory?: string;
  blogThreeTitle?: string;
  blogThreeDescription?: string;
  blogThreeAuthorImgSrc?: string;
  blogThreeAuthorName?: string;
  blogThreeReadingTime?: string;
}

export default function ThreeColumnCards(props: Props) {
  const blogOneDescription = props.blogOneDescription
    ? `<div class="note">

  ${props.blogOneDescription}
  
  </div>`
    : `<div class="note">

"Cras velit quis eros eget rhoncus lacus ultrices sed diam. Sit orci risus aenean curabitur donec aliquet. Mi venenatis in euismod ut."

</div>`;

  const blogTwoDescription = props.blogTwoDescription
    ? `<div class="note">

  ${props.blogTwoDescription}
  
  </div>`
    : `<div class="note">

"Cras velit quis eros eget rhoncus lacus ultrices sed diam. Sit orci risus aenean curabitur donec aliquet. Mi venenatis in euismod ut."

</div>`;

  const blogThreeDescription = props.blogThreeDescription
    ? `<div class="note">

  ${props.blogThreeDescription}
  
  </div>`
    : `<div class="note">

"Cras velit quis eros eget rhoncus lacus ultrices sed diam. Sit orci risus aenean curabitur donec aliquet. Mi venenatis in euismod ut."

</div>`;

  const posts = [
    {
      title: props.blogOneTitle || "Boost your conversion rate",
      href: props.blogOneLink || "",
      category: { name: props.blogOneCategory || "Article", href: "" },
      description: blogOneDescription,
      date: "",
      datetime: "",
      imageUrl:
        props.blogOneThumbnail ||
        "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
      readingTime: props.blogOneReadingTime || "5 min",
      author: {
        name: props.blogOneAuthorName || "Roel Aufderehar",
        href: "",
        imageUrl:
          props.blogOneAuthorImgSrc ||
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      title:
        props.blogTwoTitle ||
        "How to use search engine optimization to drive sales",
      href: props.blogTwoLink || "",
      category: { name: props.blogTwoCategory || "Video", href: "" },
      description: blogTwoDescription,
      date: "",
      datetime: "",
      imageUrl:
        props.blogTwoThumbnail ||
        "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
      readingTime: props.blogTwoReadingTime || "2 mins",
      author: {
        name: props.blogTwoAuthorName || "Brenna Goyette",
        href: "",
        imageUrl:
          props.blogTwoAuthorImgSrc ||
          "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      title: props.blogThreeTitle || "Improve your customer experience",
      href: props.blogThreeLink || "",
      category: { name: props.blogThreeCategory || "Case Study", href: "" },
      description: blogThreeDescription,
      date: "",
      datetime: "",
      imageUrl:
        props.blogThreeThumbnail ||
        "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
      readingTime: props.blogThreeReadingTime || "11 min",
      author: {
        name: props.blogThreeAuthorName || "Daniela Metz",
        href: "",
        imageUrl:
          props.blogThreeAuthorImgSrc ||
          "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
  ];

  const description = props.description
    ? `<div class="note">

  ${props.description}
  
  </div>`
    : `<div class="note">

"Cras velit quis eros eget rhoncus lacus ultrices sed diam. Sit orci risus aenean curabitur donec aliquet. Mi venenatis in euismod ut."

</div>`;

  return (
    <div className="relative px-4 pt-16 pb-20 bg-gray-50 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {props.title || "From the blog"}
          </h2>

          <ReactMarkdown
            children={description}
            rehypePlugins={[rehypeRaw]}
            remarkPlugins={[remarkGfm]}
            className="max-w-2xl mx-auto mt-3 text-xl text-gray-500 sm:mt-4"
          />
        </div>
        <div className="grid max-w-lg gap-5 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
          {posts.map((post) => (
            <div
              key={post.title}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg"
            >
              <div className="flex-shrink-0">
                <img
                  className="object-cover w-full h-48"
                  src={post.imageUrl}
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <a href={post.category.href} className="hover:underline">
                      {post.category.name}
                    </a>
                  </p>
                  <a href={post.href} className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </p>

                    <ReactMarkdown
                      children={post.description}
                      rehypePlugins={[rehypeRaw]}
                      remarkPlugins={[remarkGfm]}
                      className="mt-3 text-base text-gray-500"
                    />
                  </a>
                </div>
                <div className="flex items-center mt-6">
                  <div className="flex-shrink-0">
                    <a href={post.author.href}>
                      <span className="sr-only">{post.author.name}</span>
                      <img
                        className="object-cover w-10 h-10 rounded-full"
                        src={post.author.imageUrl}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a href={post.author.href} className="hover:underline">
                        {post.author.name}
                      </a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={post.datetime}>{post.date}</time>
                      {/* <span aria-hidden="true">&middot;</span> */}
                      <span>{post.readingTime} read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-32 text-center">
          <a
            href={props.buttonSrc || "/"}
            className="inline-flex items-center px-5 py-3 bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="flex flex-col items-start ml-4 leading-none">
              <span className="font-medium text-white title-font">
                {props.buttonName || "Tìm Hiểu Thêm"}
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
