// Importación de React y el Estado
import React, { useState } from 'react';

// Importación Componente Login 
import Login from './components/login/form.login';

// Importación Panel de Bienvenida Pianca
import HeroPanel from './components/heroBanner/welcome.panel';

// importacion Formulario del Crud
import FormCostumer from './components/costumer/form.costumer';

// Importacion de Css componente App.
import style from './App.module.css';

function App() {

  // Estado REACTIVO de los datos de login
  const [ dataLogin, setDataLogin ] = useState({
    email:"",
    password:"",
  });

  // Estado Reactivo del Login
  const [ isLogin, setIsLogin ] = useState(false);

  // Estado de los Datos del Cliente
  const [ dataCostumer, setDataCostumer ] = useState({
    //typeDocument:"",
    document:null,
    name:"",
    lastName:"",
    phone:"",
    address:"",
    email:"",
  })

  // Funcion para leer los cambios del input
  const handlerChangeLogin = ( event ) => {
    const { name, value } = event.target;

    setDataLogin( prevData => ({
      ...prevData,
      [name]:value,
    }));
  };

  // Función para limpiar el formulario de login
  const clearFormLogin = () => {
    setDataLogin({
      email:"",
      password:"",
    })
  };

  // Función del onSumite, Validación "Harcodeada" del usuario y contraseñ
  const sendDataLogin = event => {
    // Con este elemento evitamos que el navegador recargue la pagina
    event.preventDefault();

    // Constante de los datos del Login
    const { email, password } = dataLogin;

    if ( !email || !password ) {
      alert('Los campos de correo electronico y contraseña no deben estar en blanco');
      return;
    };
    
    if ( email === 'joelguerra.2512@gmail.com' && password === "Ale1234" ) {
      setIsLogin(!isLogin);

    } else {

      alert('Has ingresado un usuario o contraseña invalida.');
    };
  };

    // Funcion para leer los cambios del input del costumer
  const handlerChangeFormCostumer = ( event ) => {
    const { name, value } = event.target;

    setDataCostumer( prevData => ({
      ...prevData,
      [name]:value,
    }));
  };

  // Función para limpiar el formulario de Costumer
  const clearFormCostumer = () => {
    setDataCostumer({
      //typeDocument:"",
      document:"",
      name:"",
      lastName:"",
      phone:"",
      address:"",
      email:"",
    });
  };

  // Funcion del onSumit Costumer
  const sendDataCostumer = event => {
    // Con este elemento evitamos que el navegador recargue la pagina
    event.preventDefault();

    clearFormCostumer();
    alert('Se ha registrado el cliente sastifactoriamente');
  };

  // Renderizado del jsx despues de cambios
  return (
    <div className={style.container}>
      {!isLogin && <div className={style.containerHeroLogin}>
            <HeroPanel/>
          <div className={style.containerLogin}>
            <Login
              dataLogin={dataLogin}        // Estado reactivo de los datos del login que se pasan al componente hijo -> Login
              handleChange={handlerChangeLogin}
              onClear={clearFormLogin}
              onSubmit={sendDataLogin}
            />
          </div>
      </div>}
      {isLogin && <FormCostumer
        dataFormCostumer={dataCostumer} 
        onClear={clearFormCostumer}
        onSubmit={sendDataCostumer}
        handlerChange={handlerChangeFormCostumer}
      />}
    </div>
  );
};

export default App
