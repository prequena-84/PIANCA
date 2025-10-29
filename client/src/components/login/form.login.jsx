import React from "react";

import style from "./form.login.module.css"

// Componente de login
const Login = ({ 
    onSubmit, 
    onClear,
    handleChange,
    dataLogin,
 }) => {

    /*Ejemplo de constante sin desestructurar
    const email = dataLogin.email;
    const password = dataLogin.password;*/

    // desestructuración de constantes
    const { email, password } = dataLogin;
    
    return (
        <form onSubmit={onSubmit} className={style.containerForm}>
            <fieldset className={style.containerFieldset}>
                <div className={style.containerEmailPass}>
                    <div className={style.containerEmail}>
                        <label htmlFor="email">Correo Electronico</label>
                        <input type="email" name="email" value={email} onChange={handleChange} />
                    </div>
                    <div className={style.containerPassword}>
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" name="password" value={password} onChange={handleChange}/>
                    </div>
                </div>
                <div className={style.containerBtn}>
                    <div className="">
                        <button type="submit" name="send" id="send" className="">
                            Ingresar
                        </button>
                    </div>
                    <div className="">
                        <button type="button" name="password" id="password" onClick={onClear}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </fieldset>
        </form>
    );
};

export default Login;