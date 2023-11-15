import React from "react";

import Navbar from "../components/010_Navbar";
import Hero from "../components/020_Hero";
import Servicios from "../components/030_Servicios";
import Clientes from "../components/040_Clientes";
import Equipo from "../components/050_Equipo";
import Partners from "../components/060_Partners";
import Footer from "../components/070_Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Servicios />
      <Clientes />
      <Equipo />
      <Partners />
      <Footer />
    </div>
  );
};

export default Home;
