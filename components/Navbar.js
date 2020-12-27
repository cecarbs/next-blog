import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import BurgerMenu from "components/BurgerMenu";
import Logo from "components/Logo";
import { motion, AnimatePresence } from "framer-motion";
import { navbarAnimation } from "components/animations/framerVariants";
import styled from "styled-components";

// PUT TRANSITIOON IN ANIMATION FOLDER
const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <AnimatePresence exitBeforeEnter>
      <NavbarContainer
        router={router.route}
        key={router.pathname}
        variants={navbarAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <Link href="/">
          <LogoContainer router={router.pathname}>
            <a>
              <Logo router={router.pathname} />
            </a>
          </LogoContainer>
        </Link>
        <BurgerMenu onChange={toggle} isOpen={isOpen} />
        <NavItems router={router.pathname} isOpen={isOpen}>
          <Link href="/about">
            <a className="about">About</a>
          </Link>
          <Link href="/blog">
            <a className="blog">Blog</a>
          </Link>
          <Link href="/contact">
            <a className="contact">Contact</a>
          </Link>
        </NavItems>
      </NavbarContainer>
    </AnimatePresence>
  );
};

const NavbarContainer = styled(motion.div)`
  background: ${({ router }) => (router === "/" ? "transparent" : "#041d2b")};
  height: 64px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;

  display: -webkit-box;
`;

const LogoContainer = styled.h1`
  color: ${({ router }) => (router === "/" ? "#1D3557" : "#A8DADC")};
  display: flex;
  align-items: center;

  a {
    display: flex;
    cursor: pointer;
    padding: 0 2rem;
    font-weight: 500;
  }
`;
const NavItems = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    height: 50vh;
    background: #041d2b;
    width: 100%;
    transition: all 0.5s ease;
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(-100%)"};
    opacity: ${({ isOpen }) => (isOpen ? "0.95" : "0")};
    box-shadow: 0 50px 50px rgba(0, 0, 0, 0.5);
    /* z-index: 100000; */
  }

  a {
    color: ${({ router }) => (router === "/" ? "black" : "#f1faee")};
    display: flex;
    text-decoration: none;
    padding: 0 2rem;
    cursor: pointer;
    transition: all 0.5s ease;
    position: relative;

    &:hover {
      color: #1f648a;
    }

    @media screen and (max-width: 768px) {
      color: ${({ router }) => (router === "/" ? "#f1faee" : "#f1faee")};
      padding: 1rem 0 1rem 0;
      font-size: 1.5rem;
    }
  }
`;

export default Navbar;
