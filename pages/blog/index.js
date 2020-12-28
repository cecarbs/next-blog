import Head from "next/head";
import sanityClient from "lib/sanity";
import CategoryCard from "components/cards/CategoryCard";
import { blogCardFields, categoryCardFields } from "lib/api";
import Card from "components/cards/RecentPostCard";
import { motion } from "framer-motion";
import {
  cardSlider,
  cardSliderParent,
} from "components/animations/framerVariants";
import styled from "styled-components";

const Blog = ({ recentPosts, categories }) => {
  const title = "Blog | Charles Carbonel";
  const metaDescription = "Recent Posts | Blog Categories";
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="title" key="title" content={title} />
        <meta name="description" key="description" content={metaDescription} />
        <meta property="og:title" key="og:title" content={title} />
        <meta
          property="og:description"
          key="og:description"
          content={metaDescription}
        />
      </Head>
      <Container>
        <h1>Recent Posts</h1>
        <RecentPostsContainer
          variants={cardSliderParent}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          {recentPosts.map((recentPost) => (
            <Card
              variants={cardSlider}
              category={recentPost.categories.title}
              key={recentPost._id}
              slug={recentPost.slug}
              author={recentPost.name}
              summary={recentPost.summary}
              title={recentPost.title}
              image={recentPost.mainImage}
              date={recentPost.publishedAt}
              alt={recentPost.mainImage.alt}
            />
          ))}
        </RecentPostsContainer>

        <span>
          <h1>Blog Categories</h1>
        </span>
        <CardContainer>
          {categories.map((category) => (
            <CategoryCard
              alt={category.coverImage.alt}
              key={category._id}
              description={category.description}
              title={category.title}
              coverImage={category.coverImage}
              slug={category.slug}
            />
          ))}
        </CardContainer>
      </Container>
    </>
  );
};

export async function getStaticProps() {
  const categories = await sanityClient.fetch(`*[
    _type == 'category']{${categoryCardFields}}`);

  const recentPosts = await sanityClient.fetch(`*[
    _type == 'post'] | order(publishedAt desc)[0..2]{${blogCardFields}}`);

  return {
    props: {
      categories,
      recentPosts,
    },
    revalidate: 1,
  };
}

const Container = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  overflow-x: hidden;

  h1 {
    font-weight: 500;
  }

  span {
    margin-bottom: 2rem;
  }
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5rem 5rem 0rem 5rem;
  align-items: center;
  justify-content: center;
  background-color: #1f648a;
  margin-bottom: 5rem;
  box-shadow: 0 50px 50px rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 768px) {
    margin-top: 0rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const RecentPostsContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 5rem;
  border-bottom: 1px solid lightgray;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    border-bottom: none;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 1024px) {
    padding-left: 0;
    padding-right: 0;
  }
`;
export default Blog;
