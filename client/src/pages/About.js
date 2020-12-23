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
            <iframe src="https://dev.jatisejahtera.or.id/uploads/1608151324392-Jatinew.pdf" title="title" style={{ width: 700, height: 700 }}>
              {/* Presss me: <a href="./resources/crayola.pdf">Download PDF</a> */}
            </iframe>

            {/*         
        <div data-aos="fade-up" style={{ position: "absolute", right: 100, zIndex: 0, top: 400 }}>
          <Image src={require("../assets/landingpage/leaf_top_large.png")} style={{ width: 200 }} />
        </div>

        <Container>
          <div style={{ marginTop: 50 }}>
            <p style={{ textAlign: "center", fontWeight: "bold", fontSize: 30 }}>Tentang Kami</p>
            <p style={{ textAlign: "justify" }}>
              <span style={{ fontWeight: "bold" }}>“Yayasan Jati Sejahtera”</span> didirikan pada tanggal 24 April 1987 oleh Pendiri yayasan (seperti tersebut dibawah) dengan Akte Notaris Roenastiti
              Prayitno, SH, MA, No: 21 Tanggal: 24 April 1987 . Pada awal pendirian, Yayasan ini bergerak di bidang pendidikan yaitu membantu biaya pendidikan kepada putra putri karyawan/pensiunan
              Perum Perhutani. Yayasan berkedudukan di Jakarta dan memiliki Kantor Perwakilan di wilayah Jawa Timur, Jawa Tengah, serta Jawa Barat dan Banten. Di awal pendirian, Yayasan diurus oleh
              suatu pengurus yang ditunjuk dan diangkat oleh salah satu Direktur Perhutani selaku Ketua Pembina.
              <br style={{ marginBottom: 10 }} />
              Pada tahun 2008, yayasan melakukan perubahan Anggaran Dasar yang sangat mendasar dalam rangka menyesuaikan dengan Undang-Undang Yayasan yang dikeluarkan oleh Pemerintah yaitu
              Undang-Undang No: 16 Tahun 2001, dan Undang-Undang No 28 Tahun 2004. Perubahan Anggaran dasar ini menyangkut susunan organ yayasan dan memperluas kegiatan nya yaitu dibidang Sosial dan
              Kemanusiaan. Perubahan ini di legalkan dengan Akte Notaris Etty Purwaningsih SH, No: 08 Tanggal 24 September 2008.
              <br style={{ marginBottom: 10 }} />
              Seiring berjalan nya waktu, yayasan mengalami perubahan anggaran dasar yang berkaitan dengan pergantian pengurus, khusus perubahan pada Tahun 2010, perubahan anggaran dasarnya disertai
              dengan perubahan Nama Yayasan menjadi “Yayasan Kesejahteraan Pegawai Perum Perhutani Jati Sejahtera (YKP3JS), serta penambahan kegiatan yaitu program bantuan pemilikan rumah dan program
              kesehatan.
            </p>
          </div>
          <div style={{ marginTop: 50 }}>
            <p style={{ textAlign: "center", fontWeight: "bold", fontSize: 30 }}>Visi & Misi</p>
          </div>
          <div>
            <p style={{ fontWeight: "bold", marginBottom: 0 }}>Visi</p>
            <p>Menjadi Yayasan pengelola fasilitas kesejahteraan yang sehat, kuat dan bermanfaat bagi pesertanya.</p>
            <p style={{ fontWeight: "bold", marginBottom: 0 }}>Misi</p>
            <ol style={{ marginLeft: -20 }}>
              <li>Mengembangkan peran yayasan dalam bidang pendidikan, perumahan dan kesehatan secara berkualitas.</li>
              <li>Berusaha meningkatkan kesejahteraan dengan membantu meringankan beban para pesertanya.</li>
              <li>Menjadikan “nilai” yayasan sebagai harapan pesertanya.</li>
              <li>Bekerja berdasarkan nilai kebersamaan, saling merasakan dan saling menghargai.</li>
            </ol>
            <p style={{ fontWeight: "bold", marginBottom: 0 }}>Bidang Kegiatan</p>
            <ol style={{ marginLeft: -20 }}>
              <li>Bidang Pendidikan</li>
              <li>Bidang Sosial dan Kemanusiaan</li>
              <li>Bidang Perumahan</li>
              <li>Bidang Kesehatan</li>
            </ol>*/}
          </div>
        </div>
      </Container>
      <Footer />
    </motion.div>
  );
};
