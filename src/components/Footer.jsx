import React from "react";
import styled from "styled-components";
import { Link as Enlace } from "react-router-dom";
import { mobile } from "../responsive";
import { Email, LocationOn, Facebook, Instagram, WhatsApp  } from '@mui/icons-material';

export const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Neutra. Skin Shop</Logo>
        <Description>
        Belleza, cosmética y cuidado personal.
        </Description>
        <SocialContainer>
          <SocialIcon color="4267B2">
            <Facebook style={{color:"black"}}/>
          </SocialIcon>
          <SocialIcon color="E1306C">
            <Instagram  style={{color:"black"}}/>
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Enlaces</Title>
        <List>
          <ListItem>
            <Link to={"/"}>Inicio</Link>
          </ListItem>
          <ListItem>
            <Link to={"/categorias"}>Categorías</Link>
          </ListItem>
          <ListItem>
            <Link to={"/productos"}>Productos</Link>
          </ListItem>
          <ListItem>
            <Link to={"/cart"}>Carrito</Link>
          </ListItem>
          <ListItem>
            <Link to={"/terminos"}>Términos y condiciones</Link>
          </ListItem>
          <ListItem>
            <Link to={"/acerca"}>Acerca de nosotros</Link>
          </ListItem>
          
        </List>
      </Center>
      <Right>
        <Title>Contacto</Title>
        <ContactItem>
          <SocialIcon color="665351">
            <LocationOn  style={{color:"black"}} />
          </SocialIcon>
          Santo Domingo - Ecuador
        </ContactItem>
        <ContactItem>
          <Link to={{pathname: "https://example.com" }} target="_blank"><SocialIcon color="665351">
            <WhatsApp  style={{color:"black"}}  />
          </SocialIcon>
          +593 96 816 1789</Link>
          
        </ContactItem>
        <ContactItem>
          <SocialIcon color="665351">
            <Email  style={{color:"black"}} />
          </SocialIcon>
        neutraskinshop@gmail.com
        </ContactItem>
        {/* <Payment
          draggable="false"
          src="https://www.citypng.com/public/uploads/preview/-11597193844xtj2mnv37b.png"
        /> */}
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
const Link = styled(Enlace)`
color: black;
`