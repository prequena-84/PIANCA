// Importación de React y el Estado
import React, { useState } from 'react';

// Importación Componente Login 
import Login from './components/login/form.login';

// Importacion de Css componente App.
import './App.css';

function App() {
  // Estado de los datos de login
  const [ dataLogin, setDataLogin ] = useState({
    email:"",
    password:"",
  });

  const handlerChange = ( event ) => {
    const { name, value } = event.target;

    setDataLogin( prevData => ({
      ...prevData,
      [name]:value,
    }));
  };

  return (
    <>
      <Login
        dataLogin={dataLogin}
        handleChange={handlerChange}
      />
    </>
  );
};

export default App
