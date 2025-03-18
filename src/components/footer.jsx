import React from "react";
import logo from "../assets/white-logo.png";

const Footer = () => {
  return (
    <footer className="bg-purple-700 text-white py-8">
      <div className=" w-full lg:pl-[11%] mb-7 pl-6">
        <div className="flex flex-col sm:align-center md:items-start">
          <img alt="" src={logo} className="w-[200px]"></img>
          <div className="flex items-center ml-5 space-x-3 mt-2">
            <button className="bg-white p-2 rounded-full">
              <img
                src="/facebook-icon.svg"
                alt="Facebook"
                className="w-6 h-6"
              />
            </button>
            <button className="bg-white p-2 rounded-full">
              <img
                src="/instagram-icon.svg"
                alt="Instagram"
                className="w-6 h-6"
              />
            </button>
            <button className="bg-white p-2 rounded-full">
              <img
                src="/whatsapp-icon.svg"
                alt="WhatsApp"
                className="w-6 h-6"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo y redes sociales */}
        <div>
          <p>Dirección</p>
          <p>Teléfono : 123-456-7890</p>
        </div>
        {/* Enlaces principales */}
        <div>
          <h3 className="font-semibold">Principal</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Inicio
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Nosotros
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        {/* Soporte */}
        <div>
          <h3 className="font-semibold">Soporte</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Duis pulvinar
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Duis pulvinar
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold">Suscríbete al newsletter</h3>
          <p className="text-sm mt-2">Suscríbete para recibir noticias</p>
          <input
            type="email"
            placeholder="Email"
            className="w-full mt-2 p-2 rounded text-black"
          />
        </div>
      </div>

      {/* Copyright y links legales */}
      <div className="mt-8 text-center text-sm">
        <p>
          <a href="#" className="hover:underline">
            Términos y condiciones
          </a>{" "}
          |
          <a href="#" className="hover:underline">
            {" "}
            Aviso de privacidad
          </a>
        </p>
        <p className="mt-2">Copyright © 2022.</p>
      </div>
    </footer>
  );
};

export default Footer;
