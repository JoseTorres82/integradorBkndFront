/* import React from "react";
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
 */
// Navbar.tsx
import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import '../HeaderStyles.css';
import '../../../Styles/GlobalStyles.css'

interface NavbarProps {
  backgroundColor?: string;
  textColor?: string;
}

const NavbarContainer = styled.nav<NavbarProps>`
  width: 100%;
  background-color: ${(props) => props.backgroundColor || "transparent"};
  color: ${(props) => props.textColor || "#1d1d1d"};
  /* padding: 10px; */
  z-index: 1000;

  ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
  }

  li {
    margin-right: 15px;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.textColor || "#1d1d1d"};
  }

  @media (max-width: 780px) {
    ul {
      display: none;
      flex-direction: column;
      align-items: center;
      position: absolute;
      top: 60px;
      left: 0;
      width: 100%;
      background-color: ${(props) => props.backgroundColor || "transparent"};
    }

    li {
      margin: 10px 0;
    }

    ul.active {
      display: flex;
      background-color:#ffe4e1;
      margin-top:20px;
    }
  }
`;

const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 780px) {
    display: block;
  }
`;

const Navbar: React.FC<NavbarProps> = ({ backgroundColor, textColor }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <NavbarContainer backgroundColor={backgroundColor} textColor={textColor}>
      <div className="headerContainer">
        <div className="logo">
          <img src="/Logo.png" alt="logo bulldog frances" />
          <div className="LogoTxt">
            <h1>COOPER</h1>
            <span>Helado Artesanal</span>
          </div>
        </div>
        <div className="navMenu">
          <HamburgerIcon onClick={toggleMenu}>
            <FaBars size={24} />
          </HamburgerIcon>

          <ul className={isActive ? "active" : ""}>
            <Link to="/login">
              <li>Ingresar</li>
            </Link>
            <Link to="/registro">
              <li>Registro</li>
            </Link>
            <li>
              <Link to="/pedir">Pedir</Link>
            </li>
            <li>
              <a href="#sabores">Sabores</a>
            </li>
            <a href="#contacto">
              <li>Contacto</li>
            </a>
            <Link to="/mi-pedido">
              <li>Mi pedido</li>
            </Link>
          </ul>
        </div>
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
