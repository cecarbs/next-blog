import Head from "next/head";
import sanityClient from "lib/sanity";
import Card from "components/cards/AllPostCard";
import { blogCardFields } from "lib/api";
import { motion } from "framer-motion";
import {
  cardSlider,
  cardSliderParent,
} from "components/animations/framerVariants";
import styled from "styled-components";

const index = ({ blogs }) => {
  const title = "Nutrition & Fitness Blogs | Charles Carbonel";
  const metaDescription = "Category: Nutrition & Fitness";
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
        <h1>Nutrition & Fitness</h1>
        <CardContainer
          variants={cardSliderParent}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          {blogs.map((blog) => (
            <Card
              variants={cardSlider}
              date={blog._createdAt}
              title={blog.title}
              key={blog._id}
              slug={blog.slug}
              summary={blog.summary}
              image={blog.mainImage}
              alt={blog.mainImage.alt}
            />
          ))}
        </CardContainer>
      </Container>
    </>
  );
};

export async function getStaticProps() {
  const blogs = await sanityClient.fetch(
    `*[_type == 'post' && categories[0]->title == 'Nutrition & Fitness'] | order(_createdAt desc){${blogCardFields}}`
  );

  return {
    props: {
      blogs,
    },
    revalidate: 1,
  };
}

const Container = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-weight: 500;
  }
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

const CardContainer = styled(motion.div)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 5rem;
  flex-wrap: wrap;
  width: 90%;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`;
export default index;
