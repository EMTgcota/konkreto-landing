/* eslint-disable react/jsx-no-undef */
import "./App.css";
import { useState } from "react";
import logo from "./assets/white-logo.png";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="min-h-screen bg-purple-100 text-gray-800">
      {/* Navbar */}
      <nav className="bg-purple-700 text-white p-4 flex justify-between items-center relative">
        <h1 className="text-xl md:pl-10 font-bold">KONKRETO</h1>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
        <div
          className={`md:flex space-x-4 absolute md:static top-full left-0 w-full md:w-auto bg-purple-700 md:bg-transparent p-4 md:p-0 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <button className="bg-purple-900 px-4 py-2 rounded block md:inline">
            Inicio
          </button>
          <button className="block md:inline">Nosotros</button>
          <button className="block md:inline">Iniciar sesión</button>
          <button className="block md:inline">Contacto</button>
          <button className="bg-white text-purple-700 px-4 py-2 rounded block md:inline">
            Descargar App
          </button>
        </div>
      </nav>
      {/* Hero Section */}
      <header
        className="flex items-center justify-start py-20 px-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/phone-background.png')" }}
      >
        <div className="max-w-xl py-28 lg:pl-32">
          <h2 className="text-4xl text-left font-semibold text-purple-700">
            Tecnología amigable para
          </h2>
          <h2 className="text-4xl text-left  font-bold text-purple-700">
            gestión y protección de negocios inmobiliarios
          </h2>
        </div>
      </header>

      {/* Information Section */}
      <section className="bg-white p-10 py-20 flex justify-center text-center">
        <div className="max-w-2xl">
          <p className="text-xl ">
            Somos una empresa{" "}
            <span className="font-bold text-purple-700">100% mexicana</span>{" "}
            enfocada en crear una solución integral de principio a fin, con
            tecnología y seguridad para el mercado inmobiliario.
          </p>
          <p className="mt-4 text-xl text-gray-700">
            Nuestra misión es empoderar a todos nuestros usuarios con
            herramientas tecnológicas que brinden efectividad, seguridad y
            confianza a sus transacciones, para juntos ofrecer mejores
            experiencias y mejorar las prácticas del mercado.
          </p>
        </div>
      </section>

      <section className="bg-purple-700 p-10 py-20 flex justify-center text-center">
        <div className="max-w-2xl">
          <img
            src={logo}
            alt=""
            className="w-[400px] pb-5 item-center text-center object-contain mx-auto"
          ></img>
          <p className="text-lg font-bold text-white">
            Comprometidos{" "}
            <span className="font-normal">
              con ayudar alas agencias y asesores inmobiliarios
            </span>
            <br></br>
            <span> en todo el proceso </span>
            <span className="font-normal text-white">
              de compraventa y renta de inmuebles,{" "}
            </span>{" "}
          </p>
          <p className="mt-4 text-lg text-white font-bold">
            Konkreto <span className="font-normal">es una </span> plataforma
            digital amigable <span className="font-normal"> y</span> para todos.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
