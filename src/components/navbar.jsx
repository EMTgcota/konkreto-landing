import React from "react";

export const Navbar = ({ activeRoute }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="bg-purple-700 text-white p-4 flex justify-between items-center relative  pr-20">
      <h1 className="text-xl md:pl-10 font-bold">KONKRETO</h1>
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      <div
        className={`md:flex space-x-4 absolute md:static top-full left-0 w-full md:w-auto bg-purple-700 md:bg-transparent p-4 md:p-0 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <button
          className={` block md:inline hover:font-bold ${
            activeRoute === "home"
              ? "bg-purple-900 px-4 py-2 rounded hover:font-normal"
              : null
          }`}
        >
          Inicio
        </button>
        <button className="block md:inline  hover:font-bold">Nosotros</button>
        <button className="block md:inline  hover:font-bold">
          Iniciar sesión
        </button>
        <button className="block md:inline  hover:font-bold">Contacto</button>
        <button className="bg-white text-purple-700 px-4 py-2  font-bold block md:inline">
          Descargar App
        </button>
      </div>
    </nav>
  );
};
