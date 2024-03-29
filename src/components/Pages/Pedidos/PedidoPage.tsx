import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IoMdCheckmark, IoMdClose } from "react-icons/io";
import { PiIceCreamLight } from "react-icons/pi";
import { saboresHeladoEleccion } from "../../Products/Data/SaborHeladoEleccion";
import "../../../Styles/GlobalStyles.css";

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
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const PedidoContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const SelectionContainer = styled.div`
  width: 250px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  margin: 20px;
  color: #333;
  font-family: 'Cabin', sans-serif;
  margin-top: 0;
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

const IconsContainer = styled.div`
  display: flex;
  font-size:16px;
`;

const CheckIcon = styled(IoMdCheckmark)`
  color: #ccc; /* Gris por defecto */
  cursor: pointer;
  margin-right: 5px;
`;

/* const RedCloseIcon = styled(IoMdClose)`
  color: #ccc; 
  cursor: pointer;
  margin-left: 5px;
`; */

const GreenCheckIcon = styled(IoMdCheckmark)`
  color: green; /* Verde cuando está seleccionado */
  cursor: pointer;
  margin-right: 5px;
`;

const RedCloseIconSelected = styled(IoMdClose)`
  color: red; /* Rojo cuando está seleccionado */
  cursor: pointer;
  margin-left: 5px;
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

  const handlePedidoClick = () => {
    if (selectedCard && selectedFlavors.length > 0) {
      const ticketData = {
        title: selectedCard.title,
        price: selectedCard.price,
        flavors: selectedFlavors.filter(flavor => selectedFlavors.includes(flavor)),
        
      };
  
      localStorage.setItem("ticketGenerated", JSON.stringify(ticketData));
      localStorage.removeItem("selectedFlavors");
      setSelectedFlavors([]);
      //Validaciones para el back
    }
  };
  const handleLimpiarSeleccion = () => {
    localStorage.removeItem("selectedFlavors");
    setSelectedFlavors([]);
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
                {selectedCard.title}
              </SelectionTitle>
              <SelectionTitle>
                {selectedCard.description}
              </SelectionTitle>
              <SelectionTitle>
                $ {selectedCard.price}
              </SelectionTitle>
              {selectedCard.category === 'helados' ? null : <p>{selectedCard.description}</p>}
            </SelectionContent>
          </SelectionContainer>
          <DataSelect className="dataSelect">
            <SelectedFlavors>{selectedCard.category === 'helados' ? `Selecciona hasta ${selectedCard.quantity} sabores` : selectedCard.title}</SelectedFlavors>
            {selectedCard.category === 'helados' && (
              <FlavorSelector>
                <FlavorList>
                  {saboresHeladoEleccion[selectedCard.category].heladosDeCrema.map((flavor: any) => (
                    <FlavorItem key={flavor.id}>
                      <FlavorName>{flavor.title}</FlavorName>
                      <IconsContainer>
                        {selectedFlavors.includes(flavor.title) ? (
                          <>
                            <GreenCheckIcon style={{ display: "flex" }} />
                            <RedCloseIconSelected onClick={() => handleFlavorSelection(flavor.title)} />
                          </>
                        ) : (
                          <>
                            <CheckIcon onClick={() => handleFlavorSelection(flavor.title)} />
                            <GreenCheckIcon style={{ display: "none" }} />
                          </>
                        )}
                      </IconsContainer>
                    </FlavorItem>
                  ))}
                </FlavorList>
              </FlavorSelector>
            )}
            <p>{selectedCard.category === 'helados' ? `Sabores Elegidos: ${selectedFlavors.length}` : `Descripción: ${selectedCard.description}`}</p>
            <p>Total: ${selectedCard.price}</p>
            <div className="btnsContainer">
              <button onClick={handlePedidoClick} disabled={selectedFlavors.length === 0}>Hacer Pedido</button>
              <button onClick={handleLimpiarSeleccion}>Limpiar Selección</button>

            </div>
          </DataSelect>
        </PedidoContent>
      </ContenedorPrincipal>
    );
  };

  return <PedidoContainer>{renderSelectedCard()}</PedidoContainer>;
};

export default PedidoPage;
