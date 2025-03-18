import React, { useState } from "react";
import { Navbar } from "../components/navbar";
import {
  FaCalendarAlt,
  FaHome,
  FaFileInvoiceDollar,
  FaHandshake,
  FaSearchDollar,
} from "react-icons/fa";
import Footer from "../components/footer";
import ContactSection from "../components/contact-section";
import working from "../assets/working.jpg";
import hands from "../assets/hands.jpg";
import agency from "../assets/agency.jpg";

const Info = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const benefits = [
    {
      icon: "🌍",
      title: "Primera plataforma",
      description: "de real estate integral",
    },
    {
      icon: "🔒",
      title: "Seguridad",
      description: "360°",
    },
    {
      icon: "⚙️",
      title: "Facilitador",
      description: "de herramientas digitales",
    },
    {
      icon: "💰",
      title: "Ahorro",
      description: "en tiempos y costos operativos",
    },
    {
      icon: "📂",
      title: "Base de datos",
      description: "actualizada",
    },
    {
      icon: "📊",
      title: "Reportes de actividad",
      description: "del inmueble",
    },
    {
      icon: "💬",
      title: "Seguimiento oportuno",
      description: "a interesados y propiedades",
    },
  ];
  const solutions = [
    {
      icon: <FaHome />,
      title: "Administración",
      description:
        "de propiedades publicadas en portales líderes en el mercado.",
      color: "text-orange-500",
    },
    {
      icon: <FaCalendarAlt />,
      title: "Agendar",
      description:
        "a través de un calendario las visitas al inmueble, presencial o remoto en tiempo real.",
      color: "text-orange-500",
    },
    {
      icon: <FaSearchDollar />,
      title: "Verificar",
      description:
        "la identidad de las personas para garantizar la seguridad del propietario o corredor.",
      color: "text-orange-500",
    },
    {
      icon: <FaHandshake />,
      title: "Cerrar operación",
      description:
        "con la firma digital del contrato (DocuSign), con plena validez legal.",
      color: "text-orange-500",
    },
    {
      icon: <FaFileInvoiceDollar />,
      title: "Facturación",
      description:
        "Facilitamos la facturación para todas tus transacciones inmobiliarias.",
      color: "text-orange-500",
    },
    // Agrega más según la imagen
  ];

  const steps = [
    {
      number: "01",
      title: "Registro de usuario",
      description: "Crea tu cuenta y accede a todos los servicios.",
    },
    {
      number: "02",
      title: "Verificación de seguridad",
      description: "Confirmamos tu identidad para mayor seguridad.",
    },
    {
      number: "03",
      title: "Publicar / Buscar inmueble",
      description: "Encuentra o publica propiedades de forma sencilla.",
    },
    {
      number: "04",
      title: "Agendar cita",
      description: "Programa visitas en tiempo real con los propietarios.",
    },
    {
      number: "05",
      title: "Verificación de seguridad",
      description: "Revisamos los antecedentes del inmueble y del propietario.",
    },
    {
      number: "06",
      title: "Ofertar con garantía",
      description: "Asegura tu propuesta con un respaldo financiero.",
    },
    {
      number: "07",
      title: "Konkreta operación",
      description: "Cierra la compra con total seguridad y respaldo legal.",
    },
    {
      number: "08",
      title: "Depósito de compra / venta",
      description: "Realiza el pago seguro a través de la plataforma.",
    },
  ];
  const faqs = [
    {
      question:
        "¿Proin a fringilla ex donec magna quam nisi consectetur adipiscing elit?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pulvinar ex in nisi mattis, at venenatis magna finibus.",
    },
    {
      question:
        "¿Proin a fringilla ex donec magna quam nisi consectetur adipiscing elit?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pulvinar ex in nisi mattis, at venenatis magna finibus.",
    },
    {
      question:
        "¿Proin a fringilla ex donec magna quam nisi consectetur adipiscing elit?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pulvinar ex in nisi mattis, at venenatis magna finibus.",
    },
    {
      question:
        "¿Proin a fringilla ex donec magna quam nisi consectetur adipiscing elit?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pulvinar ex in nisi mattis, at venenatis magna finibus.",
    },
    {
      question:
        "¿Proin a fringilla ex donec magna quam nisi consectetur adipiscing elit?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pulvinar ex in nisi mattis, at venenatis magna finibus.",
    },
  ];

  const toggleExpand = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className="min-h-screen bg-cyan-50 text-gray-800">
      <Navbar></Navbar>

      <header
        className="flex items-center justify-items-end py-32 px-10 bg-cover bg-center"
        style={{ backgroundImage: "url('/phone-background.png')" }}
      >
        <div className=" w-full py-28 lg:pr-40 justify-items-end">
          <h2 className="text-4xl text-left  font-semibold text-purple-700">
            <span className="font-normal"> Todas las herramientas</span>{" "}
            <br></br> para tu negocio inmobiliario
            <br></br> en un solo lugar
          </h2>
        </div>
      </header>

      <section className="bg-purple-700 p-10 py-14 mt-6 flex justify-center text-center">
        <div className="max-w-2xl">
          <p className="md:text-2xl sm:text-xl  text-white font-bold">
            Konkreto{" "}
            <span className="font-normal">
              es una solución que integra todas las{" "}
            </span>{" "}
            Herramientas
            <br />
            <span className="font-normal">
              para los negocios inmobiliarios en{" "}
            </span>
            un solo lugar.
          </p>
        </div>
      </section>

      {/* Why Konkreto section */}
      <section className="bg-purple-100 py-10 px-4">
        <h2 className="text-center text-4xl font-bold text-purple-700 mb-6 mt-10">
          ¿Por qué Konkreto?
        </h2>
        <div className="flex flex-wrap justify-center gap-6 my-16">
          {benefits.map((benefit) => (
            <div className="flex flex-col items-center text-center max-w-xs mx-5">
              <div className="text-4xl text-purple-700">{benefit.icon}</div>
              <h3 className="text-md font-bold text-orange-600 mt-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm font-semibold">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      {/* Cards section */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold text-purple-700">Solución</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mt-2">
          Integrarmos las mejores{" "}
          <span className="font-bold">herramientas</span> en un{" "}
          <span className="font-bold text-purple-500">
            solo lugar y a menor costo.
          </span>
        </p>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 mt-10 xl:mx-52 md:mx-10">
          {solutions.map((solution) => (
            <div className="flex bg-white shadow-md rounded-xl p-5 lg:max-w-[400px] border border-gray-200 min-h-[100px]">
              <div
                className={`flex items-center justify-center w-20 ${solution.color} text-5xl`}
              >
                {solution.icon}
              </div>

              {/* Contenedor de texto */}
              <div className="flex-1 flex flex-col justify-center text-left">
                <h3 className={`font-bold text-lg ${solution.color}`}>
                  {solution.title}
                </h3>
                <p className="text-gray-700">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/**how it works section */}

      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold text-purple-700">¿Cómo funciona?</h2>
        <p className="text-gray-700 max-w-2xl mx-auto mt-2">
          Trabaja mejor sin{" "}
          <span className="font-bold text-purple-500">trabajar de más</span>.
        </p>

        <div className="grid  lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 mt-10 mx-32">
          {steps.map((step, index) => (
            <div className="text-center space-y-3 ">
              <h3 className="text-4xl font-bold text-red-500">{step.number}</h3>
              <div className="bg-purple-200 text-purple-700 font-semibold py-4 ">
                {step.title}
              </div>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </section>
      {/** Gallery section */}
      <section className="flex flex-col items-center justify-center py-20 bg-purple-100 sm:px-5">
        <h2 className="text-3xl font-bold text-purple-700 mb-10">
          ¿Para quién es?
        </h2>

        <div className="grid md:grid-cols-3 lg:gap-36 md:gap-6 grid-cols-1 sm:px-3">
          {/* Corredor independiente */}
          <div className="flex flex-col items-center">
            <img
              src={working}
              alt="Corredor independiente"
              className="w-64 h-64 object-cover rounded-lg shadow-md"
            />
            <p className="mt-2 font-medium text-purple-700">
              Corredor independiente
            </p>
          </div>

          {/* Agencia inmobiliaria */}
          <div className="flex flex-col items-center">
            <img
              src={agency}
              alt="Agencia inmobiliaria"
              className="w-64 h-64 object-cover rounded-lg shadow-md"
            />
            <p className="mt-2 font-medium text-purple-700">
              Agencia inmobiliaria
            </p>
          </div>

          {/* Particular */}
          <div className="flex flex-col items-center">
            <img
              src={hands}
              alt="Particular"
              className="w-64 h-64 object-cover rounded-lg shadow-md"
            />
            <p className="mt-2 font-medium text-purple-700">Particular</p>
          </div>
        </div>
      </section>

      {/*Faqs Section */}
      <section className="flex flex-col items-center justify-center py-5 bg-white sm:px-5">
        <div className="bg-white p-8 rounded-lg  max-w-2xl mx-auto my-5">
          <h2 className="text-3xl font-semibold text-purple-700  text-center">
            Preguntas frecuentes
          </h2>
          <p className="text-purple-700 mb-8 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            pulvinar ex in nisi mattis, at venenatis magna finibus.
          </p>

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 shadow-md  border-solid border-2 border-darkgray-100 rounded-md py-5"
            >
              <div
                className="flex justify-between items-center bg-white-100 p-4 rounded-md cursor-pointer"
                onClick={() => toggleExpand(index)}
              >
                <p className="font-medium text-orange-600">{faq.question}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 transform transition-transform duration-300 text-orange-600 ${
                    expandedIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              {expandedIndex === index && (
                <div className="bg-white px-4 py-1 rounded-md mt-2">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      <ContactSection></ContactSection>

      <Footer></Footer>
    </div>
  );
};

export default Info;
