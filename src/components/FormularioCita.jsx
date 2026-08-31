import { useState } from "react";
import "../App.css";

export default function FormularioCita({
  inmueble,
  usuario,
  volverDetalle,
  guardarCita,
}) {

  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [mensaje, setMensaje] = useState("");


  // ==========================================
  // GUARDAR CITA
  // ==========================================

  const enviarSolicitud = (e) => {

    e.preventDefault();


    if (!fecha || !hora) {

      alert(
        "Por favor selecciona la fecha y la hora."
      );

      return;

    }


    const nuevaCita = {

      id: Date.now(),

      cliente:
        usuario?.nombre ||
        "Cliente",

      correo:
        usuario?.correo ||
        "Sin correo",

      inmueble:
        inmueble?.nombre ||
        inmueble?.titulo ||
        "Inmueble",

      fecha: fecha,

      hora: hora,

      estado: "Pendiente",

      mensaje: mensaje,

    };


    guardarCita(nuevaCita);

  };


  // ==========================================
  // FECHA MÍNIMA
  // ==========================================

  const fechaMinima =
    new Date()
      .toISOString()
      .split("T")[0];


  return (

    <div className="cliente-page">


      {/* ======================================
          HEADER
      ====================================== */}

      <header className="header">

        <div className="header-logo">

          🏢 Inmobiliaria

          <strong>
            Premium
          </strong>

        </div>


        <nav className="header-nav">

          <button
            className="header-link"
            onClick={volverDetalle}
          >
            Propiedades
          </button>

          <button className="header-link">
            Servicios
          </button>

          <button className="profile-btn">
            👤
          </button>

        </nav>

      </header>


      {/* ======================================
          CONTENIDO
      ====================================== */}

      <main className="formulario-cita-container">


        {/* VOLVER */}

        <button
          className="btn-volver"
          onClick={volverDetalle}
        >
          ← Volver al inmueble
        </button>


        {/* ====================================
            TARJETA
        ==================================== */}

        <div className="formulario-cita-card">


          {/* HEADER */}

          <div className="formulario-cita-header">

            <span className="formulario-cita-label">
              SOLICITUD DE VISITA
            </span>

            <h1>
              Solicitar cita
            </h1>

            <p>
              Completa los datos para solicitar
              una visita al inmueble.
            </p>

          </div>


          {/* ==================================
              RESUMEN INMUEBLE
          ================================== */}

          <div className="cita-inmueble-resumen">

            <div className="cita-inmueble-icon">
              🏠
            </div>

            <div>

              <span>
                INMUEBLE
              </span>

              <strong>

                {inmueble?.nombre ||
                  inmueble?.titulo ||
                  "Inmueble"}

              </strong>

              <small>

                {inmueble?.direccion ||
                  inmueble?.ciudad ||
                  "Ubicación no disponible"}

              </small>

            </div>

          </div>


          {/* ==================================
              FORMULARIO
          ================================== */}

          <form
            onSubmit={enviarSolicitud}
            className="formulario-cita"
          >


            {/* NOMBRE */}

            <div className="campo-cita">

              <label>
                Nombre
              </label>

              <input
                type="text"
                value={
                  usuario?.nombre || ""
                }
                readOnly
              />

            </div>


            {/* CORREO */}

            <div className="campo-cita">

              <label>
                Correo electrónico
              </label>

              <input
                type="email"
                value={
                  usuario?.correo || ""
                }
                readOnly
              />

            </div>


            {/* FECHA */}

            <div className="campo-cita">

              <label>
                Fecha de visita
              </label>

              <input
                type="date"
                value={fecha}
                min={fechaMinima}
                onChange={(e) =>
                  setFecha(e.target.value)
                }
                required
              />

            </div>


            {/* HORA */}

            <div className="campo-cita">

              <label>
                Hora de visita
              </label>

              <select
                value={hora}
                onChange={(e) =>
                  setHora(e.target.value)
                }
                required
              >

                <option value="">
                  Selecciona una hora
                </option>

                <option value="09:00 AM">
                  09:00 AM
                </option>

                <option value="10:00 AM">
                  10:00 AM
                </option>

                <option value="11:00 AM">
                  11:00 AM
                </option>

                <option value="12:00 PM">
                  12:00 PM
                </option>

                <option value="02:00 PM">
                  02:00 PM
                </option>

                <option value="03:00 PM">
                  03:00 PM
                </option>

                <option value="04:00 PM">
                  04:00 PM
                </option>

                <option value="05:00 PM">
                  05:00 PM
                </option>

              </select>

            </div>


            {/* MENSAJE */}

            <div className="campo-cita campo-mensaje">

              <label>
                Mensaje adicional
              </label>

              <textarea
                value={mensaje}
                onChange={(e) =>
                  setMensaje(e.target.value)
                }
                placeholder="¿Tienes alguna pregunta o solicitud?"
                rows="4"
              />

            </div>


            {/* ==================================
                BOTONES
            ================================== */}

            <div className="cita-botones">

              <button
                type="button"
                className="btn-cita-cancelar"
                onClick={volverDetalle}
              >
                Cancelar
              </button>


              <button
                type="submit"
                className="btn-cita-enviar"
              >
                Solicitar cita
              </button>

            </div>

          </form>

        </div>

      </main>


      {/* ======================================
          FOOTER
      ====================================== */}

      <footer className="footer">

        <p>
          © 2026 Inmobiliaria Premium
        </p>

      </footer>

    </div>

  );

}