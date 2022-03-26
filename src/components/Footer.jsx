import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { FaEnvelope, FaFacebook, FaInstagram, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

export const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Neutra.</Logo>
        <Description>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
          perferendis, dolore earum tempore cum aut doloremque tenetur deserunt
          est quae, aspernatur vero. Accusamus eligendi obcaecati tempora
          exercitationem iure reprehenderit suscipit.
        </Description>
        <SocialContainer>
         <SocialIcon color="4267B2">
            <FaFacebook/>
          </SocialIcon>
          <SocialIcon color="E1306C">
          <FaInstagram/>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Enlaces</Title>
        <List>
          <ListItem>Inicio</ListItem>
          <ListItem>Categorias</ListItem>
          <ListItem>Productos</ListItem>
          <ListItem>Carrito</ListItem>
          <ListItem>Terminos y condiciones</ListItem>
          <ListItem>Acerca de nosotros</ListItem>
          <ListItem>Categorias</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contacto</Title>
        <ContactItem>
          <SocialIcon color="000000">
              <FaMapMarkerAlt/>
          </SocialIcon>
          Santo Domingo, por ahi
        </ContactItem>
        <ContactItem>
          <SocialIcon color="000000">
              <FaWhatsapp/>
          </SocialIcon>
          +593 98 7654 321
        </ContactItem>
        <ContactItem>
          <SocialIcon color="000000">
           <FaEnvelope/>
          </SocialIcon>
          contacto@micorreo.com
        </ContactItem>
        <Payment
          draggable="false"
          src="https://www.citypng.com/public/uploads/preview/-11597193844xtj2mnv37b.png"
        />
      </Right>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;
const Description = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SocialIcon = styled.div`
  font-size: 25px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
  ${mobile({ width: "100%" })}
`;