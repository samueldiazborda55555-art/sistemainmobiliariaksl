import React from "react";
import "../App.css";

export default function DetalleInmueble({
  inmueble,
  volverListado,
  solicitarCita,
}) {

  // ==========================================
  // VALIDAR INMUEBLE
  // ==========================================

  if (!inmueble) {

    return (

      <div className="cliente-page">

        <main className="detalle-container">

          <div className="detalle-card">

            <h2>
              No se encontró el inmueble
            </h2>

            <button
              className="btn-volver"
              onClick={volverListado}
            >
              ← Volver al listado
            </button>

          </div>

        </main>

      </div>

    );

  }


  // ==========================================
  // PRECIO
  // ==========================================

  const precioFormateado = inmueble.precio
    ? `$${Number(inmueble.precio).toLocaleString("es-CO")}`
    : "Precio no disponible";


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
            onClick={volverListado}
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

      <main className="detalle-container">


        {/* VOLVER */}

        <button
          className="btn-volver"
          onClick={volverListado}
        >
          ← Volver al listado
        </button>


        {/* IMAGEN */}

        <div className="detalle-imagen-container">

          {inmueble.fotografia ? (

            <img
              src={inmueble.fotografia}
              alt={
                inmueble.nombre ||
                "Imagen del inmueble"
              }
              className="detalle-imagen"
            />

          ) : (

            <div className="detalle-imagen-vacia">

              🏠

              <span>
                Sin fotografía
              </span>

            </div>

          )}

        </div>


        {/* INFORMACIÓN */}

        <div className="detalle-contenido">


          {/* COLUMNA IZQUIERDA */}

          <div className="detalle-principal">

            <span className="detalle-tipo">

              {inmueble.tipo ||
                "INMUEBLE"}

            </span>


            <h1 className="detalle-titulo">

              {inmueble.nombre ||
                inmueble.titulo ||
                "Inmueble"}

            </h1>


            <p className="detalle-ubicacion">

              📍{" "}

              {inmueble.direccion ||
                inmueble.ubicacion ||
                inmueble.ciudad ||
                "Ubicación no disponible"}

            </p>


            {/* CARACTERÍSTICAS */}

            <div className="detalle-caracteristicas">


              {/* ÁREA */}

              <div className="detalle-caracteristica">

                <span className="detalle-icono">
                  📐
                </span>

                <div>

                  <span className="detalle-label">
                    Área
                  </span>

                  <strong>

                    {inmueble.area
                      ? `${inmueble.area} m²`
                      : "No disponible"}

                  </strong>

                </div>

              </div>


              {/* HABITACIONES */}

              <div className="detalle-caracteristica">

                <span className="detalle-icono">
                  🛏️
                </span>

                <div>

                  <span className="detalle-label">
                    Habitaciones
                  </span>

                  <strong>

                    {inmueble.habitaciones ??
                      "No disponible"}

                  </strong>

                </div>

              </div>


              {/* BAÑOS */}

              <div className="detalle-caracteristica">

                <span className="detalle-icono">
                  🚿
                </span>

                <div>

                  <span className="detalle-label">
                    Baños
                  </span>

                  <strong>

                    {inmueble.banos ??
                      "No disponible"}

                  </strong>

                </div>

              </div>

            </div>


            {/* DESCRIPCIÓN */}

            <section className="detalle-descripcion">

              <h2>
                Descripción
              </h2>

              <p>

                {inmueble.descripcion ||
                  "Este inmueble no tiene una descripción registrada."}

              </p>

            </section>

          </div>


          {/* ====================================
              SIDEBAR
          ==================================== */}

          <aside className="detalle-sidebar">


            {/* PRECIO */}

            <div className="detalle-precio">

              <span>
                Precio de venta
              </span>

              <strong>
                {precioFormateado}
              </strong>

            </div>


            {/* AGENCIA */}

            <div className="detalle-agencia">

              <span className="detalle-label">
                COMERCIALIZADO POR
              </span>


              <div className="detalle-agencia-info">

                <div className="detalle-agencia-icon">
                  🏢
                </div>

                <div>

                  <strong>
                    Inmobiliaria Premium
                  </strong>

                  <span>
                    Agencia certificada
                  </span>

                </div>

              </div>

            </div>


            {/* ==================================
                SOLICITAR CITA
            ================================== */}

            <button
              className="btn-detalle-principal"
              onClick={solicitarCita}
            >
              Solicitar cita
            </button>


            {/* LLAMAR */}

            <button
              className="btn-detalle-secundario"
              onClick={() =>
                alert(
                  "Puedes comunicarte con la inmobiliaria."
                )
              }
            >
              📞 Llamar
            </button>

          </aside>

        </div>

      </main>


      {/* FOOTER */}

      <footer className="footer">

        <p>
          © 2026 Inmobiliaria Premium
        </p>

      </footer>

    </div>

  );

}