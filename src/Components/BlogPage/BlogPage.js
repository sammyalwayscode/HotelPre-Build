import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const BlogPage = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
  };
  return (
    <Container>
      <Wrapper>
        <h2>Center Mode</h2>
        <Slider {...settings}>
          <CardTest>Hello</CardTest>
        </Slider>
      </Wrapper>
    </Container>
  );
};

export default BlogPage;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 85%;
`;

const CardTest = styled.div``;
