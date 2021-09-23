// import React from "react";
// import { getAllPosts } from "../../utils/api";
// import Post from "../../types/post";

// import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";
// import rehypeRaw from "rehype-raw";

// type Props = {
//   allPosts: Post[];
//   title: string;
//   description: string;
// };

// function Cards(props: Props) {
//   const description = props.description
//     ? `<div class="note">

//     ${props.description}

//     </div>`
//     : `<div class="note">

//   "Cras velit quis eros eget rhoncus lacus ultrices sed diam. Sit orci risus aenean curabitur donec aliquet. Mi venenatis in euismod ut."

//   </div>`;

//   return (
//     <div className="relative px-4 pt-16 pb-20 bg-gray-50 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
//       <div className="absolute inset-0">
//         <div className="bg-white h-1/3 sm:h-2/3" />
//       </div>
//       <div className="relative mx-auto max-w-7xl">
//         <div className="text-center">
//           <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
//             "From the blog"
//           </h2>

//           <ReactMarkdown
//             children={description}
//             rehypePlugins={[rehypeRaw]}
//             remarkPlugins={[remarkGfm]}
//             className="max-w-2xl mx-auto mt-3 text-xl text-gray-500 sm:mt-4"
//           />
//         </div>
//         <div className="grid max-w-lg gap-5 mx-auto mt-12 lg:grid-cols-3 lg:max-w-none">
//           {props.allPosts.map((post) => (
//             <div
//               key={post.title}
//               className="flex flex-col overflow-hidden rounded-lg shadow-lg"
//             >
//               <div className="flex-shrink-0">
//                 <img
//                   className="object-cover w-full h-48"
//                   src={post.coverImage}
//                   alt=""
//                 />
//               </div>
//               <div className="flex flex-col justify-between flex-1 p-6 bg-white">
//                 <div className="flex-1">
//                   <p className="text-sm font-medium text-indigo-600">
//                     {/* <a href={post.category.href} className="hover:underline">
//                       {post.category.name}
//                     </a> */}
//                   </p>
//                   <a href={post.slug} className="block mt-2">
//                     <p className="text-xl font-semibold text-gray-900">
//                       {post.title}
//                     </p>

//                     <ReactMarkdown
//                       children={post.excerpt}
//                       rehypePlugins={[rehypeRaw]}
//                       remarkPlugins={[remarkGfm]}
//                       className="mt-3 text-base text-gray-500"
//                     />
//                   </a>
//                 </div>
//                 <div className="flex items-center mt-6">
//                   <div className="flex-shrink-0">
//                     <a href="#">
//                       <span className="sr-only">{post.author.name}</span>
//                       <img
//                         className="object-cover w-10 h-10 rounded-full"
//                         src={post.ogImage}
//                         alt=""
//                       />
//                     </a>
//                   </div>
//                   <div className="ml-3">
//                     <p className="text-sm font-medium text-gray-900">
//                       <a href="#" className="hover:underline">
//                         {post.author}
//                       </a>
//                     </p>
//                     <div className="flex space-x-1 text-sm text-gray-500">
//                       <time dateTime={post.date}>{post.date}</time>
//                       {/* <span aria-hidden="true">&middot;</span> */}
//                       <span> read</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="pt-32 text-center">
//           <a
//             href="/blog"
//             className="inline-flex items-center px-5 py-3 bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-6 h-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="white"
//             >
//               <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 stroke-width="2"
//                 d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
//               />
//             </svg>
//             <span className="flex flex-col items-start ml-4 leading-none">
//               <span className="font-medium text-white title-font">
//                 "Tìm Hiểu Thêm"
//               </span>
//             </span>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Cards;
