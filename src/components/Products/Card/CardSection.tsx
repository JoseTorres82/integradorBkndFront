import React, { useState } from "react";
import styled from "styled-components";
import CardModel from "./CardModel";
import '../../../Styles/GlobalStyles.css'
import { PiIceCreamLight } from "react-icons/pi";

const CardSectionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color:#333;
`;
const CardTitleContainer = styled.div`
max-width: 1280px;
margin: 0 auto;
border-radius: 3px;
margin-top: 2rem;
width:100%;
display: flex;
justify-content: center;
color:#333;
text-align:center;
font-family: "Dancing Script", cursive;
font-size:1.5rem;
/* font-family: 'Montserrat', sans-serif; */
background: var(--main-color-4);
`;
const cardData = [
  {
    id: 1,
    img: "/img/helado-cuartokg.png",
    title: "Cuarto kilo",
    /* quantity: 2, */
    description: "Elegí 2 de nuestros fabulosos sabores",
    price: 3500,
  },
  {
    id: 2,
    img: "/img/helado-mediokg.png",
    title: "Medio kilo",
    /* quantity: 4, */
    description: "Elegí 4 de nuestros fabulosos sabores",
    price: 5500,
  },
  {
    id: 3,
    img: "/img/helado-1KG.png",
    title: "1 Kilo",
    /* quantity: 4, */
    description: "Elegí 4 de nuestros fabulosos sabores",
    price: 9900,
  },
  {
    id: 4,
    img: "/img/salsa-grande.png",
    title: "Salsas Grande",
    /*  quantity:1, */
    description: "Sabor Mega Extra Grande para tu helado",
    price: 4500,
  },
  {
    id: 5,
    img: "/img/torta-helada.png",
    title: "Tortas Heladas",
    /*  quantity:1, */
    description: "12 Porciones Elegí tu Sabor Preferido",
    price: 14500,
  },
  {
    id: 6,
    img: "/img/chocohelado.png",
    title: "Tortas Heladas",
    /*  quantity:1, */
    description: "12 Porciones. El mas rico chocolate",
    price: 14500,
  },
  {
    id: 7,
    img: "/img/almendrado.png",
    title: "Postre Almendrado",
    /*  quantity:1, */
    description: "12 Porciones. El Helado más rico del País",
    price: 14500,
  },
  {
    id: 8,
    img: "/img/postreind.png",
    title: "Postres Individuales",
    /*  quantity:1, */
    description: "Disfruta de nuestras delicias para uno",
    price: 3500,
  },

];

const CardSection: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const handleCardClick = (id: number) => {
    setSelectedCard(id === selectedCard ? null : id);
  };

  return (
    <CardSectionContainer>
      <CardTitleContainer id="pedir"><h2><PiIceCreamLight /> Cuánto Helado Querés Hoy? <PiIceCreamLight /></h2></CardTitleContainer>
      {cardData.map((card) => (
        <CardModel
          key={card.id}
          img={card.img}
          title={card.title}
          /*  quantity={card.quantity} */
          description={card.description}
          price={card.price}
          isSelected={selectedCard === card.id}
          onClick={() => handleCardClick(card.id)}
        />
      ))}
    </CardSectionContainer>
  );
};

export default CardSection;
