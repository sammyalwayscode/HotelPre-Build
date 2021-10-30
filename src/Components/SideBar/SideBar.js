import React from "react";
import styled from "styled-components";

const SideBar = ({ toggle, setToggle }) => {
  return (
    <Container>
      <Content
        onClick={() => {
          setToggle(false);
          console.log(toggle);
        }}
      >
        <Holder>
          <span>Home</span>
          <hr />
        </Holder>
        <Holder>
          <span>About Us</span>
          <hr />
        </Holder>
        <Holder>
          <span>Hotels</span>
          <hr />
        </Holder>
      </Content>
    </Container>
  );
};

export default SideBar;

const Container = styled.div`
  width: 400px;
  height: 80vh;
  background-color: white;
  z-index: 1000;
`;

const Content = styled.div`
  padding-top: 30px;
  height: 45%;
  width: 90%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: #004080;
  z-index: 1000;
`;
const Holder = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  z-index: 1000;
  span {
    font-size: 20px;
    font-weight: bold;
    font-family: poppins;
    margin-left: 20px;
  }
  hr {
    color: #004080;
    width: 90%;
  }
`;
