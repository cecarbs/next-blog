import Link from "next/link";
import styled from "styled-components";

const PreviewMode = () => {
  return (
    <PreviewModeContainer>
      <h1>
        <span>WARNING: </span>You are currently in preview mode!
      </h1>
      <Link href="/api/exit-preview">
        <a>Click here to leave preview mode</a>
      </Link>
    </PreviewModeContainer>
  );
};

const PreviewModeContainer = styled.div`
  span {
    color: red;
  }
  a {
    text-decoration: none;
    color: black;
    font-weight: 400;
  }
`;

export default PreviewMode;
