import markdownStyles from "./markdown-styles.module.css";
import { MDXRemote } from "next-mdx-remote";

type Props = {
  content: string;
  components: {};
};

const PostBody = ({ content, components }) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className={markdownStyles["markdown"]}>
        <MDXRemote {...content} components={components} />
      </div>
    </div>
  );
};

export default PostBody;
