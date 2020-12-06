import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import axios from "axios";
import Swal from "sweetalert2";
import host from "../hooks/host";

export default () => {
  // const host = "http://localhost:3001";
  // const host = "https://jatisejahtera-cms.herokuapp.com";
  // const host = "http://128.199.238.147:3001";

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
  const history = useHistory();
  const [dataForm, setDataForm] = useState({
    nama: "",
    no_induk: "",
    email: "",
    tgl_lahir: "",
    no_ktp: "",
    no_bpjs: "",
    nama_bank: "",
    no_rekening: "",
    satuan_kerja: "",
    golongan_pangkat: "",
    no_telp: "",
    alamat: "",
    kelurahan: "",
    kecamatan: "",
    kota: "",
    kodepos: "",
    provinsi: "",
    nama_pasangan: "",
    tgl_lahir_pasangan: "",
    no_telp_pasangan: "",
    no_ktp_pasangan: "",
    no_bpjs_pasangan: "",
    nama_bank_pasangan: "",
    no_rekening_pasangan: "",
    nama_anak: "",
    tgl_lahir_anak: "",
    no_tlp_anak: "",
    no_ktp_anak: "",
    no_bpjs_anak: "",
    nama_bank_anak: "",
    no_rekening_anak: "",
  });
  const onFormChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };
  const onFormSubmit = async (e) => {
    try {
      e.preventDefault();
      await axios({
        method: "POST",
        url: `${host}/users/super/pengkinian-data`,
        data: dataForm,
      });
      Swal.fire({
        icon: "success",
        title: "Record data success",
        showConfirmButton: false,
        timer: 1500,
      });
      history.push("/");
    } catch (err) {
      let msg = "";
      if (err.response) {
        if (Array.isArray(err.response.data.msg)) {
          msg = err.response.data.msg.join("<br>");
        } else {
          msg = err.response.data.msg;
        }
      } else if (err.request) {
        msg = err.request;
      } else {
        msg = err.message;
      }
      Swal.fire({
        icon: "error",
        title: "Oops...",
        html: `${msg}`,
      });
    }
  };
  return (
    <motion.div initial="init" animate="in" exit="out" variants={pageTransition}>
      <Navigation />
      <Container>
        <div style={{ marginTop: 50 }}>
          <p style={{ textAlign: "center", fontWeight: "bold", fontSize: 30 }}>Update Data</p>
          <p style={{ textAlign: "center" }}>Silahkan Melakukan Pengkinian Data melalui Link ini</p>
          <p style={{ textAlign: "center", marginTop: -15 }}>
            <a href={"https://forms.gle/7XLsMVPZYMkQewbs7"} target="_blank" rel="noopener noreferrer">
              https://forms.gle/7XLsMVPZYMkQewbs7
            </a>
          </p>
        </div>
      </Container>
      <div style={{ position: "fixed", bottom: 0, width: "100vw" }}>
        <Footer />
      </div>
    </motion.div>
  );
};
