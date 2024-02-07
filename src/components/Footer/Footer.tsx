import React from "react";
import styled from "styled-components";
import './Footer.css';
import { FaPhoneVolume } from "react-icons/fa6";
import { SiWhatsapp } from "react-icons/si";
import { MdOutlineMail } from "react-icons/md";
import { SiInstagram } from "react-icons/si";
import { SiFacebook } from "react-icons/si";


const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top:15px;
  margin-bottom: 0;
`;

const FooterSection = styled.div`
  flex: 1;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex: 100%;
  }
`;

const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <div className="footerContainer">
                <FooterSection>
                    <div className="footerLogo">
                    <img src="/Logo.png" alt="logo bulldog frances" />
                    <h2>Cooper</h2>
                    <p><span>Helado Artesanal</span></p>
                    </div>
                </FooterSection>
                <FooterSection>
                    <h2>PEDIDOS</h2>
                    <p><FaPhoneVolume />  0800-1234-5678</p>
                    <p><FaPhoneVolume />  0800-4321-8765</p>
                    <p><SiWhatsapp /> 11-1234-5678</p>
                    <p><MdOutlineMail /> cooper@helados.com.ar</p>
                </FooterSection>
                <FooterSection>
                    <h2>SEGUINOS</h2>
                   <p> <SiInstagram /> @cooper_heladosOK</p>
                   <p> <SiFacebook /> @cooper_heladosOK</p>
                </FooterSection>
            </div>
        </FooterContainer>
    );
};

export default Footer;
