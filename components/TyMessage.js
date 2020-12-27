import styled from "styled-components";

const TyMessage = () => {
  return (
    <Container>
      <h1>Thank you!</h1>
      <p>I'll respond back to your email as soon as I can.</p>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  background-color: white;
  z-index: 1000;
  box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2);

  h1 {
    color: #0f3959;
    font-weight: 500;
  }
  p {
    color: black;
  }
`;

export default TyMessage;
