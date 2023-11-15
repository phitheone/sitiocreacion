import React from "react";
import "./Hero.css";

import iso from "../../images/iso.png";

const Hero = () => {
  return (
    <>
      <div className="HDummie" id="hero"></div>
      <div className="HSuper">
        <div className="HContent">
          <div className="HTitle">
            <h1>Bienvenid@s</h1>
          </div>
          <div className="HSubtitle">
            <h2>
              A SIT<span>I</span>O CREACION
            </h2>
          </div>
          <div className="HParagraph">
            <p>
              En Agencia Sitio Creación, fusionamos lo profesional con lo
              creativo. Somos tu aliado estratégico en el mundo del marketing y
              la comunicación. Nuestro enfoque es dar soluciones innovadoras
              para impulsar tu marca hacia el éxito. Descubre cómo podemos
              transformar tu visión en realidad.
            </p>
          </div>
        </div>
        <div className="HIso">
          <img src={iso} alt="" />
        </div>
      </div>
    </>
  );
};

export default Hero;
