import Link from "next/link";
import { urlFor } from "lib/api";
import { createTitleLink } from "lib/helperFunctions";
import { useScroll } from "components/animations/useScroll";
import { motion } from "framer-motion";
import { cardAnimation } from "components/animations/framerVariants";
import styled from "styled-components";

// TODO:
// FRAMER MOTION IS OVERRIDING HOVER CSS EFFECTS REMOVE THAT IN STYLED COMPONENTS
const WideCard = ({ title, description, coverImage, alt }) => {
  const [element, controls] = useScroll();

  return (
    <CardContainer
      variants={cardAnimation}
      ref={element}
      initial="hidden"
      animate={controls}
    >
      <div className="img-container">
        <div className="blog-post__img">
          <img
            className="img"
            src={urlFor(coverImage).width(400).fit("max").url()}
            alt={alt}
          />
        </div>
        <div className="filter"></div>
      </div>
      <div className="blog-post__info">
        <h1 className="blog-post__title">{title}</h1>
        <p className="blog-post__text">{description}</p>
        <Link href={`/blog/${createTitleLink(title)}`}>
          <a className="blog-post__cta">View Posts</a>
        </Link>
      </div>
    </CardContainer>
  );
};

const CardContainer = styled(motion.div)`
  width: 100%;
  max-width: 48rem;
  padding: 2.5rem;
  background-color: white;
  box-shadow: 0 50px 50px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;

  margin-bottom: 5rem;
  transition: all 1s ease;

  .img-container {
    /* min-width: 17.5rem;
    max-width: 17.5rem; */
    min-width: 21rem;
    max-width: 21rem;
    height: 15rem;
    transform: translateX(-5rem);
    z-index: 1;
    position: relative;
    overflow: hidden;
    /* border-radius: 0.4rem; */

    .blog-post__img {
      position: absolute;
      height: 100%;
      width: 100%;
      z-index: -1;

      .img {
        /* border-radius: 0.8rem; */
        object-fit: contain;
        /* display: block; */
      }
    }
    .filter {
      width: 100%;
      height: 100%;
      background: linear-gradient(
        to right,
        rgba(79, 152, 254, 0.8),
        rgba(0, 252, 254, 0.8)
      );
      position: absolute;
      /* border-radius: 0.8rem; */
      transform: translateX(-100%);
      transition: transform 0.5s;
    }

    @media screen and (max-width: 768px) {
    }
  }

  &:hover .filter {
    /* transform: translateX(0); */
  }

  .blog-post__info {
    @media screen and (max-width: 768px) {
      margin-top: -2rem;
    }
  }

  .blog-post__title {
    font-size: 1.25rem;
    margin: 0.75rem 0 1rem;
    text-transform: uppercase;
    color: #1d3557;
  }

  .blog-post__text {
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
    color: rgba(0, 0, 0, 0.7);
  }

  .blog-post__cta {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 0.6rem;
    color: #e63946;
    /* background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%); */
    background-color: #a8dadc;
    /* background: #f1faee; */
    border-radius: 0.8rem;
    text-decoration: none;

    &:hover {
      /* background-image: linear-gradient(to right, #00f2fe 0%, #4facfe 100%); */
    }
  }

  @media screen and (max-width: 1068px) {
    max-width: 40rem;
  }

  @media screen and (max-width: 768px) {
    max-width: 20rem;
    padding: 1.25rem;
    flex-direction: column;

    .img-container {
      transform: translate(0, -4rem);
    }
  }
`;

export default WideCard;
