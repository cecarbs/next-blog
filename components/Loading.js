import styled from "styled-components";

const Loading = () => {
  return (
    <Section>
      <div className="loader">
        <span>Loading...</span>
      </div>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  /* background: #34495e; */
  background: #fff;

  .loader {
    width: 200px;
    height: 200px;
    box-sizing: border-box;
    border-radius: 50%;
    border-top: 10px solid #e63946;
    position: relative;
    animation: a1 2s linear infinite;

    span {
      position: absolute;
      width: 200px;
      height: 200px;
      color: #000;
      text-align: center;
      line-height: 200px;
      animation: a2 2s linear infinite;
    }
  }

  .loader::before,
  .loader::after {
    content: "";
    width: 200px;
    height: 200px;

    position: absolute;
    left: 0;
    top: -10px;
    box-sizing: border-box;
    border-radius: 50%;
  }

  .loader::before {
    /* border-top: 10px solid #e67e22; */
    /* border-top: 10px solid #f1faee; */
    border-top: 10px solid #1f648a;
    transform: rotate(120deg);
  }

  .loader::after {
    border-top: 10px solid #0f3959;
    transform: rotate(240deg);
  }

  @keyframes a1 {
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes a2 {
    to {
      transform: rotate(-360deg);
    }
  }
`;

export default Loading;
