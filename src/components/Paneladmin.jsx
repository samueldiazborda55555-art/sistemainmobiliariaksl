function PanelAdmin({
  usuario,
  agregarInmueble,
  cerrarSesion,
  inmuebles,
  editarInmueble,
  eliminarInmueble,
  irCitas,
}) {

  const total = inmuebles.length;

  const disponibles = inmuebles.filter(
    (inmueble) =>
      inmueble.estado === "Disponible"
  ).length;

  const negociacion = inmuebles.filter(
    (inmueble) =>
      inmueble.estado === "En negociación"
  ).length;

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

        <nav>

          <button className="menu-activo">
            Propiedades
          </button>

          <button
            onClick={irCitas}
          >
            Citas
          </button>

        </nav>

        <button
          className="cerrar-sesion"
          onClick={cerrarSesion}
        >
          ↪ Cerrar sesión
        </button>

      </aside>

      <main className="admin-content">

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

          <div className="estadistica">

            <span>
              DISPONIBLES
            </span>

            <strong>
              {disponibles}
            </strong>

          </div>

          <div className="estadistica">

            <span>
              NEGOCIACIÓN
            </span>

            <strong>
              {negociacion}
            </strong>

          </div>

        </section>

        <section className="tabla-inmuebles">

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

            inmuebles.map((inmueble) => (

              <div
                className="fila-inmueble"
                key={inmueble.id}
              >

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

                <span>
                  {inmueble.ciudad}
                </span>

                <strong>
                  {formatearPrecio(
                    inmueble.precio
                  )}
                </strong>

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

                <div className="acciones">

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