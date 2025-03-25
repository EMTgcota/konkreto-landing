import React, { useState } from "react";
import logo from "../assets/white-logo.png";
import purpleLogo from "../assets/purple-logo.png";
import { NavLink, useLocation } from "react-router";
import ModalLogin from "./modal-login";

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const location = useLocation();
  return (
    <>
      <nav
        className={`py-2 px-8 flex justify-between items-center relative md:pr-10 transition-all duration-300 
      ${
        location.pathname === "/information"
          ? "bg-transparent text-purple-700"
          : "bg-purple-700 text-white"
      }`}
      >
        <img
          src={location.pathname === "/information" ? purpleLogo : logo}
          alt="Logo"
          className="w-[180px]"
        />

        {/* Botón hamburguesa para móviles */}
        <button
          className="md:hidden text-[1.2rem]"
          onClick={() => setOpenMenu(!openMenu)}
        >
          ☰
        </button>

        {/* Contenedor de los links */}
        <div
          className={`md:flex space-x-4 absolute md:static top-full left-0 w-full md:w-auto p-4 md:p-0 
        ${
          location.pathname === "/information"
            ? "bg-transparent "
            : "bg-purple-700"
        } 
        md:bg-transparent ${openMenu ? "block" : "hidden"}`}
        >
          <NavLink to="/" className="block md:inline sm:my-3">
            <button
              className={`hover:font-bold block md:inline  px-4  rounded ${
                location.pathname === "/" ? "bg-purple-900 py-2  mt-1 " : "mt-3"
              }
           `}
            >
              Inicio
            </button>
          </NavLink>

          <NavLink to="/information" className="block md:inline sm:my-3">
            <button
              className={`hover:font-bold sm:my-1 px-4 py-2 rounded 
            ${
              location.pathname === "/information"
                ? "border border-purple-700 font-bold"
                : "text-white mt-3"
            }`}
            >
              Nosotros
            </button>
          </NavLink>

          <button
            className="block md:inline hover:font-bold sm:my-3"
            onClick={() => setOpenModal(true)}
          >
            Iniciar sesión
          </button>

          <button className="block md:inline hover:font-bold ">Contacto</button>

          <button
            className={`px-4 py-2 max-h-[60px] mt-1 font-bold block md:inline rounded 
          ${
            location.pathname === "/information"
              ? "bg-purple-700 text-white"
              : "bg-white text-purple-700"
          }`}
          >
            Descargar App
          </button>
        </div>
      </nav>

      <ModalLogin
        isOpen={openModal}
        setIsOpen={(value) => setOpenModal(value)}
      ></ModalLogin>
    </>
  );
};
