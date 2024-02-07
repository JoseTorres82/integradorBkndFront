import React from "react";
import styled from "styled-components";
import '../HeaderStyles.css';



interface NavbarProps {
  backgroundColor?: string;
  textColor?: string;
}

const NavbarContainer = styled.nav<NavbarProps>`
  background-color: ${(props) => props.backgroundColor || "transparent"};
  color: ${(props) => props.textColor || "#1d1d1d"};
  padding: 10px;
  margin-rigth:15px;
  @media (width<=800px) {
    ul{
        display: none;
    }
`

;

const Navbar: React.FC<NavbarProps> = ({ backgroundColor, textColor }) => {
  return (
    <NavbarContainer backgroundColor={backgroundColor} textColor={textColor}>
      
      <ul>
        <a href="#"><li>Ingresar</li></a>
        <a href="#"><li>Registro</li></a>
        <li><a href="#pedir">Pedir</a></li>
        <li><a href="#sabores">Sabores</a></li>
        <a href="#contacto"><li>Contacto</li></a>
        <a href="#"><li>Mi pedido</li></a>
      </ul>
    </NavbarContainer>
  );
};

export default Navbar;
