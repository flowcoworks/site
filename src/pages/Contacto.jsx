import Header from "../components/Header.jsx";
import art1 from "../assets/Nosotros/1x/artFlecha.png";
import { useTranslation } from "react-i18next";
import Footer from "../components/Footer.jsx";

import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

const Contacto = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* SECCIÓN #3 */}
      <Header type={"1"} />
      <div className="relative bg-[#2A4C4D] pt-[15rem]">
        {/* Imagen de fondo */}
        <div className="fixed top-46 ">
          <img
            className="-top-[8rem] relative inset-0 z-0 pointer-events-none w-5/6 sm:w-4/6"
            src={art1}
            alt=""
          />
        </div>

        {/* Contenedor del formulario */}
        <div className="relative">
          {" "}
          {/* Asegúrate de que este contenedor tenga un z-index mayor */}
          <h1 className="text-2xl  sm:text-4xl border-[2px] text-[#DFE466] mb-10 -tracking-[.10em] rounded-full pt-1 pb-4 bg-[#2A4C4D] sm:w-[33rem]  mx-auto text-center">
            {t("comoPodemosAyudarte")}
          </h1>
          <div className="sm:grid grid-cols-2">
            {/* COL 1 */}
            <div className="border-r-2 border-[#DFE466] ">
              <h3 className="text-xl -tracking-[.10em] text-yellow-50 text-center">
                {t("contactanos")}
              </h3>

              {/* NOMBRE Y APELLIDO */}
              <div className="w-full mx-auto max-w-[30rem] px-3 sm:px-0">
                <div className="flex mt-10 py-2 w-6/4 ">
                  <label className="text-[#DFE466]" htmlFor="">
                    {t("nombreYApellido")} -{" "}
                  </label>
                  <input
                    className="placeholder-[#F5F6DD] appearance-none bg-transparent border-b-2 border-[#DFE466] w-full text-yellow-50 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder={t("nombreYApellidoPlaceHolder")}
                  />
                </div>
              </div>

              {/* ASUNTO */}
              <div className="w-full mx-auto max-w-[30rem] px-3 sm:px-0">
                <div className="flex mt-10 py-2">
                  <label className="text-[#DFE466] w-40 mr-5 my-3" htmlFor="">
                    {t("asunto")} -
                  </label>
                  <input
                    className="placeholder-[#F5F6DD] appearance-none bg-transparent border-b-2 border-[#DFE466] w-full text-yellow-50 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder={t("asuntoPlaceHolder")}
                  />
                </div>
              </div>

              {/* MENSAJE */}
              <div className="w-full mx-auto max-w-[30.5rem] px-3 sm:px-0">
                <div className="flex mt-10 py-2">
                  <label className="text-[#DFE466] w-48" htmlFor="">
                    {t("mensaje")} -
                  </label>
                  <textarea
                    placeholder={t("mensajePlaceHolder")}
                    className="placeholder-[#F5F6DD] text-justify  min-h-40 max-h-40 h-40 appearance-none bg-transparent border-b-2 border-[#DFE466] w-full text-yellow-50 mr-3 py-1 px-2 leading-tight focus:outline-none"
                  ></textarea>
                </div>
              </div>
            </div>
            {/* COL 2 */}
            <div>
              <h3 className="text-xl -tracking-[.10em] text-yellow-50 text-center">
                {t("visitanos")}
              </h3>

              {/* DIRECCION */}
              <div className="w-full mx-auto max-w-[30rem] px-3 sm:px-0">
                <div className="sm:flex items-center py-2 w-6/4 ">
                  <label className="text-[#DFE466] w-96" htmlFor="">
                    {t("direccion")} -{" "}
                  </label>
                  <p className="text-[#F5F6DD] mt-5">
                  Campo Alegre, Av. Francisco de Miranda, Torre la Primera, PB. Caracas, Venezuela 1060
                  </p>
                </div>
              </div>

              <div className="w-[23rem] sm:w-[30rem] h-[15rem] sm:h-[20rem] rounded mx-auto">
                <APIProvider apiKey={"AIzaSyA26ssUVPmwlk1c2YiX5fOy1ZGcOhFI5AM"}>
                  <Map
                    defaultZoom={15}
                    gestureHandling={"greedy"}
                    disableDefaultUI={true}
                    defaultCenter={{
                      lat: 10.492001398907416,
                      lng: -66.8630958306861,
                    }}
                  >
                    <Marker
                      position={{
                        lat: 10.492001398907416,
                        lng: -66.8630958306861,
                      }}
                      label={"Flow Coworks"}
                    />
                  </Map>
                </APIProvider>
              </div>
            </div>
          </div>
          <div className="sm:flex mt-12 justify-center pb-14">
            {/* TELÉFONO */}
            <div className="flex ml-10 sm:ml-20">
              <p className="text-[#DFE466]">{t("telefono")}</p>{" "}
              <p className="mx-2 text-[#DFE466]">-</p>{" "}
              <p className="text-[#F5F6DD]">0414-2530642</p>
            </div>

            {/* EMAIL */}
            <div className="flex ml-10 sm:ml-20">
              <p className="text-[#DFE466]">{t("email")}</p>{" "}
              <p className="mx-2 text-[#DFE466]">-</p>{" "}
              <p className="text-[#F5F6DD]">VENTAS@FLOWCOWORKS.COM</p>
            </div>
          </div>
        </div>
      </div>
      <Footer type={"2"} />
    </>
  );
};

export default Contacto;
