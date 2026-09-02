import { useState } from "react";
import "./App.css";

import Login from "./components/login";
import RegistroUsuario from "./components/RegistroUsuario";
import PanelAdmin from "./components/Paneladmin";
import RegistroInmueble from "./components/FormularioInmueble";
import PanelCitas from "./components/ListaCitas";
import Header from "./components/header";
import Footer from "./components/footer";
import ListaInmuebles from "./components/ListaInmuebles";
import DetalleInmueble from "./components/DetalleInmueble";
import FormularioCita from "./components/FormularioCita";


// ==========================================
// APP
// ==========================================

function App() {

  // ==========================================
  // USUARIO
  // ==========================================

  const usuarioGuardado =
    localStorage.getItem("usuarioRegistrado");

  const [usuarioRegistrado, setUsuarioRegistrado] = useState(
    usuarioGuardado
      ? JSON.parse(usuarioGuardado)
      : null
  );


  // ==========================================
  // PANTALLA ACTUAL
  // ==========================================

  const [pantalla, setPantalla] = useState("login");


  // ==========================================
  // INMUEBLES
  // ==========================================

  const inmueblesGuardados =
    localStorage.getItem("inmuebles");

  const [inmuebles, setInmuebles] = useState(
    inmueblesGuardados
      ? JSON.parse(inmueblesGuardados)
      : []
  );


  // ==========================================
  // INMUEBLE EDITANDO
  // ==========================================

  const [inmuebleEditando, setInmuebleEditando] =
    useState(null);


  // ==========================================
  // INMUEBLE SELECCIONADO
  // ==========================================

  const [inmuebleSeleccionado, setInmuebleSeleccionado] =
    useState(null);


  // ==========================================
  // REGISTRAR USUARIO
  // ==========================================

  const registrarUsuario = (datos) => {

    localStorage.setItem(
      "usuarioRegistrado",
      JSON.stringify(datos)
    );

    setUsuarioRegistrado(datos);

    setPantalla("login");

    alert(
      "¡Registro exitoso! Ahora puedes iniciar sesión."
    );
  };


  // ==========================================
  // INICIAR SESIÓN
  // ==========================================

  const iniciarSesion = (correo, contraseña) => {

    if (!usuarioRegistrado) {

      alert(
        "No hay ningún usuario registrado."
      );

      return false;
    }


    if (
      correo === usuarioRegistrado.correo &&
      contraseña === usuarioRegistrado.contraseña
    ) {

      alert(
        `Bienvenido/a ${usuarioRegistrado.nombre}`
      );


      if (
        usuarioRegistrado.tipoUsuario === "cliente"
      ) {

        alert(
          "Has ingresado como Cliente."
        );

        setPantalla("cliente");

      } else {

        alert(
          "Has ingresado como Inmobiliaria."
        );

        setPantalla("admin");

      }

      return true;
    }


    alert(
      "El correo o la contraseña son incorrectos."
    );

    return false;
  };


  // ==========================================
  // CERRAR SESIÓN
  // ==========================================

  const cerrarSesion = () => {

    setPantalla("login");

    setInmuebleEditando(null);

    setInmuebleSeleccionado(null);

  };


  // ==========================================
  // AGREGAR INMUEBLE
  // ==========================================

  const agregarInmueble = () => {

    setInmuebleEditando(null);

    setPantalla("formulario");

  };


  // ==========================================
  // GUARDAR / ACTUALIZAR INMUEBLE
  // ==========================================

  const guardarInmueble = (inmuebleGuardado) => {

    setInmuebles((inmueblesActuales) => {

      let nuevosInmuebles;


      if (inmuebleEditando) {

        nuevosInmuebles =
          inmueblesActuales.map((inmueble) => {

            if (
              inmueble.id === inmuebleEditando.id
            ) {

              return inmuebleGuardado;

            }

            return inmueble;

          });

      } else {

        nuevosInmuebles = [
          ...inmueblesActuales,
          inmuebleGuardado
        ];

      }


      localStorage.setItem(
        "inmuebles",
        JSON.stringify(nuevosInmuebles)
      );


      return nuevosInmuebles;

    });


    setPantalla("admin");

    setInmuebleEditando(null);

  };


  // ==========================================
  // EDITAR INMUEBLE
  // ==========================================

  const editarInmueble = (id) => {

    const inmueble = inmuebles.find(
      (inmueble) => inmueble.id === id
    );


    if (!inmueble) {

      alert(
        "No se encontró el inmueble."
      );

      return;

    }


    setInmuebleEditando(inmueble);

    setPantalla("formulario");

  };


  // ==========================================
  // ELIMINAR INMUEBLE
  // ==========================================

  const eliminarInmueble = (id) => {

    const confirmar = window.confirm(
      "¿Estás seguro de que deseas eliminar este inmueble?"
    );


    if (!confirmar) {
      return;
    }


    setInmuebles((inmueblesActuales) => {

      const nuevosInmuebles =
        inmueblesActuales.filter(
          (inmueble) => inmueble.id !== id
        );


      localStorage.setItem(
        "inmuebles",
        JSON.stringify(nuevosInmuebles)
      );


      return nuevosInmuebles;

    });

  };


  // ==========================================
  // VOLVER AL PANEL
  // ==========================================

  const volverPanel = () => {

    setPantalla("admin");

    setInmuebleEditando(null);

  };


  // ==========================================
  // IR A CITAS
  // ==========================================

  const irCitas = () => {

    setPantalla("citas");

  };


  // ==========================================
  // VOLVER A PROPIEDADES
  // ==========================================

  const volverPropiedades = () => {

    setPantalla("admin");

  };


  // ==========================================
  // SELECCIONAR INMUEBLE
  // ==========================================

  const seleccionarInmueble = (inmueble) => {

    setInmuebleSeleccionado(inmueble);

    setPantalla("detalles");

  };


  // ==========================================
  // VOLVER AL LISTADO
  // ==========================================

  const volverListado = () => {

    setInmuebleSeleccionado(null);

    setPantalla("cliente");

  };


  // ==========================================
  // SOLICITAR CITA
  // ==========================================

  const solicitarCita = () => {

    if (!usuarioRegistrado) {

      alert(
        "Debes iniciar sesión para solicitar una cita."
      );

      return;

    }


    if (!inmuebleSeleccionado) {

      alert(
        "No se ha seleccionado ningún inmueble."
      );

      return;

    }


    setPantalla("formularioCita");

  };


  // ==========================================
  // GUARDAR CITA
  // ==========================================

  const guardarCita = (nuevaCita) => {

    const citasGuardadas =
      localStorage.getItem("citas");


    const citasActuales =
      citasGuardadas
        ? JSON.parse(citasGuardadas)
        : [];


    const nuevasCitas = [
      ...citasActuales,
      nuevaCita
    ];


    localStorage.setItem(
      "citas",
      JSON.stringify(nuevasCitas)
    );


    alert(
      "¡Solicitud de cita enviada correctamente!"
    );


    setPantalla("detalles");

  };


  // ==========================================
  // VOLVER DEL FORMULARIO DE CITA
  // ==========================================

  const volverFormularioCita = () => {

    setPantalla("detalles");

  };


  // ==========================================
  // RETURN
  // ==========================================

  return (
    <>


      {/* LOGIN */}

      {pantalla === "login" && (

        <Login

          irRegistro={() =>
            setPantalla("registro")
          }

          iniciarSesion={iniciarSesion}

        />

      )}


      {/* REGISTRO */}

      {pantalla === "registro" && (

        <RegistroUsuario

          volverLogin={() =>
            setPantalla("login")
          }

          registrarUsuario={registrarUsuario}

        />

      )}


      {/* ADMIN */}

      {pantalla === "admin" && (

        <PanelAdmin

          usuario={usuarioRegistrado}

          agregarInmueble={agregarInmueble}

          cerrarSesion={cerrarSesion}

          inmuebles={inmuebles}

          editarInmueble={editarInmueble}

          eliminarInmueble={eliminarInmueble}

          irCitas={irCitas}

        />

      )}


      {/* FORMULARIO INMUEBLE */}

      {pantalla === "formulario" && (

        <RegistroInmueble

          volverPanel={volverPanel}

          guardarInmueble={guardarInmueble}

          inmuebleEditando={inmuebleEditando}

        />

      )}


      {/* PANEL CITAS */}

      {pantalla === "citas" && (

        <PanelCitas

          usuario={usuarioRegistrado}

          volverPropiedades={volverPropiedades}

          cerrarSesion={cerrarSesion}

        />

      )}


      {/* CLIENTE */}

      {pantalla === "cliente" && (

        <div className="cliente-page">

          <Header

            usuario={usuarioRegistrado}

            cerrarSesion={cerrarSesion}

          />

          <main>

            <ListaInmuebles

              inmuebles={inmuebles}

              onSeleccionarInmueble={
                seleccionarInmueble
              }

            />

          </main>

          <Footer />

        </div>

      )}


      {/* DETALLE */}

      {pantalla === "detalles" && (

        <DetalleInmueble

          inmueble={inmuebleSeleccionado}

          volverListado={volverListado}

          solicitarCita={solicitarCita}

        />

      )}


      {/* FORMULARIO DE CITA */}

      {pantalla === "formularioCita" && (

        <FormularioCita

          inmueble={inmuebleSeleccionado}

          usuario={usuarioRegistrado}

          volverDetalle={volverFormularioCita}

          guardarCita={guardarCita}

        />

      )}

    </>
  );
}

export default App;