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
                    <p>Helado Artesanal</p>
                    </div>
                </FooterSection>
                <FooterSection>
                    <h2>PEDIDOS</h2>
                    <p><FaPhoneVolume /> <span> 0800-1234-5678</span></p>
                    <p><FaPhoneVolume /> <span> 0800-4321-8765</span></p>
                    <p><SiWhatsapp /> <span>11-1234-5678</span></p>
                    <p><MdOutlineMail /> <span>cooper@helados.com.ar</span></p>
                </FooterSection>
                <FooterSection>
                    <h2>SEGUINOS</h2>
                   <p> <SiInstagram /> <span>@coope_heladosOK</span></p>
                   <p> <SiFacebook /> <span>@coope_heladosOK</span></p>
                </FooterSection>
            </div>
        </FooterContainer>
    );
};

export default Footer;
