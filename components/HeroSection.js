import Link from "next/link";
import Typed from "react-typed";
import { motion } from "framer-motion";
import {
  buttonAnimation,
  typerAnimation,
} from "components/animations/framerVariants";
import styled from "styled-components";

const HeroSection = () => {
  const shortBio = ["Fitness Enthusiast", "Avid Learner", "Tech Lover"];

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg
          src="/blue-white.mp4"
          type="video/mp4"
          autoPlay
          muted
          playsInline
        />
      </HeroBg>
      <HeroContent>
        <TyperContainer
          variants={typerAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <Typed
            loop
            strings={shortBio}
            typeSpeed={70}
            backSpeed={70}
            backDelay={1000}
            loopCount={0}
            showCursor
            className="typer"
            cursorChar="|"
          ></Typed>
        </TyperContainer>
        <ButtonWrapper>
          <Link href="/about">
            <motion.a
              variants={buttonAnimation}
              initial="hidden"
              animate="show"
              className="blog-post__cta"
            >
              LEARN MORE
            </motion.a>
          </Link>
        </ButtonWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -80px;
  max-width: 100%;
  height: 100vh;
  position: relative;
  z-index: 1;
`;
const HeroBg = styled.div`
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #0c0c0c;
`;

const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 4px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: #fff;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px) {
      font-size: 24px;
    }
    @media screen and (max-width: 480px) {
      font-size: 18px;
    }
  }

  p {
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
      font-size: 24px;
    }
    @media screen and (max-width: 480px) {
      font-size: 18px;
    }
  }

  a {
    text-decoration: none;
    color: #fff;
    background-color: #0f3959;
    padding: 0.75rem 1.5rem;
    border-radius: 0.8rem;
    letter-spacing: 1px;
    font-size: 0.8rem;
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2);
  }
`;

const TyperContainer = styled(motion.div)`
  padding-top: 9rem;
  padding-bottom: 5rem;

  .typer {
    color: white;
    font-size: 2.5rem;
  }
`;

const ButtonWrapper = styled.div`
  padding-top: 5rem;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  span {
    color: #e63946;
  }
`;
export default HeroSection;
