import React, { useState } from "react";
import styled from "styled-components";
import CardModel from "../../Products/Card/CardModel";
import { PiIceCreamLight } from "react-icons/pi";

const ContenedorPrincipal = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
`;

const CardSectionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: #333;
`;

const CardTitleContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
`;

const cardData = [
  {
    id: 1,
    img: "/img/helado-cuartokg.png",
    title: "Cuarto kilo",
    quantity: 2,
    description: "Elegí 2 de nuestros fabulosos sabores",
    price: 3500,
    category: "helados",
  },
  {
    id: 2,
    img: "/img/helado-mediokg.png",
    title: "Medio kilo",
    quantity: 4,
    description: "Elegí 4 de nuestros fabulosos sabores",
    price: 5500,
    category: "helados",
  },
  {
    id: 3,
    img: "/img/helado-1KG.png",
    title: "1 Kilo",
    quantity: 4,
    description: "Elegí 4 de nuestros fabulosos sabores",
    price: 9900,
    category: "helados",
  },
  {
    id: 4,
    img: "/img/salsa-grande.png",
    title: "Salsas Grandes",
    description: "Sabor Mega Extra Grande para tu helado",
    price: 4500,
    category: "Salsas",
  },
  {
    id: 5,
    img: "/img/torta-helada.png",
    title: "Tortas Heladas",
    description: "12 Porciones Elegí tu Sabor Preferido",
    price: 14500,
    category: "Tortas Heladas",
  },
  {
    id: 6,
    img: "/img/chocohelado.png",
    title: "Tortas Heladas",
    description: "12 Porciones. El mas rico chocolate",
    price: 14500,
    category: "Tortas Heladas",
  },
  {
    id: 7,
    img: "/img/almendrado.png",
    title: "Postre Almendrado",
    description: "12 Porciones. El Helado más rico del País",
    price: 14500,
    category: "Postres Helados",
  },
  {
    id: 8,
    img: "/img/postreind.png",
    title: "Postres Individuales",
    description: "Disfruta de nuestras delicias para uno",
    price: 3500,
    category: "Postres Helados",
  },
];

const CardSection: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const handleCardClick = (id: number) => {
    setSelectedCard(id === selectedCard ? null : id);
  };

  const handlePedidoClick = (cardInfo: any) => {
    // Aquí guardas la información en localStorage
    localStorage.setItem("selectedCardInfo", JSON.stringify(cardInfo));
  };

  return (
    <ContenedorPrincipal>
      <CardTitleContainer id="pedir" className="titulos">
        <h2>
          <PiIceCreamLight /> Cuánto Helado Querés Hoy? <PiIceCreamLight />
        </h2>
      </CardTitleContainer>
      <CardSectionContainer>
        {cardData.map((card) => (
          <CardModel
            key={card.id}
            img={card.img}
            title={card.title}
            description={card.description}
            price={card.price}
            category={card.category}
            isSelected={selectedCard === card.id}
            onClick={() => handleCardClick(card.id)}
            handlePedidoClick={() => handlePedidoClick(card)}
          />
        ))}
      </CardSectionContainer>
    </ContenedorPrincipal>
  );
};

export default CardSection;
