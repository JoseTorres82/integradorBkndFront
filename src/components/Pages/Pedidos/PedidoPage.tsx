import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IoMdCheckmark, IoMdClose } from "react-icons/io";
import { PiIceCreamLight } from "react-icons/pi";
import { saboresHeladoEleccion } from "../../Products/Data/SaborHeladoEleccion";

const ContenedorPrincipal = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
`;

const CardTitleContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
`;

const PedidoContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const PedidoContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SelectionContainer = styled.div`
width: 250px;
border: 1px solid #ddd;
border-radius: 8px;
overflow: hidden;
margin: 20px;
color: #333;
font-family: 'Cabin',sans-serif;
margin-top: 0;
margin-bottom: 150px;
`;

const SelectionImage = styled.img`
  width: 100%;
  height: auto;
`;

const SelectionContent = styled.div`
  padding: 10px;
`;

const SelectionTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  color: #333;
`;

const DataSelect = styled.div`
  width: 60%;
  background-color: #f5f5f5;
  color: #333;
  padding: 10px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  text-align: left;
  font-family: "Cabin", sans-serif;
`;

const SelectedFlavors = styled.h3`
  color: #333;
`;

const FlavorSelector = styled.label`
  display: block;
  margin-top: 10px;
  color: #333;
`;

const FlavorList = styled.ul`
  list-style: none;
  display: block;
  overflow-y: scroll;
  height: 200px;
  padding: 0;
  font-family: "Cabin", sans-serif;
`;

const FlavorItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const FlavorName = styled.span`
  margin-right: 10px;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
`;

const CheckIcon = styled(IoMdCheckmark)`
  color: green;
  cursor: pointer;
`;

const CloseIcon = styled(IoMdClose)`
  color: red;
  cursor: pointer;
`;

const PedidoPage: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<{
    img: string;
    title: string;
    description?: string;
    price: number;
    quantity?: number;
    category?: string;
  } | null>(null);

  const [selectedFlavors, setSelectedFlavors] = useState<string[]>([]);

  useEffect(() => {
    const storedCard = localStorage.getItem("selectedCardInfo");

    if (storedCard) {
      setSelectedCard(JSON.parse(storedCard));
    }
  }, []);

  const handleFlavorSelection = (flavor: string) => {
    const updatedFlavors = [...selectedFlavors];

    if (updatedFlavors.includes(flavor)) {
      const index = updatedFlavors.indexOf(flavor);
      updatedFlavors.splice(index, 1);
    } else {
      if (!selectedCard?.quantity || updatedFlavors.length < selectedCard.quantity) {
        updatedFlavors.push(flavor);
      }
    }

    setSelectedFlavors(updatedFlavors);
    localStorage.setItem("selectedFlavors", JSON.stringify(updatedFlavors));
  };

  const renderSelectedCard = () => {
    if (!selectedCard) {
      return null;
    }

    return (
      <ContenedorPrincipal>
        <CardTitleContainer id="pedir" className="titulos">
          <h2>
            <PiIceCreamLight /> Listo Para Pedir? <PiIceCreamLight />
          </h2>
        </CardTitleContainer>
        <PedidoContent>
          <SelectionContainer>
            <SelectionImage src={selectedCard.img} alt={selectedCard.title} />
            <SelectionContent>
              <SelectionTitle>
                {selectedCard.category === 'helados' ? "Selecciona tus sabores preferidos" : selectedCard.title}
              </SelectionTitle>
              {selectedCard.category === 'helados' ? null : <p>{selectedCard.description}</p>}
            </SelectionContent>
          </SelectionContainer>
          <DataSelect className="dataSelect">
            <SelectedFlavors>{selectedCard.category === 'helados' ? `Selecciona ${selectedCard.quantity} sabores` : selectedCard.title}</SelectedFlavors>
            {selectedCard.category === 'helados' && (
              <FlavorSelector>
                <FlavorList>
                  {saboresHeladoEleccion[selectedCard.category].heladosDeCrema.map((flavor: any) => (
                    <FlavorItem key={flavor.id}>
                      <FlavorName>{flavor.title}</FlavorName>
                      {selectedFlavors.includes(flavor.title) ? (
                        <CloseIcon onClick={() => handleFlavorSelection(flavor.title)} />
                      ) : (
                        <CheckIcon
                          onClick={() => handleFlavorSelection(flavor.title)}
                          style={{
                            cursor: selectedFlavors.length === selectedCard?.quantity ? "not-allowed" : "pointer",
                          }}
                        />
                      )}
                    </FlavorItem>
                  ))}
                </FlavorList>
              </FlavorSelector>
            )}
            <p>{selectedCard.category === 'helados' ? `Sabores Elegidos: ${selectedFlavors.length}` : `Descripción: ${selectedCard.description}`}</p>
            <p>Total: ${selectedCard.price}</p>
            <div className="btnsContainer">
              <button onClick={(e) => { e.preventDefault(); console.log("Tu pedido está en camino") }}>Hacer Pedido</button>
              <button onClick={(e) => { e.preventDefault(); setSelectedFlavors([]) }}>Limpiar Selección</button>
            </div>
          </DataSelect>
        </PedidoContent>
      </ContenedorPrincipal>
    );
  };

  return <PedidoContainer>{renderSelectedCard()}</PedidoContainer>;
};

export default PedidoPage;
