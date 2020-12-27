import { createGlobalStyle, ThemeProvider } from "styled-components";
import "highlight.js/styles/night-owl.css";
import { AnimatePresence, motion } from "framer-motion";
import Layout from "components/Layout";
import { pageAnimations } from "components/animations/framerVariants";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Vollkorn', serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    a {
      text-decoration: none;
    }
  }
`;

// Test & Remove ThemeProvider
export default function App({ Component, pageProps, router }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <Layout>
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={router.route}
              initial="hidden"
              animate="show"
              variants={pageAnimations}
              exit="exit"
            >
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </Layout>
      </ThemeProvider>
    </>
  );
}
export const lightTheme = {
  body: "#E2E2E2",
  text: "#363537",
  toggleBorder: "#FFF",
  gradient: "linear-gradient(#39598A, #79D7ED)",
};

export const darkTheme = {
  body: "#363537",
  text: "#FAFAFA",
  toggleBorder: "#6B8096",
  gradient: "linear-gradient(#091236, #1E215D)",
};
