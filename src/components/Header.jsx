import { Outlet, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import avatarimg from "../assets/logoAsistente.png";
import { useState } from 'react';
const Header = ({ type }) => {
  const estilos = {
    background: "../assets/background.jpg", // Cambia el color aquí
  };
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 ${type === "1" ? "bg-[#2A4C4D]" : "bg-[#F5F6DD]"}`} style={estilos}>
      <div className={`flex fixed top-0 ${type === "1" ? "bg-[#2A4C4D]" : "bg-[#F5F6DD]"} w-full h-24 justify-between pt-10`}>
        
        {/* Logo */}
        <a href="/flowcoworks-Beta/" className={`text-right fixed z-50 top-[1rem] ${type === "1" ? "text-yellow-50 hover:text-yellow-100" : "text-[#2A4C4D]"} transition-all hover:font-bold text-2xl ml-20 leading-5`}>
          <h3>FLOW</h3>
          <h3>CO-</h3>
          <h3>WORKS</h3>
        </a>
        

        {/* Menu Hamburguesa */}
        <div className="w-full flex justify-end  items-center pr-4 md:hidden">
          <button onClick={toggleMenu} className={` ${type == '1' ? 'text-[#F5F6DD]' : 'text-[#2A4C4D]'} focus:outline-none`}>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Navegación */}
        <nav className={`my-auto fixed z-50 top-30 right-0 ${type === "1" ? "text-yellow-50" : "text-[#2A4C4D]"} text-sm`}>
          <ul className={`space-x-10 mr-10 hidden ${isOpen ? 'hidden' : null} md:flex`}>
            <li className="border-r-2 py-2 my-auto border-[#DFE466]">
              <Link className={`mr-10 transition-all ${type === "1" ? "hover:text-white" : ""} hover:font-bold`} to="/">
                {t("inicio")}
              </Link>
            </li>
            <li className="border-r-2 py-2 my-auto border-[#DFE466]">
              <Link className={`mr-10 transition-all ${type === "1" ? "hover:text-white" : ""} hover:font-bold`} to="/aboutUs">
                {t("nosotros")}
              </Link>
            </li>
            <li className="border-r-2 leading-4 w-28 my-auto border-[#DFE466]">
              <Link className={`mr-10 transition-all ${type === "1" ? "hover:text-white" : ""} hover:font-bold`} to="/plans">
                {t("planesYServicios")}
              </Link>
            </li>
            <li className="border-r-2 py-2 my-auto border-[#DFE466]">
              <Link className={`mr-10 transition-all ${type === "1" ? "hover:text-white" : ""} hover:font-bold`} to="/contact">
                {t("contacto")}
              </Link>
            </li>
            <li className="my-auto">
              <Link className={`mr-10 border-2 px-2 pb-1 ${type === "1" ? "hover:text-white" : ""} rounded-full border-[#DFE466] transition-all hover:font-bold`} target="_blank" to="https://flowcoworks.spaces.nexudus.com/login">
                {t("ingresar")}
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className={`md:hidden fixed top-24 right-0 w-full ${type === "1" ? "bg-[#2A4C4D]" : "bg-[#F5F6DD]"} shadow-md`}>
          <ul className="flex flex-col p-4">
            <li className="py-2">
              <Link className={`block ${type === "1" ? "text-yellow-50 hover:text-white" : "text-[#2A4C4D] hover:text-[#0b1213]"}`} to="/">
                {t("inicio")}
              </Link>
            </li>
            <li className="py-2">
              <Link className={`block ${type === "1" ? "text-yellow-50 hover:text-white" : "text-[#2A4C4D] hover:text-[#0b1213]"}`} to="/aboutUs">
                {t("nosotros")}
              </Link>
            </li>
            <li className="py-2">
              <Link className={`block ${type === "1" ? "text-yellow-50 hover:text-white" : "text-[#2A4C4D] hover:text-[#0b1213]"}`} to="/plans">
                {t("planesYServicios")}
              </Link>
            </li>
            <li className="py-2">
              <Link className={`block ${type === "1" ? "text-yellow-50 hover:text-white" : "text-[#2A4C4D] hover:text-[#0b1213]"}`} to="/contact">
                {t("contacto")}
              </Link>
            </li>
            <li className="py-2">
              <Link className={`block ${type === "1" ? "text-yellow-50 hover:text-white" : "text-[#2A4C4D] hover:text-[#0b1213]"}`} target="_blank" to="https://flowcoworks.spaces.nexudus.com/login">
                {t("ingresar")}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>

      <FloatingWhatsApp
        onClick={console.log("red")}
        accountName="Flow Coworks"
        avatar={avatarimg}
        darkMode
        chatMessage="Hola, le habla el equipo de Flow Coworks 🤝 En que podemos ayudarle?"
        placeholder="Consulta tus dudas con nosotros aquí."
        phoneNumber="+584142530642"
      />

      <Outlet />
    </>
  );
};

export default Header;
