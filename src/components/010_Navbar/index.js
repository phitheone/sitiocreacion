import React, { useState } from "react";
import "./Navbar.css";

import { Link, animateScroll } from "react-scroll";

import logob from "../../images/logob.png";

const Navbar = () => {
  const [notOnTop, setNotOnTop] = useState(false);
  const nvProps = () => {
    if (window.scrollY >= 50) {
      setNotOnTop(true);
    } else {
      setNotOnTop(false);
    }
  };

  window.addEventListener("scroll", nvProps);

  return (
    <div className={notOnTop ? "NSuper NSuper-alt" : "NSuper"}>
      <div className="NContent">
        <div className={notOnTop ? "NLogo NLogo-alt" : "NLogo"}>
          <Link to="hero" spy={true} smooth={true} offset={0} duration={500}>
            <img src={logob} alt="Logo" />
          </Link>
        </div>
        <div className="NNavigation">
          <Link to="hero" spy={true} smooth={true} offset={0} duration={500}>
            <p>
              INIC<span>I</span>O
            </p>
          </Link>
          <Link
            to="servicios"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            <p>
              SERVIC<span>I</span>OS
            </p>
          </Link>
          <Link
            to="clientes"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            <p>
              CLIEN<span>T</span>ES
            </p>
          </Link>
          <Link
            to="equipo"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            <p>
              EQU<span>I</span>PO
            </p>
          </Link>
          <Link
            to="partner"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            <p>
              PART<span>N</span>ER
            </p>
          </Link>
          <Link
            to="contacto"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            <p>
              CONTA<span>C</span>TO
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
