import React, { useState } from "react";
import "../App.css"; 

function Login({ irRegistro, iniciarSesion }) {  
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  return (
  
    <div className="login-page">

      <div className="login-card">
        <div className="login-image">
          <div className="image-content">
            <p>PROPIEDADES EXCLUSIVAS</p>
            <h2>Encuentra el hogar que mereces</h2>
          </div>
        </div>

        <div className="login-container">
          <div className="login-content">
            <div className="logo">
              <div className="logo-icon">⌂</div>

              <span>
                Inmobiliaria 
                <span className="premium">SKARLEY</span>
              </span>
            </div>

            <h1>Iniciar sesión</h1>
            <p className="subtitle">
              Accede a tu cuenta para continuar
            </p>

            <div className="form-group">
              <label>Correo electrónico</label>

              <input
                type="email"
                placeholder="correo@gmail.com"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
              />
            </div>

            <div className="form-group">
               <label>Contraseña</label>

              <input
                type="password"
                placeholder="••••••••"
                value={contraseña}
                onChange={(e) => setContraseña(e.target.value)}
              />
            </div>

            <div className="forgot">
              <a href="#">
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            <button
              className="login-button"
              onClick={() => iniciarSesion(correo, contraseña)}
            >
              Iniciar sesión
            </button>

            <div className="separator">
              <span></span>
              <small>o</small>
              <span></span>
            </div>

           <p className="register">
              ¿No tienes una cuenta?
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  irRegistro();
                }}
              >
                {" "}Regístrate
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );}
export default Login;