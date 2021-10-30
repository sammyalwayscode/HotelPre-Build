import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineHome, AiFillBook } from "react-icons/ai";
import { RiHotelFill } from "react-icons/ri";
import SideBar from "../SideBar/SideBar";
import Fade from "react-reveal/Fade";
import { HiMenuAlt1 } from "react-icons/hi";
import { GiCancel } from "react-icons/gi";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const onToggle = () => {
    setToggle(!toggle);
  };
  return (
    <Container>
      <Wrapper>
        <Logo>Logo</Logo>
        <NavDiv>
          <Nav to="/">
            <Icon>
              <AiOutlineHome />
            </Icon>
            <span>Home</span>
          </Nav>

          <Nav to="/booking">
            <Icon>
              <AiFillBook />
            </Icon>
            <span>Booking</span>
          </Nav>
          <Nav to="/hotels">
            <Icon>
              <RiHotelFill />
            </Icon>
            <span>Hotels</span>
          </Nav>
        </NavDiv>

        <MyMenu>
          {toggle ? (
            <Cancel onClick={onToggle} />
          ) : (
            <MenuIcon onClick={onToggle} />
          )}
        </MyMenu>
      </Wrapper>
      <Fade left when={toggle}>
        <SideBar />
      </Fade>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  height: 70px;
  width: 100%;
  /* background-color: aliceblue; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 85%;
  height: 70px;
  /* background-color: blanchedalmond; */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-weight: bold;
  font-size: larger;
`;
const NavDiv = styled.div`
  display: flex;
  width: 420px;
  justify-content: space-between;
  /* background-color: chocolate; */

  @media screen and (max-width: 760px) {
    display: none;
  }
`;
const Nav = styled(Link)`
  width: 100px;
  text-decoration: none;
  height: 35px;
  /* background-color: burlywood; */
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    /* margin-left: 5px; */
    font-size: 18px;
  }
  :hover {
    background-color: rgba(255, 255, 255, 0.6);
    color: #004080;
    cursor: pointer;
  }
`;
const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  font-size: 20px;
`;

const UserDiv = styled.div`
  @media screen and (max-width: 760px) {
    display: none;
  }
`;

const MyMenu = styled.div`
  width: 100px;
  height: 40px;
  font-size: 20px;
  font-weight: bold;
  font-family: poppins;
  display: flex;
  align-items: center;
  border-radius: 5px;
  justify-content: center;
  cursor: pointer;
  color: #004080;
  @media screen and (min-width: 760px) {
    display: none;
  }
`;

const MenuIcon = styled(HiMenuAlt1)`
  font-size: 40px;
  font-weight: bold;
`;
const Cancel = styled(GiCancel)`
  font-size: 40px;
  font-weight: bold;
`;

const Holder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding-top: 10px; */
`;
