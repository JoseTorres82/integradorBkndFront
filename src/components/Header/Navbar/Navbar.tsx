import React from "react";
import styled from "styled-components";
import '../HeaderStyles.css';
/* import GiHamburgerMenu  from "react-icons/gi"; */


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
        <li>Contacto</li>
        <li>Ingresar</li>
        <li>Registro</li>
        <li>Mi pedido</li>
      </ul>
    </NavbarContainer>
  );
};

export default Navbar;
