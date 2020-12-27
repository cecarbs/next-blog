import { urlFor } from "lib/api";
import { formatDate } from "lib/helperFunctions";
import styled from "styled-components";
import Link from "next/link";

const BlogHeader = ({
  title,
  name,
  date,
  summary,
  image,
  isToggled,
  caption,
  alt,
  imageUrl,
}) => {
  return (
    <Container isToggled={isToggled}>
      <h1>{title}</h1>
      <h3>{summary}</h3>
      <h4>
        By: <span className="name">{name}</span>{" "}
        <span className="date">on {formatDate(date)}</span>
      </h4>
      <img
        initial="hidden"
        animate="show"
        src={urlFor(image).height(500).width(1000).url()}
        alt={alt}
      />
      <figcaption>
        {"Image by "}
        <Link href={imageUrl}>
          <a>{caption}</a>
        </Link>
      </figcaption>
    </Container>
  );
};

const Container = styled.div`
  border-bottom: 1px solid lightgray;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 3rem;
    font-weight: 500;
    color: ${({ isToggled }) => (isToggled ? "#FAFAFA" : "black")};
    margin-bottom: 0rem;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 400;
    color: ${({ isToggled }) => (isToggled ? "#b9b9b9" : "#3f3f3f")};
    font-style: italic;
    margin-bottom: 0rem;
  }

  h4 {
    color: gray;
    font-weight: 400;
  }

  img {
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }

  figcaption {
    text-align: center;
    font-style: italic;
    color: gray;
    padding: 0.5rem 0;
    font-size: 0.9rem;

    a {
      /* color: #a8dadc; */
      color: #1f648a;
    }

    @media screen and (max-width: 768px) {
      padding: 0.25rem 0;
      font-size: 0.75rem;
    }
  }

  .name {
    /* color: #e63946; */
    color: #a8dadc;
  }

  .date {
    color: gray;
  }
`;
export default BlogHeader;
