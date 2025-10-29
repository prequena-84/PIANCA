import React from "react";

// Importación de Imagen
import Logo from "../../assets/logoPianca.png"

const HeroPanel = ({ text }) => {
    return (
        <>
            <div>
                <img src={Logo} alt="logo-pianca" />
            </div>
            <div className="">
                <h1 className="">{text}</h1>
            </div>
        </>
    );
};

export default HeroPanel;