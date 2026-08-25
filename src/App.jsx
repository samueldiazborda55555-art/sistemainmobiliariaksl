import { useState } from "react";
import Login from "./components/login";
import RegistroUsuario from "./components/RegistroUsuario";

function App() {
  // Recuperar usuario guardado en el navegador
  const usuarioGuardado = localStorage.getItem("usuarioRegistrado");

  const [pantalla, setPantalla] = useState("login");

  const [usuarioRegistrado, setUsuarioRegistrado] = useState(
    usuarioGuardado ? JSON.parse(usuarioGuardado) : null
  );

  // Registrar usuario
  const registrarUsuario = (datos) => {
    localStorage.setItem(
      "usuarioRegistrado",
      JSON.stringify(datos)
    );

    setUsuarioRegistrado(datos);
    setPantalla("login");

    alert("¡Registro exitoso! Ahora puedes iniciar sesión.");
  };

  // Iniciar sesión
  const iniciarSesion = (correo, contraseña) => {

    if (!usuarioRegistrado) {
      alert("No hay ningún usuario registrado.");
      return;
    }

    if (
      correo === usuarioRegistrado.correo &&
      contraseña === usuarioRegistrado.contraseña
    ) {
      alert(
        `Bienvenido/a ${usuarioRegistrado.nombre}`
      );

      if (usuarioRegistrado.tipoUsuario === "cliente") {
        alert("Has ingresado como Cliente.");
      } else {
        alert("Has ingresado como Inmobiliaria.");
      }

      return true;
    }

    alert("El correo o la contraseña son incorrectos.");

    return false;
  };

  return (
    <>
      {pantalla === "login" && (
        <Login
          irRegistro={() => setPantalla("registro")}
          iniciarSesion={iniciarSesion}
        />
      )}

      {pantalla === "registro" && (
        <RegistroUsuario
          volverLogin={() => setPantalla("login")}
          registrarUsuario={registrarUsuario}
        />
      )}
    </>
  );
}

export default App;