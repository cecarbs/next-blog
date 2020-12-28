import styled from "styled-components";

const Contact = ({ children }) => {
  return <ContactSection>{children}</ContactSection>;
};

const ContactSection = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 70px);
  margin-top: -80px;
  background: #112d42;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: #1f648a;
  }
`;
export default Contact;
