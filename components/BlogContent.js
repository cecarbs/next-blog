import BlockContent from "@sanity/block-content-to-react";
import Highlight from "components/Highlight";
import { urlFor } from "lib/api";
import getYouTubeId from "get-youtube-id";
import YouTube from "react-youtube";
import styled from "styled-components";
import Link from "next/link";

const editor = {
  highlight: "#FFFBCC",
};

const serializers = {
  types: {
    youtube: ({ node }) => {
      const { url } = node;
      const id = getYouTubeId(url);
      return (
        <YouTubeContainer>
          <YouTube videoId={id} className="player" />
        </YouTubeContainer>
      );
    },
    code: ({ node: { language, code } }) => {
      return <Highlight language={language}>{code}</Highlight>;
    },
    image: ({ node: { asset, description } }) => {
      return (
        <BlogImage>
          <img
            src={urlFor(asset).height(300).fit("max").url()}
            alt={description}
          />
          <figcaption>
            {"Image by "}
            <Link href={asset.source.url}>
              <a>{description}</a>
            </Link>
          </figcaption>
        </BlogImage>
      );
    },
  },
  marks: {
    highlight: (props) => {
      return (
        <span style={{ backgroundColor: editor.highlight }}>
          {props.children}
        </span>
      );
    },
    color: (props) => {
      return <span style={{ color: props.mark.hex }}>{props.children}</span>;
    },
  },
};

const BlogContent = ({ content, isToggled }) => {
  return (
    <BlogStyles isToggled={isToggled}>
      <BlockContent serializers={serializers} blocks={content} />
    </BlogStyles>
  );
};

const BlogImage = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;

  .image-alt {
    text-align: center;
    color: gray;
    font-style: italic;
    padding-top: 4px;
    font-size: 0.8rem;
  }

  img {
    display: flex;
    margin-left: auto;
    margin-right: auto;

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }

  figcaption {
    text-align: center;
    font-style: italic;
    color: gray;
    padding: 0.25rem 0;
    font-size: 0.9rem;

    a {
      color: #1f648a;
    }

    @media screen and (max-width: 768px) {
      font-size: 0.75rem;
      padding: 0.25rem 0;
    }
  }
`;

const BlogStyles = styled.div`
  color: ${({ isToggled }) => (isToggled ? "#FAFAFA" : "black")};
  font-size: 1.05rem;
  font-weight: 400;
  line-height: 27px;
  padding-bottom: 3rem;

  h2 {
    font-weight: 500;
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

const YouTubeContainer = styled.div`
  text-align: center;

  .player {
    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }
`;
export default BlogContent;
