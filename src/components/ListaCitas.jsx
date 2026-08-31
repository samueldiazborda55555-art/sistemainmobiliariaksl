//SARA
/*Módulo 9 – Gestión de citas

La inmobiliaria podrá visualizar las
solicitudes: Los estados pueden ser:
Pendiente
Aceptada
Rechazada*/

//SARA
/*Módulo 9 – Gestión de citas

La inmobiliaria podrá visualizar las
solicitudes: Los estados pueden ser:
Pendiente
Aceptada
Rechazada*/

// SARA
// PANEL DE GESTIÓN DE CITAS
// Permite visualizar, confirmar y rechazar citas

import { useEffect, useState } from "react";
import "../App.css";

function PanelCitas({
  usuario,
  volverPropiedades,
  cerrarSesion,
}) {

  // ==========================================
  // CITAS INICIALES
  // ==========================================

  const citasIniciales = [
    {
      id: 1,
      cliente: "Valentina Ríos",
      correo: "v.rios@gmail.com",
      inmueble: "Penthouse Vista Cielo",
      fecha: "2026-07-05",
      hora: "10:00 AM",
      estado: "Pendiente",
    },

    {
      id: 2,
      cliente: "Andrés Morales",
      correo: "andres.morales@gmail.com",
      inmueble: "Casa Colonial Laureles",
      fecha: "2026-07-06",
      hora: "03:00 PM",
      estado: "Confirmada",
    },

    {
      id: 3,
      cliente: "Catalina Vargas",
      correo: "c.vargas@gmail.com",
      inmueble: "Apartamento Bosque Norte",
      fecha: "2026-07-07",
      hora: "11:30 AM",
      estado: "Pendiente",
    },

    {
      id: 4,
      cliente: "Felipe Gutiérrez",
      correo: "f.gutierrez@gmail.com",
      inmueble: "Lote Zona Rosa",
      fecha: "2026-07-08",
      hora: "02:00 PM",
      estado: "Rechazada",
    },
  ];


  // ==========================================
  // CARGAR CITAS
  // ==========================================

  const citasGuardadas =
    localStorage.getItem("citas");


  const [citas, setCitas] = useState(
    citasGuardadas
      ? JSON.parse(citasGuardadas)
      : citasIniciales
  );


  // ==========================================
  // FILTRO
  // ==========================================

  const [filtro, setFiltro] = useState("Todas");


  // ==========================================
  // GUARDAR CITAS
  // ==========================================

  useEffect(() => {

    localStorage.setItem(
      "citas",
      JSON.stringify(citas)
    );

  }, [citas]);


  // ==========================================
  // CONFIRMAR CITA
  // ==========================================

  const confirmarCita = (id) => {

    setCitas((citasActuales) => {

      const nuevasCitas =
        citasActuales.map((cita) => {

          if (cita.id === id) {

            return {
              ...cita,
              estado: "Confirmada",
            };

          }

          return cita;

        });


      return nuevasCitas;

    });

  };


  // ==========================================
  // RECHAZAR CITA
  // ==========================================

  const rechazarCita = (id) => {

    const confirmar = window.confirm(
      "¿Estás seguro de que deseas rechazar esta cita?"
    );


    if (!confirmar) {
      return;
    }


    setCitas((citasActuales) => {

      return citasActuales.map((cita) => {

        if (cita.id === id) {

          return {
            ...cita,
            estado: "Rechazada",
          };

        }

        return cita;

      });

    });

  };


  // ==========================================
  // VER CITA
  // ==========================================

  const verCita = (cita) => {

    alert(
      `DETALLES DE LA CITA\n\n` +
      `Cliente: ${cita.cliente}\n` +
      `Correo: ${cita.correo}\n` +
      `Inmueble: ${cita.inmueble}\n` +
      `Fecha: ${cita.fecha}\n` +
      `Hora: ${cita.hora}\n` +
      `Estado: ${cita.estado}`
    );

  };


  // ==========================================
  // FILTRAR CITAS
  // ==========================================

  const citasFiltradas = citas.filter((cita) => {

    if (filtro === "Todas") {
      return true;
    }

    return cita.estado === filtro;

  });


  // ==========================================
  // CONTADORES
  // ==========================================

  const pendientes = citas.filter(
    (cita) => cita.estado === "Pendiente"
  ).length;


  const confirmadas = citas.filter(
    (cita) => cita.estado === "Confirmada"
  ).length;


  const rechazadas = citas.filter(
    (cita) => cita.estado === "Rechazada"
  ).length;


  // ==========================================
  // RETURN
  // ==========================================

  return (

    <div className="citas-page">


      {/* ======================================
          SIDEBAR
      ====================================== */}

      <aside className="citas-sidebar">


        {/* LOGO / ADMIN */}

        <div className="citas-admin">

          <div className="citas-admin-icon">
            🏠
          </div>

          <span>
            Admin
          </span>

        </div>


        {/* MENÚ */}

        <nav className="citas-menu">


          {/* PROPIEDADES */}

          <button
            className="citas-menu-item"
            onClick={volverPropiedades}
          >

            <span className="menu-icon">
              ♧
            </span>

            <span>
              Propiedades
            </span>

          </button>


          {/* CITAS */}

          <button
            className="citas-menu-item active"
          >

            <span className="menu-icon">
              ▣
            </span>

            <span>
              Citas
            </span>

          </button>


        </nav>


        {/* CERRAR SESIÓN */}

        <button
          className="citas-cerrar"
          onClick={cerrarSesion}
        >

          <span>
            ↪
          </span>

          Cerrar sesión

        </button>


      </aside>


      {/* ======================================
          CONTENIDO PRINCIPAL
      ====================================== */}

      <main className="citas-content">


        {/* HEADER */}

        <div className="citas-header">

          <div>

            <span className="citas-label">
              PANEL DE ADMINISTRACIÓN
            </span>

            <h1>
              Gestión de citas
            </h1>

          </div>

        </div>


        {/* ======================================
            TARJETAS DE ESTADO
        ====================================== */}

        <div className="citas-stats">


          {/* PENDIENTES */}

          <div className="cita-stat-card">

            <span className="stat-label">
              PENDIENTES
            </span>

            <strong className="stat-number pendiente-number">
              {pendientes}
            </strong>

          </div>


          {/* CONFIRMADAS */}

          <div className="cita-stat-card">

            <span className="stat-label">
              CONFIRMADAS
            </span>

            <strong className="stat-number confirmada-number">
              {confirmadas}
            </strong>

          </div>


          {/* RECHAZADAS */}

          <div className="cita-stat-card">

            <span className="stat-label">
              RECHAZADAS
            </span>

            <strong className="stat-number rechazada-number">
              {rechazadas}
            </strong>

          </div>


        </div>


        {/* ======================================
            TABLA
        ====================================== */}

        <div className="citas-table-container">


          {/* FILTROS */}

          <div className="citas-filtros">

            <span className="filtro-icon">
              ♢
            </span>


            <button
              className={
                filtro === "Todas"
                  ? "filtro-btn activo"
                  : "filtro-btn"
              }
              onClick={() => setFiltro("Todas")}
            >
              Todas
            </button>


            <button
              className={
                filtro === "Pendiente"
                  ? "filtro-btn activo"
                  : "filtro-btn"
              }
              onClick={() => setFiltro("Pendiente")}
            >
              Pendiente
            </button>


            <button
              className={
                filtro === "Confirmada"
                  ? "filtro-btn activo"
                  : "filtro-btn"
              }
              onClick={() => setFiltro("Confirmada")}
            >
              Confirmada
            </button>


            <button
              className={
                filtro === "Rechazada"
                  ? "filtro-btn activo"
                  : "filtro-btn"
              }
              onClick={() => setFiltro("Rechazada")}
            >
              Rechazada
            </button>

          </div>


          {/* TABLA */}

          <div className="tabla-scroll">

            <table className="citas-table">

              <thead>

                <tr>

                  <th>
                    CLIENTE
                  </th>

                  <th>
                    INMUEBLE
                  </th>

                  <th>
                    FECHA
                  </th>

                  <th>
                    HORA
                  </th>

                  <th>
                    ESTADO
                  </th>

                  <th>
                  </th>

                </tr>

              </thead>


              <tbody>

                {citasFiltradas.length > 0 ? (

                  citasFiltradas.map((cita) => (

                    <tr key={cita.id}>


                      {/* CLIENTE */}

                      <td>

                        <div className="cliente-info">

                          <strong>
                            {cita.cliente}
                          </strong>

                          <small>
                            {cita.correo}
                          </small>

                        </div>

                      </td>


                      {/* INMUEBLE */}

                      <td>

                        <span className="inmueble-cita">

                          {cita.inmueble}

                        </span>

                      </td>


                      {/* FECHA */}

                      <td>
                        {cita.fecha}
                      </td>


                      {/* HORA */}

                      <td>

                        <span className="hora-cita">
                          ◷ {cita.hora}
                        </span>

                      </td>


                      {/* ESTADO */}

                      <td>

                        <span
                          className={
                            `estado-cita ${
                              cita.estado === "Pendiente"
                                ? "estado-pendiente"
                                : cita.estado === "Confirmada"
                                ? "estado-confirmada"
                                : "estado-rechazada"
                            }`
                          }
                        >

                          {cita.estado.toUpperCase()}

                        </span>

                      </td>


                      {/* ACCIONES */}

                      <td>

                        <div className="acciones-cita">


                          {/* CONFIRMAR */}

                          {cita.estado === "Pendiente" && (

                            <button
                              className="accion confirmar"
                              title="Confirmar cita"
                              onClick={() =>
                                confirmarCita(cita.id)
                              }
                            >
                              ✓
                            </button>

                          )}


                          {/* RECHAZAR */}

                          {cita.estado === "Pendiente" && (

                            <button
                              className="accion rechazar"
                              title="Rechazar cita"
                              onClick={() =>
                                rechazarCita(cita.id)
                              }
                            >
                              ×
                            </button>

                          )}


                          {/* VER */}

                          <button
                            className="accion ver"
                            title="Ver detalles"
                            onClick={() =>
                              verCita(cita)
                            }
                          >
                            ◉
                          </button>


                        </div>

                      </td>


                    </tr>

                  ))

                ) : (

                  <tr>

                    <td
                      colSpan="6"
                      className="sin-citas"
                    >

                      No hay citas para este filtro.

                    </td>

                  </tr>

                )}

              </tbody>

            </table>

          </div>

        </div>

      </main>

    </div>

  );

}

export default PanelCitas;