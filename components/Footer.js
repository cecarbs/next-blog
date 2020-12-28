import { useRouter } from "next/router";
import styled from "styled-components";
import Link from "next/link";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Footer = () => {
  const router = useRouter();

  return (
    <FooterContainer router={router.pathname}>
      <div className="information">
        <p>
          <span>©</span> 2020 Charles Carbonel
        </p>
      </div>
      <div className="links">
        <Link href="https://www.github.com/cecarbs">
          <a aria-label="GitHub">
            <GitHubIcon />
          </a>
        </Link>

        <Link href="https://www.linkedin.com/in/charles-carbonel">
          <a aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
        </Link>
      </div>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  display: ${({ router }) => (router === "/" ? "none" : "flex")};
  flex-direction: row;
  background-color: #0f3959;
  align-items: center;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  justify-content: space-between;
  margin-top: auto;

  .information {
    padding: 0 4rem;

    p {
      color: #f1faee;
    }
  }

  .links {
    padding: 0 4rem;

    a {
      color: #e63946;
      padding-left: 1rem;
      padding-right: 1rem;
      padding-bottom: 0.75;
    }
  }

  @media screen and (max-width: 678px) {
    display: ${({ router }) => (router === "/" ? "none" : "flex")};
    flex-direction: column;
    z-index: 1000;
    text-align: left;
    align-items: center;
    justify-content: space-between;

    .information {
      padding: 0;

      p {
        font-weight: 500;
        margin-bottom: 12px;
      }
    }

    .links {
      justify-content: center;
      display: flex;
      flex-direction: row;
      width: 100%;
      text-align: center;
      padding: 0;
      a {
        padding-left: 1rem;
        padding-right: 1rem;
        padding-bottom: 0.75rem;
      }
    }
  }
`;
export default Footer;
