import logo1 from "../assets/Footer/logo_2.svg";
import logo2 from "../assets/Footer/logo.svg";
import { useTranslation } from "react-i18next";
import icon1 from "../assets/Footer/Asset_1.svg";
import icon2 from "../assets/Footer/Asset_2.svg";
import icon3 from "../assets/Footer/Asset_3.svg";

import icon1_2 from "../assets/Footer/Asset_1_2.svg";
import icon2_2 from "../assets/Footer/Asset_2_2.svg";
import icon3_2 from "../assets/Footer/Asset_3_2.svg";

const languages = [
  { code: "en", lang: "English" },
  { code: "es", lang: "Español" },
];

const Footer = ({ type }) => {
  const { i18n, t } = useTranslation();
  const changeLanguageF = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <footer
      className={`tracking-wide py-10 px-10 ${
        type == "1" ? "bg-[#F5F6DD]" : "bg-[#2A4C4D]"
      }`}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-9 gap-8 text-center text-sm opacity-100">
        <div className="dropdown dropdown-top my-auto col-span-2">
          <div
            tabIndex={0}
            role="button"
            className={`${type == "1" ? "text-[#2A4C4D]" : "text-yellow-50"} `}
          >
            ➤{i18n.language}
          </div>
          <ul
            tabIndex={0}
            className="menu mx-auto dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            {languages?.map((lng) => {
              return (
                <>
                  <button
                    key={lng.code}
                    onClick={() => changeLanguageF(lng.code)}
                    className={`${
                      i18n.language == lng.code ? "bg-gray-600" : null
                    } text-center mx-auto w-full`}
                  >
                    <img
                      className={`h-8 mx-auto`}
                      src={
                        lng.code == "es"
                          ? `https://img.icons8.com/?size=100&id=ZGEFKpJoPdJQ&format=png&color=000000`
                          : lng.code == "en"
                          ? `https://img.icons8.com/?size=100&id=yzSggttkqLf4&format=png&color=000000`
                          : null
                      }
                      alt=""
                    />
                  </button>
                </>
              );
            })}
          </ul>
        </div>

        <div className="my-auto relative right-10">
          <button
            onClick={() =>
              window.open(
                "/flowcoworks-Beta/20240820_TÉRMINOS_Y_CONDICIONES_DE_USO_WEB_FLOWORKS.pdf",
                "_blank"
              )
            }
            className={`hover:font-bold ${
              type == "1" ? "text-[#2A4C4D]" : "text-yellow-50"
            }`}
          >
            {t("footerTerminosYCondiciones")}
          </button>
        </div>

        <div className="my-auto">
          <a
            href="/flowcoworks-Beta/#/contact"
            className={`${
              type == "1" ? "text-[#2A4C4D]" : "text-yellow-50"
            } hover:font-bold`}
          >
            {t("footerContacto")}
          </a>
        </div>

        <div className="flex-grow mb-4 md:mb-0 ">
          <img
            src={type == "1" ? logo1 : logo2} // Asegúrate de cambiar esta ruta a la ubicación real de tu logo
            alt="Logo"
            className="h-16 relative left-5 mx-auto" // Ajusta el tamaño del logo aquí
          />
        </div>

        <a
          href="https://www.instagram.com/flowcoworks/"
          target="_blank"
          className="flex justify-start lg:justify-end text-center mb-4 md:mb-0 mt-5"
        >
          <img
            src={type == "1" ? icon1_2 : icon1}  // Asegúrate de cambiar esta ruta a la ubicación real de tu logo
            alt="Logo"
            className="h-8 " // Ajusta el tamaño del logo aquí
          />
        </a>

        <a
          href="https://www.facebook.com/profile.php?id=61566817420117"
          target="_blank"
          className="flex-grow text-center mb-4 md:mb-0  mt-5"
        >
          <img
            src={type == "1" ? icon2_2 : icon2} // Asegúrate de cambiar esta ruta a la ubicación real de tu logo
            alt="Logo"
            className="h-8 mx-auto " // Ajusta el tamaño del logo aquí
          />
        </a>

        <a
          href="https://www.linkedin.com/company/flow-coworks/"
          target="_blank"
          className="flex justify-start text-center mb-4 md:mb-0 mt-5"
        >
          <img
            src={type == "1" ? icon3_2 : icon3} // Asegúrate de cambiar esta ruta a la ubicación real de tu logo
            alt="Logo"
            className="h-8" // Ajusta el tamaño del logo aquí
          />
        </a>

        <div className="my-auto  sm:right-12 sm:relative">
          <h4
            className={`${type == "1" ? "text-[#2A4C4D]" : "text-yellow-50"}`}
          >
            ALL RIGHTS RESERVED TO FLOW COWORKS
          </h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
