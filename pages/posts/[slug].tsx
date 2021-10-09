import { serialize } from "next-mdx-remote/serialize";
import dynamic from "next/dynamic";
import Head from "next/head";
import Layout from "../../components/layout";

import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "../../components/post/container";
import PostBody from "../../components/post/post-body";
import PostHeader from "../../components/post/post-header";
import PostTitle from "../../components/post/post-title";

import { getPostBySlug, getAllPosts } from "../../utils/api";
import PostType from "../../types/post";

import { NextSeo } from "next-seo";
import { BlogJsonLd } from "next-seo";

// Custom components/renderers to pass to MDX.
// Since the MDX files aren't loaded by webpack, they have no knowledge of how
// to handle import statements. Instead, you must include components in scope
// here.
const components = {
  // It also works with dynamically-imported components, which is especially
  // useful for conditionally loading components for certain routes.
  // See the notes in README.md for more details.
  Youtube: dynamic(() => import("react-youtube")),
  Vimeo: dynamic(() => import("@u-wave/react-vimeo")),
  Head,
};

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

const Post = ({ post, morePosts, preview }: Props) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  // const mdxSource = post.content;

  return (
    <Layout>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>{post.title} | Sang Le Tech Blog</title>
                <meta property="og:image" content={post.ogImage.url} />
              </Head>

              <PostHeader
                title={post.title}
                date={post.date}
                coverImage={post.coverImage}
                author={post.author}
                type={post.type}
              />

              <PostBody content={post.content} components={components} />
            </article>
          </>
        )}
      </Container>
      {/* SANG: Double Check the img urls info*/}
      <NextSeo
        openGraph={{
          title: post.title,
          description: post.excerpt,
          url: post.slug,
          type: "article",
          article: {
            publishedTime: post.date,
            modifiedTime: post.date,
            expirationTime: post.date,
            section: post.category,
            authors: [`${post.author}`],
            tags: [post.tag],
          },
          images: [
            {
              url: post.ogImage.url,
              width: 850,
              height: 650,
              alt: post.title,
            },
          ],
        }}
      />
      <BlogJsonLd
        url={post.slug}
        title={post.title}
        images={[
          // "https://example.com/photos/1x1/photo.jpg",
          // "https://example.com/photos/4x3/photo.jpg",
          // "https://example.com/photos/16x9/photo.jpg",
          post.ogImage.url,
          post.coverImage,
        ]}
        datePublished={post.date}
        dateModified={post.date}
        authorName="Sang Le"
        description={post.excerpt}
      />
    </Layout>
  );
};

export default Post;

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
    "type",
    "tag",
  ]);

  const content = await serialize(post.content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: post,
  });

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
