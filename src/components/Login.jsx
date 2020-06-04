import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <>
      <p>Iniciar sesión</p>
      <Link to='/'>Regresar al inicio</Link>
    </>
  );
}
