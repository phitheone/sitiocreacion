import React from "react";
import "./Clientes.css";

import c1 from "../../images/clients/1.png";
import c2 from "../../images/clients/2.png";
import c3 from "../../images/clients/3.png";
import c4 from "../../images/clients/4.png";
import c5 from "../../images/clients/5.png";
import c6 from "../../images/clients/6.png";
import c7 from "../../images/clients/7.png";
import c8 from "../../images/clients/8.png";
import c9 from "../../images/clients/9.png";
import c10 from "../../images/clients/10.png";
import c11 from "../../images/clients/11.png";
import c12 from "../../images/clients/12.png";

const Clientes = () => {
  return (
    <div className="CSuper" id="clientes">
      <div className="CContainer">
        <h1>
          QUIENES HAN <span>CONFIADO</span> EN NOSOTROS
        </h1>
        <div className="CImages">
          <img src={c1} alt="" />
          <img src={c2} alt="" />
          <img src={c3} alt="" />
          <img src={c4} alt="" />
          <img src={c5} alt="" />
          <img src={c6} alt="" />
          <img src={c7} alt="" />
          <img src={c8} alt="" />
          <img src={c9} alt="" />
          <img src={c10} alt="" />
          <img src={c11} alt="" />
          <img src={c12} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Clientes;
