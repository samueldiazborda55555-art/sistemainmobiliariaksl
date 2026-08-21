import React from "react";
import "../App.css"; 

function Login() {
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
              />
            </div>

            <div className="form-group">
              <label>Contraseña</label>

              <input
                type="password"
                placeholder="••••••••"
              />
            </div>

            <div className="forgot">
              <a href="#">
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            <button className="login-button">
              Iniciar sesión
            </button>

            <div className="separator">
              <span></span>
              <small>o</small>
              <span></span>
            </div>

            <p className="register">
              ¿No tienes una cuenta?
              <a href="#"> Regístrate</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );}
export default Login;