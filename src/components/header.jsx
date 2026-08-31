import React from "react";
export default function Header({ usuario, cerrarSesion }) {
  return (
    <header className="header">
      <div className="header-container">
        {/* Nombre o logo de la inmobiliaria */}
        <div className="logo">
          <h2>Inmobiliaria <span>KSL</span></h2>
        </div>

        {/* Navegación principal */}
        <nav className="nav-menu">
          <a href="#inmuebles">Inmuebles</a>
          <a href="#citas">Mis Citas</a>
          <a href="#contacto">Contacto</a>
        </nav>

        {/* Info del usuario y botón de salir */}
        <div className="user-section">
          {usuario && <span className="user-name">Hola, {usuario.nombre}</span>}
          <button className="btn-logout" onClick={cerrarSesion}>
            Cerrar sesión
          </button>
        </div>
      </div>
    </header>
  );
}