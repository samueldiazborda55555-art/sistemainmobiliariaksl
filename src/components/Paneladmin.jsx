function PanelAdmin({
  usuario,
  agregarInmueble,
  cerrarSesion,
}) {
  return (
    <div className="admin-panel">

      <aside className="admin-sidebar">

        <div className="admin-logo">
          <div className="logo-cuadro">A</div>
          <span>Admin</span>
        </div>

        <nav>
          <button className="menu-activo">
             Propiedades
          </button>

          <button>
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

            <h1>Gestión de inmuebles</h1>
          </div>

          <button
            className="btn-agregar"
            onClick={agregarInmueble}
          >
            + Agregar
          </button>

        </header>

        <section className="estadisticas">

          <div className="estadistica">
            <span>TOTAL</span>
            <strong>0</strong>
          </div>

          <div className="estadistica">
            <span>DISPONIBLES</span>
            <strong>0</strong>
          </div>

          <div className="estadistica">
            <span>NEGOCIACIÓN</span>
            <strong>0</strong>
          </div>

        </section>

        <section className="tabla-inmuebles">

          <div className="tabla-header">
            <span>INMUEBLE</span>
            <span>CIUDAD</span>
            <span>PRECIO</span>
            <span>ESTADO</span>
            <span>ACCIONES</span>
          </div>

          <div className="sin-inmuebles">
            <p>No hay inmuebles registrados.</p>

            <button onClick={agregarInmueble}>
              + Registrar primer inmueble
            </button>
          </div>

        </section>

      </main>

    </div>
  );
}

export default PanelAdmin;
