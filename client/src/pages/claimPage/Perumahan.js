import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button, Form, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import host from "../../hooks/host";

export default () => {
  // const host = "http://localhost:3001";
  // const host = "https://jatisejahtera-cms.herokuapp.com";
  // const host = "http://128.199.238.147:3001";

  const history = useHistory();
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
  useEffect(() => {
    if (!localStorage.token) {
      Swal.fire({
        icon: "error",
        title: "Oops... Kamu harus login terlebih dahulu",
        showConfirmButton: false,
        timer: 1500,
      });
      history.push("/");
    }
  }, [history]);
  function handdleBack() {
    history.push("/");
  }
  const [formData, setFormData] = useState({
    blanko_permohonan: "",
    surat_keputusan_phk: "",
    data_keluarga: "",
    akumulasi_saldo: "",
  });
  const onFormChange = (e) => {
    e.preventDefault();
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };
  const onFormSubmit = async (e) => {
    try {
      e.preventDefault();
      const newFormData = new FormData();
      for (let keys in formData) {
        newFormData.append(`${keys}`, formData[keys]);
      }
      await axios({
        method: "POST",
        url: `${host}/data/uploads/perumahan`,
        data: newFormData,
        headers: {
          token: localStorage.token,
        },
      });
      Swal.fire({
        icon: "success",
        title: "Pengajuan Claim success",
        showConfirmButton: false,
        timer: 1500,
      });
      history.push("/profile");
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
      <h1 style={{ textAlign: "center", marginTop: 20, marginBottom: 20 }}>Pengajuan Claim Perumahan</h1>
      <Container>
        <Form onSubmit={onFormSubmit}>
          <Form.Group>
            <Form.Label>Blanko Permohonan dari peserta</Form.Label>
            <Form.File.Input name="blanko_permohonan" onChange={onFormChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Surat Keputusan pemberhentian hubungan kerja (PHK) </Form.Label>
            <Form.File.Input name="surat_keputusan_phk" onChange={onFormChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Data keluarga dari surat keterangan pemberhentian penghasilan (SKPP) atau dari blanko data keluarga (P10)</Form.Label>
            <Form.File.Input name="data_keluarga" onChange={onFormChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Akumulasi saldo iuran dari program gaji atau perhitungan manual </Form.Label>
            <Form.File.Input name="akumulasi_saldo" onChange={onFormChange} />
          </Form.Group>
          <Button variant="success" onClick={handdleBack} block>
            Back
          </Button>
          <Button variant="primary" type="submit" block>
            Submit
          </Button>
        </Form>
      </Container>
    </motion.div>
  );
};
