import React, { useState } from "react";
import styled from "styled-components";
import CardModel from "./CardModel";

const CardSectionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color:#333;
`;

const cardData = [
  {
    id: 1,
    img: "/src/assets/img/helado-cuartokg.png",
    title: "Cuarto kilo",
    /* quantity: 2, */
    description:"Elegí 2 de nuestros fabulosos sabores",
    price: 3500,
  },
  {
    id: 2,
    img: "/src/assets/img/helado-mediokg.png",
    title: "Medio kilo",
    /* quantity: 4, */
    description:"Elegí 4 de nuestros fabulosos sabores",
    price: 5500,
  },
  {
    id: 3,
    img: "/src/assets/img/helado-1Kg.png",
    title: "1 Kilo",
    /* quantity: 4, */
    description:"Elegí 4 de nuestros fabulosos sabores",
    price: 9900,
  },
  {
    id: 4,
    img: "/src/assets/img/salsa-grande.png",
    title: "Salsas Grande",
   /*  quantity:1, */
    description: "Sabor Mega Extra Grande para tu helado",
    price: 4500,
  },
  {
    id: 5,
    img: "/src/assets/img/torta-helada.png",
    title: "Tortas Heladas",
   /*  quantity:1, */
    description: "12 Porciones Elegí tu Sabor Preferido",
    price: 14500,
  },
  {
    id: 6,
    img: "/src/assets/img/chocohelado.png",
    title: "Tortas Heladas",
   /*  quantity:1, */
    description: "12 Porciones. El mas rico chocolate",
    price: 14500,
  },
  {
    id: 7,
    img: "/src/assets/img/almendrado.png",
    title: "Postre Almendrado",
   /*  quantity:1, */
    description: "12 Porciones. El Helado más rico del País",
    price: 14500,
  },
  {
    id: 8,
    img: "/src/assets/img/postreind.png",
    title: "Postres Individuales",
   /*  quantity:1, */
    description: "Disfruta de nuestras delicias para uno",
    price: 14500,
  },
  
];

const CardSection: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const handleCardClick = (id: number) => {
    setSelectedCard(id === selectedCard ? null : id);
  };

  return (
    <CardSectionContainer>
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
