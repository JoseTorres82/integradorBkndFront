import { useState } from "react";
import { saboresHelado } from "../../components/Products/Data/sabores";
import '../../Styles/GlobalStyles.css'
import { PiIceCreamLight } from "react-icons/pi";

const ListaSabores = () => {
    const [sabores, setSabores] = useState<string[]>([]);

    const mostrarSabores = (categoria: string) => {
        switch (categoria) {
            case "heladosDeCrema":
                setSabores(saboresHelado.heladosDeCrema);
                break;
            case "heladosAlAgua":
                setSabores(saboresHelado.heladosAlAgua);
                break;
            case "saboresEspeciales":
                setSabores(saboresHelado.saboresEspeciales);
                break;
            default:
                setSabores([]);
        }
    };

    return (
        <div className="verSabores">
            <h2><PiIceCreamLight /> Prueba Nuestros Exquisitos Sabores <PiIceCreamLight /></h2>
            <button className="botVer bot1" onClick={() => mostrarSabores("heladosDeCrema")}>Helados de Crema</button>
            <button className="botVer bot2" onClick={() => mostrarSabores("heladosAlAgua")}>Helados al Agua</button>
            <button className="botVer bot3" onClick={() => mostrarSabores("saboresEspeciales")}>Sabores Especiales</button>

            <ul className="listaSabores">
                {sabores.map((sabor, index) => (
                    <li key={index}>{sabor}</li>
                ))}
            </ul>
        </div>
    );
};

export default ListaSabores;
