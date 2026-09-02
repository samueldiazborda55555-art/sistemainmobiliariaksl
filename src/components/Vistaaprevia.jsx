function VistaPreviaCita({
  inmueble,
  usuario,
  fecha,
  hora,
  mensaje,
}) {
  return (
    <div className="vista-previa-cita">

      <div className="vista-previa-cita-titulo">
        <span>VISTA PREVIA</span>
        <h2>Resumen de la cita</h2>
        <p>
          Así se verá la solicitud antes de enviarla.
        </p>
      </div>

      <div className="vista-previa-cita-card">

        {/* INFORMACIÓN DEL INMUEBLE */}
        <div className="vista-cita-inmueble">

          <div className="vista-cita-icono">
            🏠
          </div>

          <div>
            <span>INMUEBLE</span>

            <h3>
              {inmueble?.nombre ||
                inmueble?.titulo ||
                "Inmueble"}
            </h3>

            <p>
              📍{" "}
              {inmueble?.direccion ||
                inmueble?.ciudad ||
                "Ubicación no disponible"}
            </p>
          </div>

        </div>

        {/* DATOS DEL CLIENTE */}
        <div className="vista-cita-datos">

          <div className="vista-cita-dato">
            <span>👤</span>

            <div>
              <small>CLIENTE</small>

              <strong>
                {usuario?.nombre ||
                  "Cliente"}
              </strong>
            </div>
          </div>

          <div className="vista-cita-dato">
            <span>✉️</span>

            <div>
              <small>CORREO</small>

              <strong>
                {usuario?.correo ||
                  "Sin correo"}
              </strong>
            </div>
          </div>

        </div>

        {/* FECHA Y HORA */}
        <div className="vista-cita-programacion">

          <div className="vista-cita-fecha">

            <span>📅</span>

            <div>
              <small>FECHA DE VISITA</small>

              <strong>
                {fecha
                  ? new Date(
                      fecha + "T00:00:00"
                    ).toLocaleDateString(
                      "es-CO",
                      {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      }
                    )
                  : "No seleccionada"}
              </strong>
            </div>

          </div>

          <div className="vista-cita-hora">

            <span>🕐</span>

            <div>
              <small>HORA DE VISITA</small>

              <strong>
                {hora ||
                  "No seleccionada"}
              </strong>
            </div>

          </div>

        </div>

        {/* MENSAJE */}
        <div className="vista-cita-mensaje">

          <small>
            MENSAJE ADICIONAL
          </small>

          <p>
            {mensaje ||
              "No se ha agregado ningún mensaje."}
          </p>

        </div>

        {/* ESTADO */}
        <div className="vista-cita-estado">

          <span>
            ESTADO DE LA SOLICITUD
          </span>

          <strong>
            Pendiente
          </strong>

        </div>

      </div>

    </div>
  );
}

export default VistaPreviaCita;