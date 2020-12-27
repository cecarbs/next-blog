import Head from "next/head";
import sanityClient from "lib/sanity";
import { urlFor } from "lib/api";
import BlogContent from "components/BlogContent";
import Section from "components/containers/BlogPostPage";
import { NodeDotJs } from "@styled-icons/simple-icons/NodeDotJs";
import { ReactLogo } from "@styled-icons/simple-icons/ReactLogo";
import { Redux } from "@styled-icons/simple-icons/Redux";
import { NextDotJs } from "@styled-icons/simple-icons/NextDotJs";
import { Javascript } from "@styled-icons/simple-icons/Javascript";
import { Mongodb } from "@styled-icons/simple-icons/Mongodb";
import { motion } from "framer-motion";
import {
  taglineAnimation,
  avatarAnimation,
  iconsAnimation,
} from "components/animations/framerVariants";
import styled from "styled-components";

const about = ({ me }) => {
  const title = "About | Charles Carbonel";
  const metaDescription =
    "Full Stack Developer with a passion for learning and self-improvement.";
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="title" key="title" content={title} />
        <meta name="description" key="description" content={metaDescription} />
        <meta property="og:title" key="og:title" content={title} />
        <meta
          property="og:description"
          key="og:description"
          content={metaDescription}
        />
      </Head>
      <Section>
        <IntroHeader>
          <h1>About Me</h1>
          <div className="row">
            <motion.div
              className="tagline"
              variants={taglineAnimation}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <h2>
                <span>Front-End</span> focused
                <br />
                with <span>Full-Stack</span>
                <br />
                experience
              </h2>
            </motion.div>
            <Avatar
              variants={avatarAnimation}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <img src={urlFor(me.image).width(200).url()} />
            </Avatar>
          </div>
          <motion.div
            className="icons"
            variants={iconsAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
          >
            <p>
              <NodeDotJs className="logo" style={{ color: "#509940" }} />{" "}
              Node.Js
            </p>
            <p>
              <ReactLogo className="logo" style={{ color: "#56D2F3" }} />
              React
            </p>
            <p>
              <Redux className="logo" style={{ color: "#7248B6" }} /> Redux
            </p>
            <p>
              <NextDotJs className="logo" />
              Next.Js
            </p>
            <p>
              <Javascript className="logo" style={{ color: "#EFD81D" }} />
              JavaScript
            </p>
            <p>
              <Mongodb className="logo" style={{ color: "#4AAA4E" }} />
              mongoDB
            </p>
          </motion.div>
        </IntroHeader>
        <BlogContent content={me.bio} />
      </Section>
    </>
  );
};

const IntroHeader = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid gray;

  h1 {
    text-align: center;
    font-weight: 500;
    font-size: 2rem;
  }

  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: 1rem;
    padding-bottom: 1rem;

    @media screen and (max-width: 768px) {
      padding-bottom: 1.25rem;
    }
  }

  .icons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
      flex-wrap: wrap;
    }

    .logo {
      width: 2rem;

      @media screen and (max-width: 768px) {
        width: 1.5rem;
      }
    }

    p {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-left: 1rem;
      padding-right: 1rem;

      @media screen and (max-width: 768px) {
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        margin-top: 0;
        margin-bottom: 0;
      }
    }
  }

  .tagline {
    h2 {
      font-weight: 400;
      font-size: 3rem;

      @media screen and (max-width: 768px) {
        font-size: 1.5rem;
      }
    }
    span {
      color: #1f648a;
    }
  }
`;
const Avatar = styled(motion.div)`
  img {
    width: 10rem;
    border-radius: 50%;
  }
`;

export async function getStaticProps() {
  const me = await sanityClient.fetch(
    `*[_type == 'author' && name == 'Charles Carbonel'][0]{
      image,
      name,
      bio[]{..., "asset": asset->},
    }`
  );

  return {
    props: {
      me,
    },
    revalidate: 1,
  };
}
export default about;
