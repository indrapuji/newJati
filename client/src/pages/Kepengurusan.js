import React, { useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Container, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";

export default () => {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);
  const pageTransition = {
    init: {
      opacity: 0,
    },
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };
  return (
    <motion.div initial="init" animate="in" exit="out" variants={pageTransition}>
      <Navigation />
      
      <div style={{ position: "relative" }}>
        <div data-aos="zoom-in" style={{ position: "absolute", left: "-30", zIndex: -1, top: 50 }}>
          <Image src={require("../assets/landingpage/leaf_bottom.png")} style={{ width: 150 }} />
        </div>
        <div data-aos="fade-up" style={{ position: "absolute", left: 1200, zIndex: -1, top: 200 }}>
          <Image src={require("../assets/landingpage/leaf_top_large.png")} style={{ width: 200 }} />
        </div>
        <div style={{ marginTop: 50 }}>
          <p style={{ textAlign: "center", fontWeight: "bold", fontSize: 30, marginTop: -20 }}>Susunan Pembina, Pengawas, dan Pengurus YKP3 Jatisejahtera</p>
        </div>
        <Container>
          <div>
            <Image src={require("../assets/landingpage/struktur.png")} />
          </div>
        </Container>
      </div>
      
      <Footer />
    </motion.div>
  );
};
