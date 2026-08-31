
import React from "react";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Columna 1: Información de la Inmobiliaria */}
        <div className="footer-col">
          <h3>Inmobiliaria KSL</h3>
          <p>Encuentra el hogar o propiedad de tus sueños con nosotros.</p>
        </div>

        <div className="footer-col">
          <h4>Contacto</h4>
          <p>📍 Dirección: Calle Principal #123</p>
          <p>📞 Teléfono: +57 300 123 4567</p>
          <p>✉️ Correo: contacto@inmobiliariaksl.com</p>
        </div>

        <div className="footer-col">
          <h4>Atención al Cliente</h4>
          <p>Lunes a Viernes: 8:00 AM - 6:00 PM</p>
          <p>Sábados: 9:00 AM - 1:00 PM</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Inmobiliaria KSL. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}