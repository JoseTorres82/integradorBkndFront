import React from "react";
import styled from "styled-components";
import blurredBackground from "../../assets/img/bghelados.webp";
interface HeroProps {
    backgroundImage?: string;
}

const HeroContainer = styled.div<HeroProps>`
  position: relative;
  background-image: url(${(props) => props.backgroundImage || blurredBackground});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: #f5f5f7;
  text-align: center;
  padding: 100px 20px;
  max-width: 1280px;
  margin: 0 auto;
  border-radius: 3px;
  margin-top: 1rem;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    filter: blur(30px); 
    z-index: -1;

   
  }

`;

const HeroText = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); 
`;

const Hero: React.FC<HeroProps> = ({ backgroundImage }) => {
    return (
        <HeroContainer backgroundImage={backgroundImage}>
            <HeroText>
                Bienvenido a COOPER, la heladería artesanal donde cada sabor es una obra maestra.

            </HeroText>
            <div className="heroSpn">
            <span>Hace tu pedido Online - Delivery sin cargo.</span>
            </div>
        </HeroContainer>
    );
};

export default Hero;
