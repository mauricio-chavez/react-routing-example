import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <p>Hola</p>
      <Link to='/login'>Iniciar Sesión</Link>
    </>
  );
}
