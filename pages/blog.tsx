import Container from "../components/post/container";
import MoreStories from "../components/post/more-stories";
import HeroPost from "../components/post/hero-post";
import Intro from "../components/post/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../utils/api";
import Head from "next/head";
import Post from "../types/post";

type Props = {
  allPosts: Post[];
};

const Blog = ({ allPosts }: Props) => {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  // console.log(`heroPost: ${JSON.stringify(heroPost)}`);
  // console.log(`morePosts: ${JSON.stringify(morePosts)}`);
  // console.log(`allPosts: ${JSON.stringify(allPosts)}`);

  return (
    <>
      <Layout>
        <Head>
          <title>Bước đi tự tin cùng Sang Le Tech Blog</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
};

export default Blog;

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ]);

  console.log(`allPosts: ${JSON.stringify(allPosts)}`);

  return {
    props: { allPosts },
  };
};
