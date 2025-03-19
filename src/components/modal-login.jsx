import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaWhatsapp,
  FaLock,
  FaAt,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import purpleLogo from "../assets/purple-logo.png";
import { FaFacebookF } from "react-icons/fa6";

const ModalLogin = ({ isOpen, setIsOpen }) => {
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-purple-600 bg-opacity-60">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        className="bg-white p-6 rounded-2xl shadow-lg max-w-md w-full relative"
      >
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
          onClick={() => setIsOpen(false)}
        >
          <IoMdClose fontSize={24} color="purple" />
        </button>

        <div className="mt-4 justify-items-center">
          <img
            src={purpleLogo}
            alt=""
            className="w-[200px] text-center mb-10"
          />
          <div className="relative mb-3 w-full px-5">
            <FaAt
              color="purple"
              className="absolute left-7 top-1/2 transform -translate-y-1/2 text-gray-500"
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              className={`w-full pl-10 p-2 border-b-2 outline-none transition-all ${
                emailFocused ? "border-purple-600" : "border-gray-300"
              }`}
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
            />
          </div>
          <div className="relative mb-3 w-full px-5">
            <FaLock
              color="purple"
              className="absolute left-7 top-1/2 transform -translate-y-1/2 text-gray-500"
            />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Contraseña"
              className={`w-full pl-10 p-2 border-b-2 outline-none transition-all ${
                passwordFocused ? "border-purple-600" : "border-gray-300"
              }`}
              onFocus={() => setPasswordFocused(true)}
              onBlur={() => setPasswordFocused(false)}
            />
            {!showPassword ? (
              <FaEye
                onClick={() => setShowPassword(true)}
                color="purple"
                className="absolute right-7 top-1/2 transform -translate-y-1/2 text-gray-500"
              />
            ) : (
              <FaEyeSlash
                onClick={() => setShowPassword(false)}
                color="purple"
                className="absolute right-7 top-1/2 transform -translate-y-1/2 text-gray-500"
              />
            )}
          </div>
          <p className="text-center font-semibold text-sm text-purple-700 cursor-pointer mb-10">
            ¿Olvidaste tu contraseña?
          </p>
        </div>
        <div className="mt-4">
          <button className="w-full bg-purple-600 text-white hover:bg-purple-700 py-3 rounded-sm">
            Iniciar sesión
          </button>
        </div>
        <p className="text-center text-gray-500 text-sm mt-3 cursor-pointer mb-10">
          ¿Aún no tienes cuenta?{" "}
          <span className="text-gray-700 font-semibold">Regístrate aquí</span>
        </p>
        <div className="flex justify-center gap-4 mt-20 ml-2">
          <div className="bg-purple-700 items-end flex px-1 pt-1 rounded-md">
            <FaFacebookF
              color="white"
              size={23}
              className="text-blue-600 cursor-pointer"
            />
          </div>
          <div className="bg-purple-700 items-center flex p-1 rounded-md">
            <FaInstagram
              color="white"
              size={24}
              className="text-pink-500 cursor-pointer"
            />
          </div>
          <div className="bg-purple-700 items-center flex p-1 rounded-md">
            <FaWhatsapp
              color="white"
              size={24}
              className="text-green-500 cursor-pointer"
            />
          </div>
        </div>
        {/**Terms section */}
        <div className="mt-8 text-center text-sm text-purple-700 font-semibold">
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
          <p className="mt-2">Copyright © 2025.</p>
        </div>
      </motion.div>
    </div>
  );
};

export default ModalLogin;
