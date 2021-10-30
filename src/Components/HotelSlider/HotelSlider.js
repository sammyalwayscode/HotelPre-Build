import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import testImg from "../Images/gff.jpg";

const HotelSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Container>
      <Wrapper>
        <Slider {...settings}>
          <MyStyle>
            <SliderImage src={testImg} alt="" />
          </MyStyle>
          <MyStyle>
            <SliderImage src={testImg} alt="" />
          </MyStyle>
          <MyStyle>
            <SliderImage src={testImg} alt="" />
          </MyStyle>
          <MyStyle>
            <SliderImage src={testImg} alt="" />
          </MyStyle>
        </Slider>
      </Wrapper>
    </Container>
  );
};

export default HotelSlider;

const Container = styled.div`
  width: 100%;
  height: 400px;
`;
const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  padding-top: 40px;
`;

const MyStyle = styled.div`
  width: 100%;
  height: 300px;
  background-color: white;
  border-radius: 10px;
  color: black;
  /* border: 2px solid white; */

  /* :hover {
    border: 2px solid white;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 /73%) 0px 16px 10px -10px;
  } */
`;

const SliderImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
`;
