import styled from "styled-components";

const ToggleSwitch = ({ isToggled, onToggle }) => {
  return (
    <Container>
      <Switch>
        <input type="checkbox" checked={isToggled} onChange={onToggle} />
        <span className="switch" />
      </Switch>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  text-align: right;
  /* height: 1rem; */
`;
const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 25px;

  input[type="checkbox"] {
    display: none;
    *:focus {
      outline: none;
    }
  }

  .switch {
    position: absolute;
    cursor: pointer;
    background-color: #ccc;
    border-radius: 25px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: background-color 0.2s ease;

    &:before {
      position: absolute;
      content: "";
      left: 2px;
      top: 2px;
      width: 21px;
      height: 21px;
      background-color: #aaa;
      border-radius: 50%;
      transition: transform 0.3s ease;
      outline: none;
    }
  }

  input[type="checkbox"]:checked + .switch::before {
    transform: translateX(25px);
    background-color: #a8dadc;
    /* background-color: #e0e0e0; */
  }

  input[type="checkbox"]:checked + .switch {
    background-color: #1f648a;
    /* background-color: #181818; */
  }
`;

export default ToggleSwitch;
