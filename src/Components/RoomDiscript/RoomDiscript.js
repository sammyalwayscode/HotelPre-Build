import React from "react";
import styled from "styled-components";
import testImg from "../Images/gff.jpg";

const RoomDiscript = () => {
  return (
    <Container>
      <Wrapper>
        <ImageDiv src={testImg} />
        {/* <div></div> */}
        <TextDiv>
          <RoomNumb>Room 403</RoomNumb>
          <FullDiscription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem. Veritatis obcaecati tenetur iure
            eius earum ut molestias architecto voluptate
          </FullDiscription>
          <PriceLocCtrl>
            <PLhold>
              <PriceTell>Price </PriceTell>
              <Price>N2000</Price>
            </PLhold>
            <PLhold>
              <PriceTell>Category </PriceTell>
              <Price>Classic</Price>
            </PLhold>
          </PriceLocCtrl>
          <RoomDesBtnDiv>Add To Booking</RoomDesBtnDiv>
        </TextDiv>
      </Wrapper>
    </Container>
  );
};

export default RoomDiscript;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  /* height: 500px; */
  width: 800px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const ImageDiv = styled.img`
  height: 450px;
  width: 350px;
  background-color: aliceblue;
  object-fit: cover;
  margin: 10px;
`;
const TextDiv = styled.div`
  height: 450px;
  width: 350px;
  /* background-color: green; */
  text-align: center;
  margin: 10px;
`;

const RoomNumb = styled.div`
  font-size: 25px;
`;
const FullDiscription = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  margin-bottom: 20px;
`;
const PriceLocCtrl = styled.div`
  display: flex;
  justify-content: space-around;
`;

const PLhold = styled.div`
  height: 60px;
  width: 150px;
  background-color: #000;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

const PriceTell = styled.div`
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  color: #cfcfcf;
`;
const Price = styled.div`
  font-weight: 400;
  font-size: 18px;
  color: #22ace9;
`;

const RoomDesBtnDiv = styled.button`
  height: 40px;
  width: 170px;
  background-color: #377dff;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  font-family: Montserrat;
  transition: all 350ms;
  transform: scale(1);
  margin: 10px 0;

  :hover {
    transform: scale(0.94);
  }
`;
