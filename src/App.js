/* eslint-disable react/jsx-no-undef */
import "./App.css";
import { useEffect, useState } from "react";
import logo from "./assets/white-logo.png";
import purpleLogo from "./assets/purple-logo.png";

import { motion } from "framer-motion";
import { Navbar } from "./components/navbar";

function App() {
  const [index, setIndex] = useState(0);
  const texts = [
    <>
      <p className="text-purple-700 font-bold">
        <span className="font-normal">Control total de los</span> documentos y
        procesos legales <span className="font-normal">de forma</span>
      </p>
      <p className="text-purple-700 font-bold">
        100% segura, efectiva y económica
      </p>
    </>,
    <>
      <p className="text-purple-700 font-bold">
        <span className="font-normal">Segundo msj</span> documentos y procesos
        legales <span className="font-normal">de forma</span>
      </p>
      <p className="text-purple-700 font-bold">
        100% segura, efectiva y económica
      </p>
    </>,
    <>
      <p className="text-purple-700 font-bold">
        <span className="font-normal">Tercer msj</span> documentos y procesos
        legales <span className="font-normal">de forma</span>
      </p>
      <p className="text-purple-700 font-bold">
        100% segura, efectiva y económica
      </p>
    </>,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="min-h-screen bg-purple-100 text-gray-800">
      {/* Navbar */}
      <Navbar activeRoute={"home"}></Navbar>
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
      <section className="bg-purple-700 p-10 py-10 pb-20 flex justify-center text-center">
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
      <section className=" bg-white p-10 py-10 flex justify-center text-center">
        <div className="max-w-2xl">
          <p className="text-3xl font-bold text-purple-700 pb-10">
            ¿Cómo funciona?
          </p>
          <img
            src="https://media.istockphoto.com/id/1298333137/es/vector/reproductor-multimedia-de-redes-sociales-plantilla-de-sitio-de-redes-sociales-con.jpg?s=612x612&w=0&k=20&c=WKaIEE4e8Ww49XjMRESIQUaTMeW6fiBvCUU3Orf5gPA="
            alt=""
            className="w-[700px]  py-5 item-center text-center object-contain mx-auto br-10"
          ></img>
        </div>
      </section>
      <section className=" bg-sky-200 p-10 py-10 flex justify-center text-center">
        <div className="max-w-2xl">
          <p className="text-3xl font-bold text-purple-700 ">
            Konkreto es la plataforma
          </p>
          <p className="text-3xl font-bold text-purple-700 ">Que te ayuda a:</p>

          <div className="flex flex-col items-center justify-center h-40">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="text-xl pb-10 font-semibold text-center"
            >
              {texts[index]}
            </motion.div>
            <div className="flex mt-4 space-x-2 ">
              {texts.map((_, i) => (
                <div
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2 w-2 rounded-full transition-all duration-300 cursor-pointer ${
                    i === index ? "bg-blue-500 w-4" : "bg-gray-300"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/*Section contact*/}
      <section className="flex justify-center items-center py-20 bg-gray-100">
        <div className="bg-purple-200 p-8 rounded-lg shadow-lg w-full max-w-4xl flex flex-col md:flex-row items-center">
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
    </div>
  );
}

export default App;
