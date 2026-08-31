import React, { useState } from "react";
import "../App.css"; 

function RegistroUsuario({ volverLogin, registrarUsuario }) {

  // Estados del formulario
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [tipoUsuario, setTipoUsuario] = useState("");

  // Registrar usuario
  const handleSubmit = (e) => {

    e.preventDefault();

    // Validar campos
    if (
      !nombre ||
      !correo ||
      !telefono ||
      !ciudad ||
      !contraseña ||
      !tipoUsuario
    ) {
      alert("Por favor completa todos los campos.");
      return;
    }

    // Crear objeto con los datos
    const datos = {
      nombre,
      correo,
      telefono,
      ciudad,
      contraseña,
      tipoUsuario,
    };

    // Enviar datos a App.jsx
    registrarUsuario(datos);
  };

  return (
    <div className="registro-page">

      <div className="registro-card">

        <div className="registro-header">

          <div className="logo">

            <div className="logo-icon">
              ⌂
            </div>

            <span>
              Inmobiliaria{" "}
              <span className="premium">
                SKARLEY
              </span>
            </span>

          </div>

          <h1>Crear cuenta</h1>

          <p>
            Regístrate para comenzar
          </p>

        </div>


        <form
          className="registro-form"
          onSubmit={handleSubmit}
        >

          {/* NOMBRE */}

          <div className="form-group">

            <label>
              Nombre completo
            </label>

            <input
              type="text"
              placeholder="Ingresa tu nombre completo"
              value={nombre}
              onChange={(e) =>
                setNombre(e.target.value)
              }
            />

          </div>


          {/* CORREO */}

          <div className="form-group">

            <label>
              Correo electrónico
            </label>

            <input
              type="email"
              placeholder="correo@gmail.com"
              value={correo}
              onChange={(e) =>
                setCorreo(e.target.value)
              }
            />

          </div>


          {/* TELÉFONO */}

          <div className="form-group">

            <label>
              Teléfono
            </label>

            <input
              type="tel"
              placeholder="300 000 0000"
              value={telefono}
              onChange={(e) =>
                setTelefono(e.target.value)
              }
            />

          </div>


          {/* CIUDAD */}

          <div className="form-group">

            <label>
              Ciudad
            </label>

            <input
              type="text"
              placeholder="Bogotá"
              value={ciudad}
              onChange={(e) =>
                setCiudad(e.target.value)
              }
            />

          </div>


          {/* CONTRASEÑA */}

          <div className="form-group">

            <label>
              Contraseña
            </label>

            <input
              type="password"
              placeholder="••••••••"
              value={contraseña}
              onChange={(e) =>
                setContraseña(e.target.value)
              }
            />

          </div>


          {/* TIPO DE USUARIO */}

          <div className="form-group">

            <label>
              Tipo de usuario
            </label>

            <select
              value={tipoUsuario}
              onChange={(e) =>
                setTipoUsuario(e.target.value)
              }
            >

              <option value="">
                Selecciona un tipo de usuario
              </option>

              <option value="cliente">
                Cliente
              </option>

              <option value="inmobiliaria">
                Inmobiliaria
              </option>

            </select>

          </div>


          {/* BOTÓN */}

          <button
            type="submit"
            className="login-button"
          >
            Registrarse
          </button>

        </form>


        {/* VOLVER AL LOGIN */}

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