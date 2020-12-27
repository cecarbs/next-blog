import styled from "styled-components";

const Logo = ({ router }) => {
  return (
    <Section router={router}>
      <div className="loader">
        <span></span>
      </div>
      <div>
        <p>Charles Carbonel</p>
      </div>
    </Section>
  );
};

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;

  p {
    margin-top: 8px;
    margin-bottom: 0;
    /* margin-left: 4px; */
    font-weight: 400;
    font-size: 1.5rem;

    @media screen and (max-width: 768px) {
      font-size: 1.3rem;
    }

    @media screen and (max-width: 480px) {
      display: none;
    }
  }

  /* &:hover .loader {
    border-top: 3px solid #e63946;
  }

  &:hover .loader::before {
    border-top: 3px solid #e63946;
  } */

  .loader {
    width: 60px;
    height: 60px;
    box-sizing: border-box;
    border-radius: 50%;
    /* border-top: 3px solid #e63946; */
    /* border-top: 3px solid #f1faee; */
    border-top: ${({ router }) =>
      router === "/" ? "3px solid #e63946" : "3px solid #e63946"};
    position: relative;
    transition: all 0.5s ease;

    span {
      position: absolute;
      width: 60px;
      height: 60px;
      color: #fff;
      text-align: center;
      line-height: 60px;
      font-size: 0.75rem; // adfasdf
    }
  }

  .loader::before,
  .loader::after {
    content: "";
    width: 60px;
    height: 60px;

    position: absolute;
    left: 0;
    top: -3px;
    box-sizing: border-box;
    border-radius: 50%;
  }

  .loader::before {
    /* border-top: 10px solid #e67e22; */
    /* border-top: 6px solid #f1faee; */
    /* border-top: ${({ router }) =>
      router === "/" ? "3px solid #e63946" : "3px solid #f1faee"}; */
    border-top: ${({ router }) =>
      router === "/" ? "3px solid #9e9e9e" : "3px solid #f1faee"};
    transform: rotate(200deg);
  }

  .loader::after {
    border-top: 9px solid #1f648a;
    transform: rotate(290deg);
  }
`;

export default Logo;
