import Link from "next/link";
import { useRouter } from "next/router";
import { urlFor } from "lib/api";
import { formatDate, createTitleLink, truncate } from "lib/helperFunctions";
import { motion } from "framer-motion";
import styled from "styled-components";

const Card = ({
  alt,
  slug,
  category,
  title,
  summary,
  image,
  date,
  variants,
}) => {
  const router = useRouter();

  return (
    <>
      <CardContainer variants={variants}>
        <div className="img-container">
          <div className="blog-post__img">
            <img
              className="img"
              src={urlFor(image).width(360).fit("scale").url()}
              alt={alt}
            />
          </div>
        </div>
        <div className="blog-post__info">
          <div className="blog-post__date">
            <span>{formatDate(date)}</span>
          </div>
          <h1 className="blog-post__title">{title}</h1>
          <p className="blog-post__text">{truncate(summary, 75)}</p>
        </div>
        <Link href={`${router.pathname}/${createTitleLink(category)}/${slug}`}>
          <a className="blog-post__cta">READ POST</a>
        </Link>
      </CardContainer>
    </>
  );
};

const CardContainer = styled(motion.div)`
  width: 100%;
  max-width: 20rem;
  min-height: 25rem;
  padding: 1.25rem;
  flex-direction: column;
  background-color: #1f648a;
  box-shadow: 0 50px 50px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  margin-bottom: 5rem;
  transition: all 0.5s ease;
  margin-left: 1rem;
  margin-right: 1rem;
  position: relative;
  transition: all 1s ease;

  @media screen and (max-width: 1024px) {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  @media screen and (max-width: 768px) {
    max-width: 20rem;
    padding: 1.25rem 0;

    .img-container {
      transform: translate(0, -4rem);
    }
  }

  &:hover {
    transform: scale(1.1);
  }

  .img-container {
    min-width: 17.5rem;
    max-width: 17.5rem;
    height: 15rem;
    transform: translate(0, -4rem);
    z-index: 1;
    position: relative;
    overflow: hidden;

    .blog-post__img {
      position: absolute;
      height: 100%;
      width: 100%;
      z-index: -1;

      img {
        object-fit: contain;
        transition: all 0.5s ease;
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
      transform: translateX(-100%);
      transition: transform 0.5s;
    }
  }

  &:hover img {
    transform: scale(1.2);
    transition: all 0.5s ease;
  }

  .blog-post__info {
    margin-top: -3rem;
    max-width: 15rem;

    p {
      font-size: 0.8rem;
    }
  }

  .blog-post__date {
    span {
      display: block;
      color: #041d2b;
      font-size: 0.8rem;
      font-weight: 600;
      margin: 0.5rem 0;
    }
  }

  .blog-post__title {
    font-size: 1.25rem;
    margin: 0.75rem 0 1rem;
    text-transform: uppercase;
    color: white;
  }

  .blog-post__text {
    margin-bottom: 1.5rem;
    font-size: 0.8rem;
    color: #f1faee;
    font-weight: 400;
  }

  .blog-post__cta {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 0.6rem;
    color: #e63946;
    background-color: #a8dadc;
    border-radius: 0.8rem;
    text-decoration: none;
    align-items: flex-end;
    position: absolute;
    bottom: 1rem;
    /* transition: all 0.3s ease;

    &:hover {
      color: #a8dadc;
      background-color: #e63946;
    } */
  }
`;

export default Card;
