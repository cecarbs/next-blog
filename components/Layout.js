import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import styled from "styled-components";

const PageLayout = ({ children }) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Vollkorn:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <meta property="og:locale" key="og:locale" content="en_US " />
        <meta
          property="og:url"
          key="og:url"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`}
        />
        <meta property="og:type" key="og:type" content="website" />
        <meta property="og:image" key="og:image" content="" />
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`}
        />
      </Head>
      <Content>
        <Navbar />
        <Main>{children}</Main>
        <Footer />
      </Content>
    </>
  );
};

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
`;

export default PageLayout;
