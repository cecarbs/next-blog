import { useState } from "react";
import styled from "styled-components";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import emailjs from "emailjs-com";
import Link from "next/link";
import Section from "components/containers/ContactPage";
import TyMessage from "components/TyMessage";

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function sendEmail(e) {
    e.preventDefault();
    setIsSubmitted(!isSubmitted);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <Section>
      {!isSubmitted && (
        <Container>
          <div className="contactInfo">
            <div className="information">
              <h2>Contact Info</h2>
              <ul className="info">
                <li>
                  <Link href="https://www.github.com/cecarbs">
                    <a>
                      <GitHubIcon />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.linkedin.com/in/charles-carbonel">
                    <a>
                      <LinkedInIcon />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <form className="contactForm" onSubmit={sendEmail}>
            <h2>Send me a message</h2>
            <div className="formbox">
              <div className="inputbox w50">
                <input type="text" name="name" required></input>
                <span>Name</span>
              </div>
              <div className="inputbox w50">
                <input type="text" name="email" required></input>
                <span>Email</span>
              </div>
              <div className="inputbox w100">
                <textarea name="message" required></textarea>
                <span>Message</span>
              </div>
              <div className="inputbox w100">
                <input type="submit" value="send"></input>
              </div>
            </div>
          </form>
        </Container>
      )}

      {isSubmitted && <TyMessage />}
    </Section>
  );
};

const Container = styled.div`
  position: relative;
  width: 1100px;
  min-height: 550px;
  display: flex;
  z-index: 1000;

  @media screen and (max-width: 768px) {
    padding: 0;
    min-width: 100%;
    display: flex;
    flex-direction: column;
  }

  .contactInfo {
    position: absolute;
    top: 40px;
    height: calc(100%-80px);
    background: #0f3959;
    z-index: 1;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2);
    margin-left: 1rem;

    @media screen and (max-width: 678px) {
      display: none;
    }

    @media screen and (max-width: 768px) {
      position: absolute;
      transform: translateY(-5.5rem);
    }

    @media screen and (min-width: 769px) and (max-width: 1023px) {
      transform: translateX(-1rem);
    }

    @media screen and (max-width: 1024px) {
      padding: 30px;
      margin-left: 2rem;
    }

    h2 {
      color: #f1faee;
      font-size: 24px;
      font-weight: 500;
    }

    .info {
      position: relative;
      margin: 20px 0;

      li {
        position: relative;
        list-style: none;
        display: flex;
        margin: 20px 10px;
        cursor: pointer;
        align-items: flex-start;
        color: #e63946;
      }

      a {
        text-decoration: none;
        color: #e63946;
      }
    }
  }

  .contactForm {
    position: absolute;
    padding: 70px 45px 0px 95px;
    background: #fff;
    margin-left: 150px;
    width: calc(100% -150px);
    height: 90%;
    box-shadow: 0 50px 50px rgba(0, 0, 0, 0.5);

    @media screen and (max-width: 480px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      margin-left: 1rem;
      margin-right: 1rem;
      padding: 2rem;
      margin-top: 5rem;
      flex-direction: column;
    }

    @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      margin-left: 1rem;
      margin-right: 1rem;
      padding: 2rem;
      margin-top: 5rem;
      flex-direction: column;
    }

    @media screen and (min-width: 769px) and (max-width: 1023px) {
      flex-direction: column;
      align-items: center;
      position: relative;
      margin-right: 1rem;
      padding-left: 5rem;

      flex-direction: column;
    }

    h2 {
      color: #0f3959;
      font-size: 24px;
      font-weight: 500;
    }

    .formbox {
      position: relative;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      padding-top: 30px;

      @media screen and (max-width: 480px) {
        flex-direction: column;
        width: 100%;
      }
    }

    .inputbox {
      position: relative;
      margin: 0 0 35px 0;
    }

    .w50 {
      width: 46%;

      @media screen and (max-width: 480px) {
        width: 100%;
      }
    }

    .w100 {
      width: 100%;
    }

    input,
    textarea {
      width: 100% !important;
      padding: 5px 0;
      resize: none;
      font-size: 18px;
      font-weight: 300;
      color: #333;
      border: none;
      border-bottom: 1px solid #777;
      outline: none;
    }

    textarea {
      min-height: 120px;
    }

    span {
      position: absolute;
      left: 0;
      padding: 5px 0;
      font-size: 18px;
      font-weight: 300;
      color: #333;
      transition: 0.5s;
      pointer-events: none;
    }
    input:valid ~ span,
    textarea:valid ~ span,
    input:focus ~ span,
    textarea:focus ~ span {
      transform: translateY(-20px);
      font-size: 12px;
      font-weight: 400;
      letter-spacing: 1px;
      color: #e63946;
    }

    input[type="submit"] {
      position: relative;
      cursor: pointer;
      background: #0f3959;
      color: white;
      border: none;
      max-width: 150px;
      padding: 12px;

      &:hover {
        background: #e63946;
        transition: all 0.5s ease;
      }
    }
  }
`;
export default ContactForm;

