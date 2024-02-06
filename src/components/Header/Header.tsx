import React from "react";
import styled from "styled-components";
import "./HeaderStyles.css"
import "./Navbar/Navbar"
import Navbar from "./Navbar/Navbar";

interface HeaderStyledProps {
  height?: string;
  backgroundColor?: string;
}

const HeaderStyled = styled.div<HeaderStyledProps>`
  max-width: 100vw;
  margin:0 auto;
  width:100%;
  padding:0;
  border-radius: 0px 0px 10px 10px;
  height: ${(props) => props.height || "5rem"};
  margin-top:0;
  background: ${(props) => props.backgroundColor || "#f5f5f5"};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header: React.FC = () => {
  return (
    <HeaderStyled height="5rem" backgroundColor="#fabfb7">
      <div className="headerContainer">
        <div className="logo">
          <img src="/Logo.png" alt="logo bulldog frances" />
          <div className="LogoTxt">
            <h1>COOPER</h1>
            <span>Helado Artesanal</span>
          </div>
        </div>

        <Navbar />
      </div>
    </HeaderStyled>
  );
};

export default Header;
