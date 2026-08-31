import { useState } from "react";
import TarjetaInmueble from "./TarjetaInmueble";

export default function ListaInmuebles({
  inmuebles,
  onSeleccionarInmueble,
}) {
  const [busqueda, setBusqueda] = useState("");
  const [ciudadFiltro, setCiudadFiltro] = useState("Todas");

  const inmueblesFiltrados = inmuebles.filter((item) => {
    const coincideCiudad =
      ciudadFiltro === "Todas" ||
      item.ciudad === ciudadFiltro;

    const nombreInmueble =
      item.tipoInmueble || "";

    const coincideNombre =
      nombreInmueble
        .toLowerCase()
        .includes(busqueda.toLowerCase());

    return coincideCiudad && coincideNombre;
  });

  return (
    <div className="container">
      <h2>Catálogo de Propiedades</h2>

      <div
        style={{
          display: "flex",
          gap: "1rem",
          marginBottom: "1.5rem",
        }}
      >
        <input
          type="text"
          placeholder="Buscar por nombre..."
          value={busqueda}
          onChange={(e) =>
            setBusqueda(e.target.value)
          }
          style={{
            flex: 1,
            padding: "0.5rem",
          }}
        />

        <select
          value={ciudadFiltro}
          onChange={(e) =>
            setCiudadFiltro(e.target.value)
          }
        >
          <option value="Todas">
            Todas las ciudades
          </option>

          <option value="Bogotá">
            Bogotá
          </option>

          <option value="Medellín">
            Medellín
          </option>
        </select>
      </div>

      <div className="grid-container">
        {inmueblesFiltrados.length === 0 ? (
          <p>
            No hay inmuebles disponibles.
          </p>
        ) : (
          inmueblesFiltrados.map((inmueble) => (
            <TarjetaInmueble
              key={inmueble.id}
              inmueble={inmueble}
              onSeleccionar={onSeleccionarInmueble}
            />
          ))
        )}
      </div>
    </div>
  );
}