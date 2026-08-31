function PanelAdmin({
  usuario,
  agregarInmueble,
  cerrarSesion,
  inmuebles,
  editarInmueble,
  eliminarInmueble,
  irCitas,
}) {

  // ==========================================
  // ESTADÍSTICAS
  // ==========================================

  const total = inmuebles.length;

  const disponibles = inmuebles.filter(
    (inmueble) =>
      inmueble.estado === "Disponible"
  ).length;

  const negociacion = inmuebles.filter(
    (inmueble) =>
      inmueble.estado === "En negociación"
  ).length;


  // ==========================================
  // FORMATO DEL PRECIO
  // ==========================================

  const formatearPrecio = (precio) => {

    return Number(precio).toLocaleString(
      "es-CO",
      {
        style: "currency",
        currency: "COP",
        maximumFractionDigits: 0,
      }
    );

  };


  return (

    <div className="admin-panel">

      {/* ======================================
          BARRA LATERAL
      ====================================== */}

      <aside className="admin-sidebar">

        {/* LOGO */}

        <div className="admin-logo">

          <div className="logo-cuadro">
            A
          </div>

          <span>
            Admin
          </span>

        </div>


        {/* MENÚ */}

        <nav>

          {/* PROPIEDADES */}

          <button className="menu-activo">
            Propiedades
          </button>


          {/* CITAS */}

          <button
            onClick={irCitas}
          >
            Citas
          </button>

        </nav>


        {/* CERRAR SESIÓN */}

        <button
          className="cerrar-sesion"
          onClick={cerrarSesion}
        >
          ↪ Cerrar sesión
        </button>

      </aside>


      {/* ======================================
          CONTENIDO PRINCIPAL
      ====================================== */}

      <main className="admin-content">

        {/* ENCABEZADO */}

        <header className="admin-header">

          <div>

            <span className="admin-subtitulo">
              PANEL DE ADMINISTRACIÓN
            </span>

            <h1>
              Gestión de inmuebles
            </h1>

          </div>


          <button
            className="btn-agregar"
            onClick={agregarInmueble}
          >
            + Agregar
          </button>

        </header>


        {/* ====================================
            ESTADÍSTICAS
        ==================================== */}

        <section className="estadisticas">

          {/* TOTAL */}

          <div className="estadistica">

            <span>
              TOTAL
            </span>

            <strong>
              {total}
            </strong>

          </div>


          {/* DISPONIBLES */}

          <div className="estadistica">

            <span>
              DISPONIBLES
            </span>

            <strong>
              {disponibles}
            </strong>

          </div>


          {/* NEGOCIACIÓN */}

          <div className="estadistica">

            <span>
              NEGOCIACIÓN
            </span>

            <strong>
              {negociacion}
            </strong>

          </div>

        </section>


        {/* ====================================
            TABLA DE INMUEBLES
        ==================================== */}

        <section className="tabla-inmuebles">

          {/* ENCABEZADOS */}

          <div className="tabla-header">

            <span>
              INMUEBLE
            </span>

            <span>
              CIUDAD
            </span>

            <span>
              PRECIO
            </span>

            <span>
              ESTADO
            </span>

            <span>
              ACCIONES
            </span>

          </div>


          {/* SI NO HAY INMUEBLES */}

          {inmuebles.length === 0 ? (

            <div className="sin-inmuebles">

              <p>
                No hay inmuebles registrados.
              </p>

              <button
                onClick={agregarInmueble}
              >
                + Registrar primer inmueble
              </button>

            </div>

          ) : (

            /* MOSTRAR INMUEBLES */

            inmuebles.map((inmueble) => (

              <div
                className="fila-inmueble"
                key={inmueble.id}
              >

                {/* INMUEBLE */}

                <div className="info-inmueble">

                  {inmueble.fotografia ? (

                    <img
                      src={inmueble.fotografia}
                      alt={
                        inmueble.tipoInmueble
                      }
                    />

                  ) : (

                    <div className="sin-foto">
                      🏠
                    </div>

                  )}


                  <div>

                    <strong>
                      {inmueble.tipoInmueble}
                    </strong>

                    <small>
                      {inmueble.area
                        ? `${inmueble.area} m²`
                        : "— m²"}
                    </small>

                  </div>

                </div>


                {/* CIUDAD */}

                <span>
                  {inmueble.ciudad}
                </span>


                {/* PRECIO */}

                <strong>
                  {formatearPrecio(
                    inmueble.precio
                  )}
                </strong>


                {/* ESTADO */}

                <span
                  className={
                    inmueble.estado ===
                    "Disponible"
                      ? "estado disponible"
                      : inmueble.estado ===
                        "En negociación"
                      ? "estado negociacion"
                      : "estado"
                  }
                >
                  {inmueble.estado}
                </span>


                {/* ACCIONES */}

                <div className="acciones">

                  {/* EDITAR */}

                  <button
                    type="button"
                    title="Editar inmueble"
                    onClick={() =>
                      editarInmueble(
                        inmueble.id
                      )
                    }
                  >
                    ✎
                  </button>


                  {/* ELIMINAR */}

                  <button
                    type="button"
                    title="Eliminar inmueble"
                    onClick={() =>
                      eliminarInmueble(
                        inmueble.id
                      )
                    }
                  >
                    🗑
                  </button>

                </div>

              </div>

            ))

          )}

        </section>

      </main>

    </div>

  );

}

export default PanelAdmin;