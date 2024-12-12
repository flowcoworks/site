import { useTranslation } from "react-i18next";
import styles from "../estilos/Inicio.module.css";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { useEffect } from "react";

// ICONS
import icon1 from "../assets/Inicio/1x/Asset1.svg";
import icon2 from "../assets/Inicio/1x/Asset2.svg";
import icon3 from "../assets/Inicio/1x/Asset3.svg";
import icon4 from "../assets/Inicio/1x/Asset4.svg";
import icon5 from "../assets/Inicio/1x/Asset5.svg";
import icon6 from "../assets/Inicio/1x/Asset6.svg";
import icon7 from "../assets/Inicio/1x/Asset7.svg";
import icon8 from "../assets/Inicio/1x/crmIcon.svg";
import art1 from "../assets/Inicio/1x/Asset12.png";

// SLIDER IMAGES
import sliderimg1 from "../assets/Inicio/1x/sliderimg1.png";
import sliderimg2 from "../assets/Inicio/1x/sliderimg2.jpg";
import sliderimg3 from "../assets/Inicio/1x/sliderimg3.jpg";
import sliderimg4 from "../assets/Inicio/1x/sliderimg4.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Inicio = () => {
  const { i18n, t } = useTranslation();

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    window.addEventListener("scroll", function () {
      const image = document.getElementById("fixedImage");
      if (window.scrollY > window.innerHeight / 1.2) {
        image.style.display = "block"; // Muestra la imagen
      } else {
        image.style.display = "none"; // Oculta la imagen
      }
    });
  }, []);

  return (
    <>
      {/* SECCIÓN INICIO (FOTO) */}
      <Header type={"1"} />
      <div className={styles.fondo}>
        <h1
          className={`leading-tight -tracking-[.10em] text-4xl sm:text-6xl ${
            i18n.language == "en" ? "w-8/12" : "lg:w-4/12 md:w-4/6 w-4/5"
          } text-[#DFE466] mt-[17rem] sm:mt-[18rem] md:mt-[20rem] lg:mt-[20rem] 1680:mt-[20rem] 1920:mt-[44rem] bottom-0 left-0 mb-4 ml-5 sm:ml-16`}
        >
          {t("seccionInicioTexto1")}
        </h1>
        <p className="leading-normal text-white w-5/12 text-xs sm:text-sm  bottom-0 left-0 mb-4 ml-16">
          {t("seccionInicioTexto2")}
        </p>
      </div>

      {/* SECCIÓN #2 */}
      <div className="bg-[#2A4C4D] w-full pb-[5rem] sm:pb-[10rem]">
        <hr className="mt-24 border-none" />
        <img
          id="fixedImage"
          className="hidden w-[15rem] sm:w-[20rem] fixed top-32 pointer-events-none"
          src={art1}
          alt=""
        />
        <h1 className="text-4xl text-[#F5F6DD] mb-28 border-[2px]  -tracking-[.10em] rounded-full pt-1 pb-4 bg-[#2A4C4D] w-80 mt-20 mx-auto text-center">
          {t("seccionNosotrosTexto1")}
        </h1>

        {/* Columnas */}
        <div className="sm:grid grid-cols-4 pt-10">
          {/* CARD 1 */}
          <div className="mt-20 sm:mt-0 text-center">
            <img src={icon1} className="w-12 mx-auto" alt="" />
            <h3 className="textl-lg text-[#DFE466]  mt-3">
              {t("accesoPrivadoLabel")}
            </h3>
            {/* <p className="text-sm text-[#DFE466] leading-4 w-56 mx-auto text-justify">
              {t("accesoPrivadoContent")}
            </p> */}
          </div>
          <div className="mt-20 sm:mt-0 text-center">
            <img src={icon2} className="w-12 mx-auto" alt="" />
            <h3 className="textl-lg text-[#DFE466]  mt-3">
              {t("estacionamientoVIPLabel")}
            </h3>
            {/* <p className="text-sm text-[#DFE466] leading-4 w-56 mx-auto text-justify">
              {t("estacionamientoVIPContent")}
            </p> */}
          </div>
          <div className="mt-20 sm:mt-0 text-center">
            <img src={icon3} className="w-12 mx-auto" alt="" />
            <h3 className="textl-lg text-[#DFE466]  mt-3">
              {t("internetAltaVelocidadLabel")}
            </h3>
            {/* <p className="text-sm text-[#DFE466] leading-4 w-56 mx-auto text-justify">
              {t("internetAltaVelocidadContent")}
            </p> */}
          </div>
          <div className="mt-20 sm:mt-0 text-center">
            <img src={icon4} className="w-12 mx-auto" alt="" />
            <h3 className="textl-lg text-[#DFE466]  mt-3">
              {t("accesoBiometricoLabel")}
            </h3>
            {/* <p className="text-sm text-[#DFE466] leading-4 w-56 mx-auto text-justify">
              {t("accesoBiometricoContent")}
            </p> */}
          </div>
          <div className=" mt-20 text-center">
            <img src={icon5} className="w-12 mx-auto" alt="" />
            <h3 className="textl-lg text-[#DFE466]  mt-3">
              {t("cafeteriaLabel")}
            </h3>
            {/* <p className="text-sm text-[#DFE466] leading-4 w-56 mx-auto text-justify">
              {t("cafeteriaContent")}
            </p> */}
          </div>
          <div className=" mt-20 text-center">
            <img src={icon6} className="w-12 mx-auto" alt="" />
            <h3 className="textl-lg text-[#DFE466]  mt-3">
              {t("recepcionDePaquetesLabel")}
            </h3>
            {/* <p className="text-sm text-[#DFE466] leading-4 w-56 mx-auto text-justify">
              {t("recepcionDePaquetesContent")}
            </p> */}
          </div>
          <div className=" mt-16 text-center pt-2">
            {/* <div className="w-16 h-16 border-2 border-[#DFE466] rounded-full mx-auto"></div> */}
            <img src={icon8} className="w-16 mx-auto" alt="" />
            <h3 className="textl-lg text-[#DFE466]  mt-3">{t("crmLabel")}</h3>
            {/* <p className="text-sm text-[#DFE466] leading-4 w-56 mx-auto text-justify">
              {t("crmContent")}
            </p> */}
          </div>
          <div className=" mt-20 text-center">
            <img src={icon7} className="w-12 mx-auto" alt="" />
            <h3 className="textl-lg text-[#DFE466]  mt-3">
              {t("appYWebLabeL")}
            </h3>
            {/* <p className="text-sm text-[#DFE466] leading-4 w-56 mx-auto text-justify">
              {t("appYWebContent")}
            </p> */}
          </div>
        </div>
      </div>

      {/* SECCIÓN #3 */}
      <div className="bg-[#2A4C4D] w-full pb-20 sm:pb-36">
        <hr className=" border-none" />
        <h1 className="text-3xl sm:text-4xl border-[2px] text-[#DFE466] mb-10  -tracking-[.10em] rounded-full pt-1 pb-4 bg-[#2A4C4D] w-80 sm:w-96  mx-auto text-center">
          {t("nuestrosEspacios")}
        </h1>

        {/* SLIDER */}
        <div className=" w-60 sm:w-4/6 mx-auto">
          <Slider {...settings}>
            <div className="">
              <img
                className="mx-auto w-60 h-60 sm:w-11/12 sm:h-[35rem]"
                src={sliderimg1}
                alt=""
              />
            </div>
            <div>
              <img
                className="mx-auto w-60 h-60 sm:w-11/12 sm:h-[35rem]"
                src={sliderimg2}
                alt=""
              />
            </div>
            <div>
              <img
                className="mx-auto w-60 h-60 sm:w-11/12 sm:h-[35rem]"
                src={sliderimg3}
                alt=""
              />
            </div>
            <div>
              <img
                className="mx-auto w-60 h-60 sm:w-11/12 sm:h-[35rem]"
                src={sliderimg4}
                alt=""
              />
            </div>
          </Slider>
        </div>
      </div>

      <Footer type={"2"} />
    </>
  );
};

export default Inicio;
