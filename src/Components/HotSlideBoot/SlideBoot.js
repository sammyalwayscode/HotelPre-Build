import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import testImg from "../Images/gff.jpg";
import styled from "styled-components";

const SlideBoot = () => {
  return (
    <Container>
      <Carousel fade>
        <Carousel.Item>
          <ImgCtr className="d-block w-100" src={testImg} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ImgCtr className="d-block w-100" src={testImg} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ImgCtr className="d-block w-100" src={testImg} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default SlideBoot;

const ImgCtr = styled.img`
  height: 400px;
  object-fit: cover;
`;

const Container = styled.div`
  margin-bottom: 50px;
`;
