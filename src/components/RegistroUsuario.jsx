import React from "react";

function RegistroUsuario({ volverLogin }) {
  return (
    <div className="registro-page">
      <div className="registro-card">
        <div className="registro-header">
          <div className="logo">
            <div className="logo-icon">⌂</div>

            <span>
              Inmobiliaria{" "}
              <span className="premium">SKARLEY</span>
            </span>
          </div>

          <h1>Crear cuenta</h1>
          <p>
            Regístrate para comenzar
          </p>
        </div>


        <form className="registro-form">
          <div className="form-group">
            <label>Nombre completo</label>

            <input
              type="text"
              placeholder="Ingresa tu nombre completo"
            />
          </div>

          <div className="form-group">
            <label>Correo electrónico</label>

            <input
              type="email"
              placeholder="correo@gmail.com"
            />
          </div>


          <div className="form-group">
            <label>Teléfono</label>

            <input
              type="tel"
              placeholder="300 000 0000"
            />
          </div>


          <div className="form-group">
            <label>Ciudad</label>

            <input
              type="text"
              placeholder="Bogotá"
            />
          </div>


          <div className="form-group">
            <label>Contraseña</label>

            <input
              type="password"
              placeholder="••••••••"
            />
          </div>


          <div className="form-group">
            <label>Tipo de usuario</label>

            <select>
              <option value="">Selecciona un tipo de usuario</option>
              <option value="cliente">Cliente</option>
              <option value="inmobiliaria">Inmobiliaria</option>
            </select>
          </div>


          <button type="submit" className="login-button">
            Registrarse
          </button>

        </form>


        <p className="register">
          ¿Ya tienes una cuenta?

          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              volverLogin();
            }}
          >
            {" "}Iniciar sesión
          </a>
        </p>
      </div>
    </div>
  );
}

export default RegistroUsuario;