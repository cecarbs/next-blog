import styled from "styled-components";

const BlogContent = ({ children, isToggled }) => {
  return <Container isToggled={isToggled}>{children}</Container>;
};
const Container = styled.section`
  padding: 0.5rem calc((100vw - 1000px) / 2);
  display: flex;
  flex-direction: column;
  background-color: ${({ isToggled }) => (isToggled ? "#181818" : "white")};
  color: ${({ isToggled }) => (isToggled ? "#FAFAFA" : "black")};

  code {
    border-radius: 6px;
  }

  @media screen and (max-width: 1024px) {
    padding: 1rem;
  }
`;

export default BlogContent;
