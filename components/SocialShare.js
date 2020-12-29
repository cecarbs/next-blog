import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";
import styled from "styled-components";

const SocialShare = ({ url, blogTitle, metaTitle, summary }) => {
  return (
    <Container>
      <div>
        <h1>Share this post </h1>
      </div>
      <div className="icons">
        <div className="iconContainer">
          <FacebookShareButton url={url} quote={metaTitle}>
            <FacebookIcon size={36} />
          </FacebookShareButton>
        </div>
        <div className="iconContainer">
          <TwitterShareButton url={url} title={metaTitle}>
            <TwitterIcon size={36} />
          </TwitterShareButton>
        </div>
        <div className="iconContainer">
          <LinkedinShareButton
            url={url}
            title={metaTitle}
            summary={summary}
            source={blogTitle}
          >
            <LinkedinIcon size={36} />
          </LinkedinShareButton>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-weight: 400;
  }

  .icons {
    display: flex;
    flex-direction: row;
  }

  .iconContainer {
    text-align: center;
    padding-left: 4px;
    padding-right: 4px;
  }
`;

export default SocialShare;
