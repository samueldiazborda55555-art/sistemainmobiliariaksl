import { useState, useEffect } from "react";
import "../App.css";




function RegistroInmueble({
  volverPanel,
  guardarInmueble,
  inmuebleEditando,
}) {

  const formularioInicial = {
    fotografia: "",
    codigo: "",
    tipoInmueble: "",
    direccion: "",
    ciudad: "",
    barrio: "",
    tipoOperacion: "",
    precio: "",
    estado: "",
    area: "",
    habitaciones: "",
    banos: "",
    garajes: "",
    descripcion: "",
  };


  const [formulario, setFormulario] = useState(
    formularioInicial
  );


  const [preview, setPreview] = useState("");

  useEffect(() => {

    if (inmuebleEditando) {

      setFormulario({

        fotografia:
          inmuebleEditando.fotografia || "",

        codigo:
          inmuebleEditando.codigo || "",

        tipoInmueble:
          inmuebleEditando.tipoInmueble || "",

        direccion:
          inmuebleEditando.direccion || "",

        ciudad:
          inmuebleEditando.ciudad || "",

        barrio:
          inmuebleEditando.barrio || "",

        tipoOperacion:
          inmuebleEditando.tipoOperacion || "",

        precio:
          inmuebleEditando.precio || "",

        estado:
          inmuebleEditando.estado || "",

        area:
          inmuebleEditando.area || "",

        habitaciones:
          inmuebleEditando.habitaciones || "",

        banos:
          inmuebleEditando.banos || "",

        garajes:
          inmuebleEditando.garajes || "",

        descripcion:
          inmuebleEditando.descripcion || "",

      });

      setPreview(
        inmuebleEditando.fotografia || ""
      );

    } else {

      setFormulario({
        ...formularioInicial,
      });

      setPreview("");

    }

  }, [inmuebleEditando]);

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormulario(
      (formularioAnterior) => ({

        ...formularioAnterior,

        [name]: value,

      })
    );

  };

  const handleImagen = (e) => {

    const archivo = e.target.files[0];

    if (!archivo) {
      return;
    }


    const reader = new FileReader();


    reader.onloadend = () => {

      setFormulario(
        (formularioAnterior) => ({

          ...formularioAnterior,

          fotografia: reader.result,

        })
      );


      setPreview(reader.result);

    };


    reader.readAsDataURL(archivo);

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (
      !formulario.codigo ||
      !formulario.tipoInmueble ||
      !formulario.direccion ||
      !formulario.ciudad ||
      !formulario.tipoOperacion ||
      !formulario.precio ||
      !formulario.estado
    ) {

      alert(
        "Por favor completa los campos obligatorios."
      );

      return;

    }

    if (inmuebleEditando) {

      const inmuebleActualizado = {

        ...inmuebleEditando,

        ...formulario,

        id: inmuebleEditando.id,

        fechaRegistro:
          inmuebleEditando.fechaRegistro,

      };


      guardarInmueble(
        inmuebleActualizado
      );


      alert(
        "¡Inmueble actualizado correctamente!"
      );


      return;

    }

    const nuevoInmueble = {

      id: Date.now(),

      ...formulario,

      fechaRegistro:
        new Date().toISOString(),

    };


    guardarInmueble(
      nuevoInmueble
    );


    alert(
      "¡Inmueble registrado correctamente!"
    );

  };

  return (

    <div className="registro-page">

      <header className="registro-header">

        <div>

          <span className="registro-label">
            GESTIÓN DE INMUEBLES 2026
          </span>


          <h1>

            {inmuebleEditando
              ? "Editar inmueble"
              : "Registrar inmueble"}

          </h1>


          <p>

            {inmuebleEditando

              ? "Modifica la información de la propiedad."

              : "Ingresa la información de la propiedad."}

          </p>

        </div>


        <button
          type="button"
          className="btn-volver"
          onClick={volverPanel}
        >

          ← Volver

        </button>

      </header>

      <form
        className="registro-form"
        onSubmit={handleSubmit}
      >

        <section className="form-section">

          <div className="section-title">

            <span>01</span>

            <div>

              <h2>
                Información básica
              </h2>

              <p>
                Información principal del inmueble
              </p>

            </div>

          </div>


          <div className="form-grid">

            <div className="form-group fotografia-group">

              <label>
                Fotografía
              </label>


              <div className="image-upload">


                {preview ? (

                  <img
                    src={preview}
                    alt="Vista previa"
                  />

                ) : (

                  <div className="upload-placeholder">

                    <span>+</span>

                    <p>
                      Agregar fotografía
                    </p>

                    <small>
                      JPG, PNG
                    </small>

                  </div>

                )}


                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImagen}
                />

              </div>

            </div>

            <div className="form-group">

              <label>
                Código del inmueble *
              </label>


              <input
                type="text"
                name="codigo"
                placeholder="Ej. INM-001"
                value={formulario.codigo}
                onChange={handleChange}
              />

            </div>

            <div className="form-group">

              <label>
                Tipo de inmueble *
              </label>


              <select
                name="tipoInmueble"
                value={formulario.tipoInmueble}
                onChange={handleChange}
              >

                <option value="">
                  Seleccionar tipo
                </option>

                <option value="Casa">
                  Casa
                </option>

                <option value="Apartamento">
                  Apartamento
                </option>

                <option value="Penthouse">
                  Penthouse
                </option>

                <option value="Local">
                  Local
                </option>

                <option value="Oficina">
                  Oficina
                </option>

                <option value="Lote">
                  Lote
                </option>

              </select>

            </div>

            <div className="form-group">

              <label>
                Dirección *
              </label>


              <input
                type="text"
                name="direccion"
                placeholder="Ej. Calle 123 # 45-67"
                value={formulario.direccion}
                onChange={handleChange}
              />

            </div>

            <div className="form-group">

              <label>
                Ciudad *
              </label>


              <input
                type="text"
                name="ciudad"
                placeholder="Ej. Bogotá"
                value={formulario.ciudad}
                onChange={handleChange}
              />

            </div>

            <div className="form-group">

              <label>
                Barrio
              </label>


              <input
                type="text"
                name="barrio"
                placeholder="Ej. Chapinero"
                value={formulario.barrio}
                onChange={handleChange}
              />

            </div>

          </div>

        </section>

        <section className="form-section">

          <div className="section-title">

            <span>02</span>

            <div>

              <h2>
                Información comercial
              </h2>

              <p>
                Información relacionada con la operación
              </p>

            </div>

          </div>


          <div className="form-grid">

            <div className="form-group">

              <label>
                Tipo de operación *
              </label>


              <select
                name="tipoOperacion"
                value={formulario.tipoOperacion}
                onChange={handleChange}
              >

                <option value="">
                  Seleccionar operación
                </option>

                <option value="Venta">
                  Venta
                </option>

                <option value="Arriendo">
                  Arriendo
                </option>

              </select>

            </div>

            <div className="form-group">

              <label>
                Precio *
              </label>


              <input
                type="number"
                name="precio"
                placeholder="Ej. 350000000"
                min="0"
                value={formulario.precio}
                onChange={handleChange}
              />

            </div>

            <div className="form-group">

              <label>
                Estado del inmueble *
              </label>


              <select
                name="estado"
                value={formulario.estado}
                onChange={handleChange}
              >

                <option value="">
                  Seleccionar estado
                </option>

                <option value="Disponible">
                  Disponible
                </option>

                <option value="En negociación">
                  En negociación
                </option>

                <option value="Vendido">
                  Vendido
                </option>

                <option value="Arrendado">
                  Arrendado
                </option>

              </select>

            </div>

          </div>

        </section>

        <section className="form-section">

          <div className="section-title">

            <span>03</span>

            <div>

              <h2>
                Características
              </h2>

              <p>
                Características físicas del inmueble
              </p>

            </div>

          </div>


          <div className="form-grid characteristics">

            <div className="form-group">

              <label>
                Área (m²)
              </label>


              <input
                type="number"
                name="area"
                min="0"
                placeholder="Ej. 120"
                value={formulario.area}
                onChange={handleChange}
              />

            </div>

            <div className="form-group">

              <label>
                Habitaciones
              </label>


              <input
                type="number"
                name="habitaciones"
                min="0"
                placeholder="0"
                value={formulario.habitaciones}
                onChange={handleChange}
              />

            </div>

            <div className="form-group">

              <label>
                Baños
              </label>


              <input
                type="number"
                name="banos"
                min="0"
                placeholder="0"
                value={formulario.banos}
                onChange={handleChange}
              />

            </div>

            <div className="form-group">

              <label>
                Garajes
              </label>


              <input
                type="number"
                name="garajes"
                min="0"
                placeholder="0"
                value={formulario.garajes}
                onChange={handleChange}
              />

            </div>

          </div>

        </section>

        <section className="form-section">

          <div className="section-title">

            <span>04</span>

            <div>

              <h2>
                Descripción
              </h2>

              <p>
                Describe las características principales
              </p>

            </div>

          </div>


          <div className="form-group">

            <label>
              Descripción general del inmueble
            </label>


            <textarea
              name="descripcion"
              rows="6"
              placeholder="Escribe aquí una descripción del inmueble..."
              value={formulario.descripcion}
              onChange={handleChange}
            />

          </div>

          

        </section>

        <div className="form-actions">


          <button
            type="button"
            className="btn-cancelar"
            onClick={volverPanel}
          >

            Cancelar

          </button>


          <button
            type="submit"
            className="btn-registrar"
          >

            {inmuebleEditando
              ? "Guardar cambios"
              : "Registrar inmueble"}

          </button>


        </div>

      </form>

    </div>

  );

}

export default RegistroInmueble;