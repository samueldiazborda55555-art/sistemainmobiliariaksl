export default function TarjetaInmueble({
  inmueble,
  onSeleccionar,
}) {
  return (
    <div className="property-card">

      {inmueble.fotografia ? (
        <img
          src={inmueble.fotografia}
          alt={inmueble.tipoInmueble}
        />
      ) : (
        <div className="sin-foto">
          🏠
        </div>
      )}

      <div className="property-info">

  <h4>
    {inmueble.tipoInmueble}
  </h4>

  <p>
    📍 {inmueble.ciudad}
  </p>

  <p className="precio">
    ${Number(inmueble.precio).toLocaleString("es-CO")}
  </p>

  <div className="property-details">

    <span>
      📐 {inmueble.area || 0} m²
    </span>

    <span>
      🛏 {inmueble.habitaciones || 0}
    </span>

    <span>
      🚿 {inmueble.banos || 0}
    </span>

  </div>

  <button
    className="btn-accent"
    onClick={() => onSeleccionar(inmueble)}
  >
    Ver detalles ›
  </button>

</div>
    </div>
  );
}