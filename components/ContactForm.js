import { useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
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
  z-index: 2;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding: 0;
    min-width: 100%;
    display: flex;
    flex-direction: column;
  }

  .contactForm {
    position: absolute;
    padding: 70px 70px 0px 70px;
    background: #fff;
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
      margin-left: 1rem;
      padding-bottom: 70px;
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
