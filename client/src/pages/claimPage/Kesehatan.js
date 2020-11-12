import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button, Form, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import host from '../../hooks/host'

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
    surat_permohonan_bantuan_biaya: "",
    kuitansi_asli_rs: "",
    surat_keterangan_rs: "",
    fotokopi_sk_pensiun: "",
    fotokopi_kp: "",
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
        url: `${host}/data/uploads/kesehatan`,
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
      <h1 style={{ textAlign: "center", marginTop: 20, marginBottom: 20 }}>Pengajuan Claim Kesehatan</h1>
      <Container>
        <Form onSubmit={onFormSubmit}>
          <Form.Group>
            <Form.Label>Surat permohonan bantuan biaya rawat inap dari pensiunan</Form.Label>
            <Form.File.Input name="surat_permohonan_bantuan_biaya" onChange={onFormChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Kuitansi asli dari Rumah Sakit pensiunan di rawat </Form.Label>
            <Form.File.Input name="kuitansi_asli_rs" onChange={onFormChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Surat keterangan sakit yang di tanda tangani oleh rumah sakit</Form.Label>
            <Form.File.Input name="surat_keterangan_rs" onChange={onFormChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Photo Copy SK Pensiun </Form.Label>
            <Form.File.Input name="fotokopi_sk_pensiun" onChange={onFormChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Photo copy kartu peserta </Form.Label>
            <Form.File.Input name="fotokopi_kp" onChange={onFormChange} />
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
