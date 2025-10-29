import React from "react";

// Importación de Imagen
import Logo from "../../assets/logoPianca.png"

// Importación dle modulo de CSS
import style from '../heroBanner/heroPanel.module.css'

const HeroPanel = ({ 
    text="Bienvenido al Sistema de PIANCA" 
}) => {
    return (
        <div className={ style.container }>
            <div className={style.containerTitle}>
                <h1>{text}</h1>
            </div>
            <div className={style.containerImg}>
                <img src={Logo} alt="logo-pianca" className={style.img}/>
            </div>
        </div>
    );
};

export default HeroPanel;