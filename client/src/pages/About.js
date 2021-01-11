import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
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
          <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 30 }}>Company Profile</p>
          <div style={{ textAlign: 'center' }}>
            <iframe
              src="https://dev.jatisejahtera.or.id/uploads/Company_Profile.pdf"
              title="title"
              style={{ width: 700, height: 700 }}
            ></iframe>
          </div>
        </div>
      </Container>
      <Footer />
    </motion.div>
  );
};
