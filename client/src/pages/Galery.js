import React, { useState } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
// import Penanaman from "../assets/image/penanamanjagung.jpeg";
// import BangunKemandirian from "../assets/image/bangunkemandirian.jpeg";
// import BriDukung from "../assets/image/bridukungjati.jpeg";
// import Santunan from "../assets/image/santunan.jpeg";

import Silaturahmi from "../assets/image/silaturahmi.png";
import Sosialisasi from "../assets/image/sosialisasi.png";
import Perkenalan from "../assets/image/Perkenalan.png";
import Kunjungan from "../assets/image/Kunjungan.png";
import Covid from "../assets/image/covid.png";

import Covid2 from "../assets/image/covid2.png";
import Covid3 from "../assets/image/covid3.png";
import Covid4 from "../assets/image/covid4.png";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import { Modal, Image } from "react-bootstrap";

export default () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const [prev, setPrev] = useState("");

  function handleShow(imageshow) {
    setShow(true);
    setPrev(imageshow);
  }

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
          <p style={{ textAlign: "center", fontWeight: "bold", fontSize: 20 }}>GALERY</p>
        </div>
        {/* <div style={{ padding: 10 }}>
          <div className="container mt-40">
            <div className="row mt-30">
              <div className="col-md-3 col-sm-6" onClick={() => handleShow(Penanaman)}>
                <div className="box15">
                  <img src={Penanaman} style={{ height: "10rem" }} alt="" />
                  <div className="box-content">
                    <h3 className="title" style={{ textAlign: "center" }}>
                      Penanaman Jagung
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6" onClick={() => handleShow(BangunKemandirian)}>
                <div className="box15">
                  <img src={BangunKemandirian} style={{ height: "10rem" }} alt="" />
                  <div className="box-content">
                    <h3 className="title" style={{ textAlign: "center" }}>
                      Bangun Kemandirian Desa
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6" onClick={() => handleShow(BriDukung)}>
                <div className="box15">
                  <img src={BriDukung} style={{ height: "10rem" }} alt="" />
                  <div className="box-content">
                    <h3 className="title" style={{ textAlign: "center" }}>
                      Program Jati Sejahtera
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6" onClick={() => handleShow(Santunan)}>
                <div className="box15">
                  <img src={Santunan} style={{ height: "10rem" }} alt="" />
                  <div className="box-content">
                    <h3 className="title" style={{ textAlign: "center" }}>
                      Santunan Yatim Piatu
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div style={{ padding: 10 }}>
          <div className="container mt-40">
            <div className="row mt-30">
              <div className="col-md-3 col-sm-6" onClick={() => handleShow(Covid2)}>
                <div className="box15">
                  <img src={Covid2} style={{ height: "10rem" }} alt="" />
                  <div className="box-content">
                    <h3 className="title" style={{ textAlign: "center" }}>
                      Kegiatan Bhakti Sosial YKP3JS
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6" onClick={() => handleShow(Covid3)}>
                <div className="box15">
                  <img src={Covid3} style={{ height: "10rem" }} alt="" />
                  <div className="box-content">
                    <h3 className="title" style={{ textAlign: "center" }}>
                      Kegiatan Bhakti Sosial YKP3JS
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6" onClick={() => handleShow(Covid4)}>
                <div className="box15">
                  <img src={Covid4} style={{ height: "10rem" }} alt="" />
                  <div className="box-content">
                    <h3 className="title" style={{ textAlign: "center" }}>
                      Kegiatan Bhakti Sosial YKP3JS
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6" onClick={() => handleShow(Silaturahmi)}>
                <div className="box15">
                  <img src={Silaturahmi} style={{ height: "10rem" }} alt="" />
                  <div className="box-content">
                    <h3 className="title" style={{ textAlign: "center" }}>
                      Yayasan Jati Sejahtera (YKP3JS) Silaturahmi
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ padding: 10 }}>
          <div className="container mt-40">
            <div className="row mt-30">
              <div className="col-md-3 col-sm-6" onClick={() => handleShow(Sosialisasi)}>
                <div className="box15">
                  <img src={Sosialisasi} style={{ height: "10rem" }} alt="" />
                  <div className="box-content">
                    <h3 className="title" style={{ textAlign: "center" }}>
                      Yayasan Jatisejahtera melakukan sosialisasi
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6" onClick={() => handleShow(Perkenalan)}>
                <div className="box15">
                  <img src={Perkenalan} style={{ height: "10rem" }} alt="" />
                  <div className="box-content">
                    <h3 className="title" style={{ textAlign: "center" }}>
                      Perkenalan Pengurus dan Pengawas
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6" onClick={() => handleShow(Kunjungan)}>
                <div className="box15">
                  <img src={Kunjungan} style={{ height: "10rem" }} alt="" />
                  <div className="box-content">
                    <h3 className="title" style={{ textAlign: "center" }}>
                      Kunjungan Bpk. Drs. Djoko Setijono
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6" onClick={() => handleShow(Covid)}>
                <div className="box15">
                  <img src={Covid} style={{ height: "10rem" }} alt="" />
                  <div className="box-content">
                    <h3 className="title" style={{ textAlign: "center" }}>
                      Kegiatan Bhakti Sosial YKP3JS
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal size="lg" show={show} onHide={handleClose} keyboard={false}>
          <Modal.Body style={{ display: "flex", justifyContent: "center" }}>
            <Image src={prev} style={{ height: 510 }} />
          </Modal.Body>
        </Modal>
      </Container>
      <Footer />
    </motion.div>
  );
};
