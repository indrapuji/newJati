import React, { useEffect } from 'react';
import { Card, CardDeck, Image, Button } from 'react-bootstrap';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import Pendidikan from '../assets/home/pendidikan.png';
import Sosial from '../assets/home/sosial.png';
import Perumahan from '../assets/home/perumahan.png';
import Kesehatan from '../assets/home/kesehatan.png';
import Penanaman from '../assets/image/penanamanjagung.jpeg';
import Rawat from '../assets/image/bantuanRawat.jpg';
import NilaiHidup from '../assets/image/nilaiHidup.jpg';
import SantunanKematian from '../assets/image/santunanKematian.jpg';
import BangunKemandirian from '../assets/image/bangunkemandirian.jpeg';
import BriDukung from '../assets/image/bridukungjati.jpeg';
import Santunan from '../assets/image/santunan.jpeg';
import { Link, useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';
import Visimisi from '../components/Visimisi';
import Berita from '../components/Berita';
import '../page.css';
import Aos from 'aos';

export default () => {
  const history = useHistory();
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

  function handdleKematian() {
    history.push('/claim/kematian');
  }
  function handdleManfaat() {
    history.push('/claim/manfaat');
  }
  function handdleKesehatan() {
    history.push('/claim/kesehatan');
  }
  function handdlePengkinian() {
    history.push('/data/update');
  }

  return (
    <motion.div initial="init" animate="in" exit="out" variants={pageTransition}>
      <div className="bannerHome">
        <Navigation />
        <div className="program">
          <div data-aos="fade-up">
            <p className="programTitle">Program kami</p>
          </div>
          <div className="cardProgram">
            <CardDeck>
              <div data-aos="zoom-in">
                <div data-aos="fade-right" style={{ position: 'absolute', zIndex: 1, left: -100, top: 200 }}>
                  <Image src={require('../assets/landingpage/leaf_bottom.png')} style={{ width: 200 }} />
                </div>
                <div data-aos="zoom-in" style={{ position: 'absolute', left: -100, top: 1150 }}>
                  <Image src={require('../assets/landingpage/leaf_bottom.png')} style={{ width: 200 }} />
                </div>
                <Card style={{ width: '18rem', borderRadius: 20, backgroundColor: 'transparent', borderColor: 'red', borderWidth: 5 }}>
                  <Card.Img variant="top" src={Pendidikan} style={{ height: '10rem', borderRadius: 40 }} />
                  <Card.Body>
                    <Link to="/program/pendidikan">
                      <h3 style={{ textAlign: 'center', fontWeight: 'bold', color: 'black' }}>Pendidikan</h3>
                    </Link>
                  </Card.Body>
                </Card>
              </div>
              <div data-aos="zoom-in">
                <Card style={{ width: '18rem', borderRadius: 20, backgroundColor: 'transparent', borderColor: 'purple', borderWidth: 5 }}>
                  <Card.Img variant="top" src={Sosial} style={{ height: '10rem', borderRadius: 40 }} />
                  <Card.Body>
                    <Link to="/program/sosial">
                      <h3 style={{ textAlign: 'center', fontWeight: 'bold', color: 'black' }}>Sosial</h3>
                    </Link>
                  </Card.Body>
                </Card>
              </div>
              <div data-aos="zoom-in">
                <Card style={{ width: '18rem', borderRadius: 20, backgroundColor: 'transparent', borderColor: 'blue', borderWidth: 5 }}>
                  <Card.Img variant="top" src={Perumahan} style={{ height: '10rem', borderRadius: 40 }} />
                  <Card.Body>
                    <Link to="/program/perumahan">
                      <h3 style={{ textAlign: 'center', fontWeight: 'bold', color: 'black' }}>Perumahan</h3>
                    </Link>
                  </Card.Body>
                </Card>
              </div>
              <div data-aos="zoom-in">
                <div data-aos="fade-left" style={{ position: 'absolute', zIndex: 1, left: 150, top: 200 }}>
                  <Image src={require('../assets/landingpage/leaf_top.png')} style={{ width: 150 }} />
                </div>
                <Card style={{ width: '18rem', borderRadius: 20, backgroundColor: 'transparent', borderColor: 'green', borderWidth: 5 }}>
                  <Card.Img variant="top" src={Kesehatan} style={{ height: '10rem', borderRadius: 40 }} />
                  <Card.Body>
                    <Link to="/program/kesehatan">
                      <h3 style={{ textAlign: 'center', fontWeight: 'bold', color: 'black' }}>Kesehatan</h3>
                    </Link>
                  </Card.Body>
                </Card>
              </div>
            </CardDeck>
          </div>
          <div data-aos="fade-up">
            <p className="claimTitle">Pengajuan Claim</p>
          </div>
          <div data-aos="zoom-in" style={{ marginLeft: 10, marginRight: 10, marginTop: 30, marginBottom: 50 }}>
            <CardDeck>
              <Card style={{ borderRadius: 20 }}>
                <Card.Body>
                  <Card.Img variant="top" src={SantunanKematian} style={{ height: '10rem', borderRadius: 40 }} />
                  <Card.Title>Santunan Kematian</Card.Title>
                  <Card.Text>
                    Santunan kematian dibayarkan kepada ahli waris,selambat-lambatnya 14 hari kerja setelah berkas pengajuan diterima dengan lengkap
                    dan benar oleh Yayasan.
                  </Card.Text>
                  <p style={{ fontSize: 10 }}>* lampiran pengajuan</p>
                  <Button
                    variant="warning"
                    block
                    href="https://dev.jatisejahtera.or.id/download?file=Permohonan%20Santunan%20Kematian%20_%20Santunan%20Cacat.docx"
                  >
                    lampiran
                  </Button>
                </Card.Body>
                <Card.Footer>
                  <Button variant="success" block onClick={handdleKematian}>
                    Pengajuan
                  </Button>
                </Card.Footer>
              </Card>
              <Card style={{ borderRadius: 20 }}>
                <Card.Body>
                  <Card.Img variant="top" src={NilaiHidup} style={{ height: '10rem' }} />
                  <Card.Title>Manfaat Nilai Hidup</Card.Title>
                  <Card.Text>
                    Nilai Hidup dibayarkan kepada peserta,selambat-lambatnya 14 hari kerja setelah berkas pengajuan diterima dengan lengkap dan benar
                    oleh Yayasan.{'                    '}
                    <br />
                  </Card.Text>
                  <p style={{ fontSize: 10 }}>* lampiran pengajuan</p>
                  <Button variant="warning" block href="https://dev.jatisejahtera.or.id/download?file=Permohonan%20Nilai%20Hidup.docx">
                    lampiran
                  </Button>
                </Card.Body>
                <Card.Footer>
                  <Button variant="success" block onClick={handdleManfaat}>
                    Pengajuan
                  </Button>
                </Card.Footer>
              </Card>
              <Card style={{ borderRadius: 20 }}>
                <Card.Body>
                  <Card.Img variant="top" src={Rawat} style={{ height: '10rem' }} />
                  <Card.Title>Bantuan Rawat Inap</Card.Title>
                  <Card.Text>
                    Penggantian Biaya Rawat Inap dibayarkan kepada peserta,selambat-lambatnya 14 hari kerja setelah berkas pengajuan diterima dengan
                    lengkap dan benar oleh Yayasan.
                  </Card.Text>
                  <p style={{ fontSize: 10 }}>* lampiran pengajuan</p>
                  <Button
                    variant="warning"
                    block
                    href="https://dev.jatisejahtera.or.id/download?file=Permohonan%20Bantuan%20Biaya%20Rawat%20Inap.docx"
                  >
                    lampiran
                  </Button>
                </Card.Body>
                <Card.Footer>
                  <Button variant="success" block onClick={handdleKesehatan}>
                    Pengajuan
                  </Button>
                </Card.Footer>
              </Card>
            </CardDeck>
          </div>

          {/* <Profile /> */}
          <Berita />
          <Visimisi />
        </div>
        <div style={{ marginTop: 50 }}>
          <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 20 }}>GALERY</p>
        </div>
        <div style={{ padding: 10, marginBottom: 50 }}>
          <div className="container mt-40">
            <div className="row mt-30">
              <div data-aos="flip-up" className="col-md-3 col-sm-6">
                <div className="box15">
                  <img src={Penanaman} style={{ height: '10rem' }} alt="" />
                  <div className="box-content">
                    <h3 className="title" style={{ textAlign: 'center' }}>
                      Penanaman Jagung
                    </h3>
                  </div>
                </div>
              </div>
              <div data-aos="flip-up" className="col-md-3 col-sm-6">
                <div className="box15">
                  <img src={BangunKemandirian} style={{ height: '10rem' }} alt="" />
                  <div className="box-content">
                    <h3 className="title" style={{ textAlign: 'center' }}>
                      Bangun Kemandirian Desa
                    </h3>
                  </div>
                </div>
              </div>
              <div data-aos="flip-up" className="col-md-3 col-sm-6">
                <div className="box15">
                  <img src={BriDukung} style={{ height: '10rem' }} alt="" />
                  <div className="box-content">
                    <h3 className="title" style={{ textAlign: 'center' }}>
                      Program Jati Sejahtera
                    </h3>
                  </div>
                </div>
              </div>
              <div data-aos="flip-up" className="col-md-3 col-sm-6">
                <div className="box15">
                  <img src={Santunan} style={{ height: '10rem' }} alt="" />
                  <div className="box-content">
                    <h3 className="title" style={{ textAlign: 'center' }}>
                      Santunan Yatim Piatu
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="zoom-in">
          <Card style={{ borderRadius: 20, marginLeft: 350, marginRight: 350, marginBottom: 50 }}>
            <Card.Body>
              <Card.Title style={{ textAlign: 'center' }}>Perbaharui Data Peserta</Card.Title>
              <Card.Text style={{ textAlign: 'center' }}>Perbaharui data anda sekarang</Card.Text>
            </Card.Body>
            <Card.Footer>
              <Button variant="success" block onClick={handdlePengkinian}>
                Pengkinian Data
              </Button>
            </Card.Footer>
          </Card>
        </div>
        <Footer />
      </div>
    </motion.div>
  );
};
