import React from "react";
import Layout from "../components/Layout";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

function SingleVideo(props) {
  const description = props.description
    ? `<div class="note">

${props.description}

</div>`
    : `<div class="note">

  Hey this is a nice youtube video about making **modern** react apps with gatsby: https://www.youtube.com/watch?v=GN0xHSk2P8Q. Check it out 👆"
    
  <iframe 
  width="480" 
  height="270" 
  src="https://www.youtube.com/embed/GN0xHSk2P8Q?feature=oembed" 
  frameborder="0" 
  allow="accelerometer; 
    autoplay; 
    encrypted-media; 
    gyroscope; 
    picture-in-picture" 
  allowfullscreen/>
  
</div>`;

  return (
    <Layout>
      <ReactMarkdown
        children={description}
        rehypePlugins={[rehypeRaw]}
        remarkPlugins={[[remarkGfm]]}
        className="mt-4 text-lg leading-6 text-indigo-200"
      />
    </Layout>
  );
}

export default SingleVideo;
