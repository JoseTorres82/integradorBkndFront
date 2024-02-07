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
        <div className="verSabores" id="sabores">
            <h2><PiIceCreamLight /> Probá Nuestros Exquisitos Sabores <PiIceCreamLight /></h2>
            <a href="#lista"><button className="botVer bot1" onClick={() => mostrarSabores("heladosDeCrema")}>Helados de Crema</button></a>
            <a href="#lista"><button className="botVer bot2" onClick={() => mostrarSabores("heladosAlAgua")}>Helados al Agua</button></a>
            <a href="#lista"><button className="botVer bot3" onClick={() => mostrarSabores("saboresEspeciales")}>Sabores Especiales</button></a>

            <ul className="listaSabores" id="Lista">
                {sabores.map((sabor, index) => (
                    <li key={index}>{sabor}</li>
                ))}
            </ul>
        </div>
    );
};

export default ListaSabores;
