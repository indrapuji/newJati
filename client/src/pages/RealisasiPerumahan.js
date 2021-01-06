import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Container, Image } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Pinjaman from '../assets/data/pinjaman perumahan2.png';
import RealisasiPerumahan from '../assets/realisasi/RealisasiPerumahan2.png';
import Aos from 'aos';
import 'aos/dist/aos.css';

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
      <Container>
        <div style={{ marginTop: 50 }}>
          <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Realisasi Perumahan</p>
        </div>
        <div data-aos="fade-up">
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 40, marginBottom: 20 }}>
            <Image src={RealisasiPerumahan} rounded style={{ height: 400, width: 600 }} />
          </div>
          <p style={{ textAlign: 'center', marginTop: -10 }}>Realisasi Pengembalian Iuran Perumahan</p>
        </div>
        <div data-aos="fade-up">
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 40, marginBottom: 20 }}>
            <Image src={Pinjaman} rounded style={{ height: 400, width: 600 }} />
          </div>
          <p style={{ textAlign: 'center', marginTop: -10 }}>Penyaluran Pinjaman Perumahan</p>
        </div>
      </Container>
      <Footer />
    </motion.div>
  );
};
