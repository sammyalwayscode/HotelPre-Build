import React from "react";
import styled from "styled-components";
import Header from "../Header/Header";
import HotelSlider from "../HotelSlider/HotelSlider";
import SlideBoot from "../HotSlideBoot/SlideBoot";
import cardImg from "../Images/gff.jpg";

const HotelRoute = () => {
  return (
    <Container>
      <Header />
      <Wrapper>
        <SlideBoot />
        <CardDivCtrl>
          <CardMainDiv>
            <SubCard>
              <FirstText>Classic Room</FirstText>
              <ImageCont src={cardImg} alt="Img" />
              <HotelName>Room 205</HotelName>
              <HotelDesc>
                Mobile app development is the act or process by which a mobile
                app is developed for mobile
              </HotelDesc>
              <PriceDiv>N2000</PriceDiv>
              <CardBtnDiv>Add To Booking</CardBtnDiv>
            </SubCard>
          </CardMainDiv>
        </CardDivCtrl>
      </Wrapper>
    </Container>
  );
};

export default HotelRoute;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`;
const Wrapper = styled.div`
  width: 85%;
`;

const CardDivCtrl = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 520px) {
    justify-content: center;
  }
`;

const CardMainDiv = styled.div`
  /* height: 400px; */
  width: 260px;
  /* background-color: #272727; */
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;

  @media screen and (max-width: 800px) {
    margin: 12px 0;
  }
`;
const SubCard = styled.div`
  width: 255px;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

const FirstText = styled.div`
  font-weight: 300;
  color: #22ace9;
  padding: 5px;
`;

const ImageCont = styled.img`
  width: 245px;
  height: 170px;
  object-fit: cover;
  background-color: black;
`;

const HotelName = styled.div`
  font-size: 18px;
  font-weight: 200;
  /* color: #cfcfcf; */
  color: #000;
  padding: 5px;
`;

const HotelDesc = styled.div`
  font-size: 15px;
  /* color: #cfcfcf; */
  color: #000;
  text-align: center;
  padding: 5px;
  font-family: Montserrat;
`;

const PriceDiv = styled.div`
  font-weight: 400;
  font-size: 22px;
  color: #22ace9;
  padding: 5px;
`;

const CardBtnDiv = styled.button`
  height: 34px;
  width: 150px;
  background-color: #377dff;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  font-family: Montserrat;
  transition: all 350ms;
  transform: scale(1);
  margin: 0 10px;

  :hover {
    transform: scale(0.94);
  }
`;
