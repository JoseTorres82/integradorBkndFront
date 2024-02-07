import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface CardModelProps {
  img: string;
  title: string;
  description: string;
  price: number;
  category: string;
  isSelected: boolean;
  onClick: () => void;
  handlePedidoClick: () => void;  // Agrega la propiedad handlePedidoClick
}

const CardContainer = styled.div<{ isSelected: boolean }>`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  margin: 10px;
  width: 250px;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? "#e0e0e0" : "white")};
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #f5f5f5;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transform: translateY(-4px);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
`;

const CardContent = styled.div`
  padding: 10px;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 18px;
`;

const CardText = styled.p`
  margin: 5px 0;
`;

const CardPrice = styled.span`
  font-size: 16px;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
`;
/* const CardCategory = styled.span`
  display:none;
` */
const CardButton = styled(Link)`
  background-color: #ffcc00;
  color: white;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  margin-top: 10px;
  width: 100%;
  text-decoration: none;
  display: block;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e6b800;
  }
`;

const CardModel: React.FC<CardModelProps> = ({
  img,
  title,
  description,
  price,
  isSelected,
  onClick,
  handlePedidoClick,
}) => {
  return (
    <CardContainer isSelected={isSelected} onClick={onClick}>
      <CardImage src={img} alt={title} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardText>{description}</CardText>
        <CardPrice>${price}</CardPrice>
        {/* <CardCategory>${category}</CardCategory> */}
        <CardButton to="/PedidoPage" onClick={handlePedidoClick}>
          Pedir
        </CardButton>
      </CardContent>
    </CardContainer>
  );
};

export default CardModel;
