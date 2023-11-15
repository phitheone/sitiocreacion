import React from "react";
import "./Servicios.css";

import img1 from "../../images/s1.png";
import img2 from "../../images/s2.png";
import img3 from "../../images/s3.png";
import img4 from "../../images/s4.png";

const Servicios = () => {
  return (
    <div className="SSuper" id="servicios">
      <div className="SContent">
        <div className="STitle">
          <h1>
            <span className="SSpan1">ENCUENTRA AQUI EL </span>
            <span className="SSpan2">SERVIC</span>I
            <span className="SSpan2">O</span>
            <span className="SSpan1"> QUE BUSCAS</span>
          </h1>
        </div>
        <div className="SCards">
          <div className="SCardContainer">
            <div className="SCard">
              <img src={img1} alt="" />
              <p>Marketing digital y Publicidad</p>
              <div className="SCardBtn">
                <p>CONOCE MAS AQUI</p>
              </div>
            </div>
            <div className="SCardDescription">
              <p>
                Impulsa tu presencia en línea con nuestro servicio de marketing
                digital y publicidad. Desde estrategias efectivas hasta campañas
                publicitarias impactantes, te ayudamos a destacar en el vasto
                mundo digital, conectando tu marca con la audiencia adecuada y
                generando resultados tangibles.
              </p>
            </div>
          </div>
          <div className="SCardContainer">
            <div className="SCard">
              <img src={img2} alt="" />
              <p>Diseño y Branding</p>
              <div className="SCardBtn">
                <p>CONOCE MAS AQUI</p>
              </div>
            </div>
            <div className="SCardDescription">
              <p>
                Crea una identidad visual que hable por tu marca. Nuestro
                servicio de diseño y branding combina estética moderna con la
                esencia única de tu negocio. Desde logotipos elegantes hasta una
                experiencia de marca cohesiva, estamos aquí para dar vida a tu
                visión creativa.
              </p>
            </div>
          </div>
          <div className="SCardContainer">
            <div className="SCard">
              <img src={img3} alt="" />
              <p>Manejo de Redes Sociales</p>
              <div className="SCardBtn">
                <p>CONOCE MAS AQUI</p>
              </div>
            </div>
            <div className="SCardDescription">
              <p>
                Haz que tu presencia en redes sociales sea imparable con nuestro
                servicio de manejo de redes. Desde la creación de contenido
                cautivador hasta la interacción con tu comunidad, optimizamos
                tus perfiles para construir conexiones auténticas y potenciar la
                visibilidad de tu marca.
              </p>
            </div>
          </div>
          <div className="SCardContainer">
            <div className="SCard">
              <img src={img4} alt="" />
              <p>Branded Content y Community</p>
              <div className="SCardBtn">
                <p>CONOCE MAS AQUI</p>
              </div>
            </div>
            <div className="SCardDescription">
              <p>
                Convierte a tu audiencia en una comunidad comprometida a través
                de nuestro servicio de branded content. Creamos historias que
                resuenan, conectando emocionalmente a tu marca con tu audiencia.
                Construimos una comunidad en línea donde cada interacción cuenta
                y cada historia fortalece tu identidad de marca
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