// const Container = styled.div`
//   position: relative;
//   min-width: 1100px;
//   min-height: 550px;
//   display: flex;
//   z-index: 1000;

//   @media screen and (max-width: 768px) {
//     width: 275px;
//     height: 137.5px;
//   }
//   .contactInfo {
//     position: absolute;
//     top: 40px;
//     height: calc(100%-80px);
//     background: #0f3959;
//     z-index: 1;
//     padding: 40px;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//     box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2);

//     h2 {
//       color: #f1faee;
//       font-size: 24px;
//       font-weight: 500;
//     }

//     .info {
//       position: relative;
//       margin: 20px 0;

//       li {
//         position: relative;
//         list-style: none;
//         display: flex;
//         margin: 20px 10px;
//         cursor: pointer;
//         align-items: flex-start;
//         color: #e63946;
//       }

//       a {
//         text-decoration: none;
//         color: #e63946;
//       }
//     }

//     @media screen and (max-width: 768px) {
//       display: none;
//     }
//   }

//   .contactForm {
//     position: absolute;
//     padding: 70px 50px 0px 90px;
//     background: #fff;
//     margin-left: 150px;
//     width: calc(100% -150px);
//     height: 90%;
//     box-shadow: 0 50px 50px rgba(0, 0, 0, 0.5);

//     h2 {
//       color: #0f3959;
//       font-size: 24px;
//       font-weight: 500;
//     }

//     .formbox {
//       position: relative;
//       display: flex;
//       justify-content: space-between;
//       flex-wrap: wrap;
//       padding-top: 30px;
//     }

//     .inputbox {
//       position: relative;
//       margin: 0 0 35px 0;
//     }

//     .w50 {
//       width: 47%;
//     }

//     .w100 {
//       width: 100%;
//     }

//     input,
//     textarea {
//       width: 100% !important;
//       padding: 5px 0;
//       resize: none;
//       font-size: 18px;
//       font-weight: 300;
//       color: #333;
//       border: none;
//       border-bottom: 1px solid #777;
//       outline: none;
//     }

//     textarea {
//       min-height: 120px;
//     }

//     span {
//       position: absolute;
//       left: 0;
//       padding: 5px 0;
//       font-size: 18px;
//       font-weight: 300;
//       color: #333;
//       transition: 0.5s;
//       pointer-events: none;
//     }
//     input:valid ~ span,
//     textarea:valid ~ span,
//     input:focus ~ span,
//     textarea:focus ~ span {
//       transform: translateY(-20px);
//       font-size: 12px;
//       font-weight: 400;
//       letter-spacing: 1px;
//       color: #e63946;
//     }

//     input[type="submit"] {
//       position: relative;
//       cursor: pointer;
//       background: #0f3959;
//       color: white;
//       border: none;
//       max-width: 150px;
//       padding: 12px;

//       &:hover {
//         background: #e63946;
//         transition: all 0.5s ease;
//       }
//     }
//   }
// `;
// export default ContactForm;
