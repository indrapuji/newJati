import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Col, Row, Container, Image } from "react-bootstrap";
import Silaturahmi from "../assets/image/silaturahmi.png";
import Sosialisasi from "../assets/image/sosialisasi.png";
import Perkenalan from "../assets/image/Perkenalan.png";
import Kunjungan from "../assets/image/Kunjungan.png";
import Covid from "../assets/image/covid.png";
import { motion } from "framer-motion";

export default () => {
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
        <p style={{ fontWeight: "bold", textAlign: "center", fontSize: 50 }}>Berita</p>
        <Container>
          <Row style={{ marginBottom: 10 }}>
            <Col md="4">
              <Image src={Perkenalan} rounded style={{ height: 200, width: 300 }} />
            </Col>
            <Col>
              <motion.div whileHover={{ scale: 1.1 }}>
                <p style={{ fontWeight: "bold" }}>Perkenalan Pengurus dan Pengawas Yayasan Kesejahteraan</p>
                <p>Perkenalan Pengurus dan Pengawas Yayasan Kesejahteraan Pegawai Perum Perhutani Jati Sejahtera periode 2020 - 2024 dengan jajaran Pembina</p>
              </motion.div>
            </Col>
          </Row>
          <Row style={{ marginBottom: 10 }}>
            <Col md="4">
              <Image src={Kunjungan} rounded style={{ height: 200, width: 300 }} />
            </Col>
            <Col>
              <motion.div whileHover={{ scale: 1.1 }}>
                <p style={{ fontWeight: "bold" }}>Kunjungan Bpk. Drs. Djoko Setijono</p>
                <p>Kunjungan Bpk. Drs. Djoko Setijono, pendiri yayasan Jati Sejahtera, ke kantor Yayasan di Wisma Perhutani Jakarta dalam rangka silahturahmi.</p>
              </motion.div>
            </Col>
          </Row>
          <Row style={{ marginBottom: 10 }}>
            <Col md="4">
              <Image src={Silaturahmi} rounded style={{ height: 200, width: 300 }} />
            </Col>
            <Col>
              <motion.div whileHover={{ scale: 1.1 }}>
                <p style={{ fontWeight: "bold" }}>Yayasan Jati Sejahtera (YKP3JS) Silaturahmi Di Jawa Barat</p>
                <p>Yayasan jati sejahtera (YKP3JS) mengadakan kegiatan Silaturahmi bersama perwakilan yayasan jati sejahtera di jawa barat</p>
              </motion.div>
            </Col>
          </Row>
          <Row style={{ marginBottom: 10 }}>
            <Col md="4">
              <Image src={Sosialisasi} rounded style={{ height: 200, width: 300 }} />
            </Col>
            <Col>
              <motion.div whileHover={{ scale: 1.1 }}>
                <p style={{ fontWeight: "bold" }}>Yayasan Jatisejahtera melakukan sosialisasi kepada pensiunan Perhutani Jawa Tengah</p>
                <p>Sosialisasi mengenai bantuan kesehatan, khususnya mengenai biaya bantuan rawat inap dan santunan kematian bagi pensiunan Perhutani.</p>
              </motion.div>
            </Col>
          </Row>
          <Row style={{ marginBottom: 10 }}>
            <Col md="4">
              <Image src={Covid} rounded style={{ height: 200, width: 300 }} />
            </Col>
            <Col>
              <motion.div whileHover={{ scale: 1.1 }}>
                <p style={{ fontWeight: "bold" }}>Kegiatan Bhakti Sosial YKP3JS dalam rangka Peduli COVID-19</p>
                <p>Yayasan (YKP3JS), melakukan kegiatan pembagian Sembako di lingkungan internal (YKP3JS)</p>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Footer />
    </motion.div>
  );
};
