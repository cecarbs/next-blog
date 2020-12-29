import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import { getPostBySlug } from "lib/api";
import sanityClient from "lib/sanity";
import BlogContent from "components/BlogContent";
import BlogHeader from "components/BlogHeader";
import Section from "components/containers/BlogPostPage";
import ToggleSwitch from "components/ToggleSwitch";
import PreviewMode from "components/PreviewMode";
import Loading from "components/Loading";
import SocialShare from "components/SocialShare";

const BlogPost = ({ blog, preview }) => {
  const [isToggled, setIsToggled] = useState(false);
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }

  const title = `${blog.title} - Charles Carbonel`;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="title" key="title" content={title} />
        <meta name="description" key="description" content={blog.summary} />
        <meta property="og:title" key="og:title" content={title} />
        <meta
          property="og:description"
          key="og:description"
          content={blog.summary}
        />
        <meta property="og:image" key="og:image" content={blog.mainImage} />
      </Head>
      <Section isToggled={isToggled}>
        {preview && <PreviewMode />}
        <ToggleSwitch
          isToggled={isToggled}
          onToggle={() => {
            setIsToggled(!isToggled);
          }}
        />
        <BlogHeader
          isToggled={isToggled}
          title={blog.title}
          name={blog.name}
          date={blog.publishedAt}
          summary={blog.summary}
          image={blog.mainImage}
          caption={blog.mainImage.description}
          alt={blog.mainImage.alt}
          imageUrl={blog.imageUrl}
        />
        <BlogContent isToggled={isToggled} content={blog.body} />
        <SocialShare
          blogTitle={blog.title}
          metaTitle={title}
          url={`${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`}
          summary={blog.summary}
        />
      </Section>
    </>
  );
};

export default BlogPost;

export async function getStaticProps({ params, preview = false }) {
  const slug = params.slug;
  const blog = await getPostBySlug(slug, preview);
  return {
    props: {
      blog,
      preview,
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const blogs = await sanityClient.fetch(
    `*[_type == 'post']{'slug': slug.current}`
  );
  return {
    paths: blogs.map(({ slug }) => `/blog/personal-development/${slug}`),
    fallback: true,
  };
}
