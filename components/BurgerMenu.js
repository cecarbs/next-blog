import { useRouter } from "next/router";
import styled from "styled-components";

const Burger = ({ onChange, isOpen }) => {
  const router = useRouter();
  return (
    <StyledBurger
      onClick={() => {
        onChange();
      }}
      open={isOpen}
      router={router.pathname}
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: relative;
  top: 16px;
  right: 20px;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  overflow: hidden;
  z-index: 2;

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open, router }) =>
      router === "/" && !open ? "black" : "#f1faee"};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? "0" : "1")};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }

    display: none;

    @media screen and (max-width: 768px) {
      display: block;
    }
  }
`;

export default Burger;
