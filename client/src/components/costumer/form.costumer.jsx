import React from "react";

import style from "./form.costumer.module.css"

import Logo from "../../assets/logoPianca.png";

const FormCostumer = ({ 
    textNav="Formulario de Cliente", 
    onClear,
    onSubmit,
    handlerChange,
    dataFormCostumer,
}) => {

    const { 
        //typeDocument,
        document,
        name,
        lastName,
        phone,
        address,
        email, 
    } = dataFormCostumer;

    return (
        <div className={style.container}>
            <nav className={style.containerNav}>
                <div className={style.containerTitle}>
                    <h1>{textNav}</h1>
                </div>
            </nav>
            <form className={style.form} onSubmit={onSubmit}>
                <fieldset className={style.fieldset}>
                    {/*<div>
                        <label htmlFor="typeDocument">Tipo de Documento</label>
                        <input type="text" name="typeDocument" value={typeDocument} onChange={handlerChange} />
                    </div>*/}
                    <div className={style.containerInput}>
                        <label htmlFor="document">Nro. De Documento</label>
                        <input type="number" name="document" value={document} onChange={handlerChange} />
                    </div>
                    <div className={style.containerInput}>
                        <label htmlFor="name">Nombres</label>
                        <input type="text" name="name" value={name} onChange={handlerChange} />
                    </div>
                    <div className={style.containerInput}>
                        <label htmlFor="lastName">Apellidos</label>
                        <input type="text" name="lastName" value={lastName} onChange={handlerChange} />
                    </div>
                    <div className={style.containerInput}>
                        <label htmlFor="phone">Teléfono</label>
                        <input type="tel" name="phone" value={phone} onChange={handlerChange} />
                    </div>
                    <div className={style.containerInput}>
                        <label htmlFor="address">Dirección</label>
                        <input type="text" name="address" value={address} onChange={handlerChange} />
                    </div>
                    <div className={style.containerInput}>
                        <label htmlFor="email">Correo Electrónico</label>
                        <input type="email" name="email" value={email} onChange={handlerChange} />
                    </div>
                    <div className={style.containerBtn}>
                        <button type="submit">Registrar</button>
                        <button type="button">Buscar</button>
                        <button type="button">Actualizar</button>
                        <button type="button">Eliminar</button>
                        <button type="button" onClick={onClear}>Cancelar</button>
                    </div>
                </fieldset>
            </form>
            <footer className={style.footer}>
                <div className={style.containerImg}>
                    <img src={Logo} alt="logo-pianca" className={style.img} />
                </div>
                <div>

                </div>
            </footer>
        </div>
    );
};

export default FormCostumer;