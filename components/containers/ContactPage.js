import styled from "styled-components";

const Contact = ({ children }) => {
  return <ContactSection>{children}</ContactSection>;
};

const ContactSection = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin-top: -80px;
  background: #112d42;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    /* background: #457b9d; */
    background: #1f648a;
  }

  @media screen and (max-width: 768px) {
    /* width: 50%; */
  }
`;
export default Contact;
