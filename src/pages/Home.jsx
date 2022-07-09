import React, { useEffect, useState } from "react";
import { Categories } from "../components/Categories";
import { Footer } from "../components/Footer";
import { Newsletter } from "../components/Newsletter";
import styled from "styled-components";
import { Products } from "../components/Products";
import { Slideshow, Slide } from "../components/SlideShow";
import { userRequest } from "../requestMetods";

export const Home = () => {
  const [slide, setSlide] = useState([]);
  //Traer los elementos del slider
  useEffect(() => {
    const getSlides = async () => {
      try {
        const res = await userRequest.get("slide");
        setSlide(res.data);
      } catch (error) {}
    };
    getSlides();
  }, []);

  //Llevar al inicio de la pantalla
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* <Slider /> */}
      <Slideshow controles={true} autoplay={true}>
        {slide.map((item) => (
          <Slide key={item._id}>
            <ImgContainer>
              <Image draggable="false" src={item.img} />
            </ImgContainer>

            <InfoContainer>
              <Titlte>{item.title}</Titlte>
              <Desc>{item.desc}</Desc>
              <Button>Ver todos los productos</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Slideshow>
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </>
  );
};
const ImgContainer = styled.div`
  flex: 2;
  height: 100%;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;
const Titlte = styled.h1`
  font-size: 70px;
  letter-spacing: 5px;
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 1px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
  border-radius: 4px;
`;
