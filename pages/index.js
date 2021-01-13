import Head from "next/head";
import HeroSection from "components/HeroSection";

export default function Home() {
  const title =
    "Charles Carbonel | Avid Learner, Developer, Fitness Enthusiast";
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
      <HeroSection />
    </>
  );
}
