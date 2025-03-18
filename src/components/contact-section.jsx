import React from "react";
import purpleLogo from "../assets/purple-logo.png";

const ContactSection = () => {
  return (
    <section className="flex justify-center items-center py-20 bg-white">
      <div className="bg-purple-200 p-8 rounded-lg shadow-lg w-full max-w-6xl md:mx-10 flex flex-col md:flex-row items-center">
        {/* Columna del formulario */}
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-purple-700 text-xl font-semibold mb-4">
            ¿Necesitas más información?
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Nombre*"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="tel"
              placeholder="Teléfono*"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="email"
              placeholder="Correo*"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <textarea
              placeholder="Comentarios"
              className="w-full p-2 border border-gray-300 rounded h-24"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-purple-700 text-white p-2 rounded hover:bg-purple-800"
            >
              Enviar
            </button>
          </form>
          <p className="text-sm text-gray-700 mt-4">
            ¿Tienes más preguntas?{" "}
            <a
              href="https://api.whatsapp.com/send/?phone=6681933275&text&type=phone_number&app_absent=0"
              className="text-purple-700 font-semibold"
            >
              Contáctanos por Whatsapp
            </a>
          </p>
        </div>

        {/* Columna del mensaje */}
        <div className="w-full md:w-1/2 p-4 flex flex-col items-center justify-center text-center">
          <h2 className="text-purple-800 text-2xl font-bold">
            Transforma tu negocio inmobiliario con
          </h2>
          <img alt="" className="w-[300px]" src={purpleLogo}></img>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
