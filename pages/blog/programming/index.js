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
  const title = "Programming Blogs | Charles Carbonel";
  const metaDescription = "Category: Programming";
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
        <pre>{JSON.stringify(blogs, null, 2)}</pre>
        <h1>Programming</h1>
        <CardContainer
          variants={cardSliderParent}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          {blogs.map((blog) => (
            <Card
              variants={cardSlider}
              date={blog.publishedAt}
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
    `*[_type == 'post' && categories[0]->title == 'Programming']  | order(publishedAt desc) 
    {${blogCardFields}}
    `
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

  @media screen and (min-width: 769px) and (max-width: 1408px) {
    padding-left: 0;
    padding-right: 0;
    justify-content: center;
    flex-wrap: wrap;
  }
`;
export default index;
