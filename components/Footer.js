import styled from "styled-components";
import Link from "next/link";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="information">
        <p>Contact Info</p>
      </div>
      <div className="links">
        <Link href="https://www.github.com/cecarbs">
          <a>
            <GitHubIcon />
          </a>
        </Link>

        <Link href="https://www.linkedin.com/in/charles-carbonel">
          <a>
            <LinkedInIcon />
          </a>
        </Link>
      </div>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  display: none;

  @media screen and (max-width: 678px) {
    display: flex;
    flex-direction: column;
    background-color: #0f3959;
    z-index: 1000;
    text-align: left;
    align-items: center;
    justify-content: space-between;

    p {
      color: #f1faee;
      font-weight: 500;
      margin-bottom: 12px;
    }

    .links {
      justify-content: center;

      display: flex;
      flex-direction: row;
      width: 100%;
      text-align: center;
      a {
        padding-left: 1rem;
        padding-right: 1rem;
        padding-bottom: 0.75rem;
        color: #e63946;
      }
    }
  }
`;
export default Footer;
