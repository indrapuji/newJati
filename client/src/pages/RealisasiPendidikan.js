import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Container, Image } from 'react-bootstrap';
import { motion } from 'framer-motion';
import PenerimaBantuan2019 from '../assets/image/PenerimabantuanPendidikan-2019.png';
import PenerimaBantuan2020 from '../assets/image/PenerimabantuanPendidikan-2020.png';
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
          <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>Realisasi Pendidikan</p>
        </div>
        <div data-aos="fade-up">
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 40, marginBottom: 20 }}>
            <Image src={PenerimaBantuan2019} rounded style={{ height: 400, width: 600 }} />
          </div>
          <p style={{ textAlign: 'center', marginTop: -10 }}>
            Penerima bantuan Pendidikan berdasarkan tingkat pendidikan tahun 2015 s/d Juni 2019 (dalam Jumlah Siswa)
          </p>
        </div>
        <div data-aos="fade-up">
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 40, marginBottom: 20 }}>
            <Image src={PenerimaBantuan2020} rounded style={{ height: 400, width: 600 }} />
          </div>
          <p style={{ textAlign: 'center', marginTop: -10 }}>Penerima Bantuan Pendidikan per tingkat Pendidikan Tahun 2015 s/d 2019</p>
        </div>
      </Container>
      <Footer />
    </motion.div>
  );
};
