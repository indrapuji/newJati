import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button, Form, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import host from '../../hooks/host';

export default () => {
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
        icon: 'error',
        title: 'Oops... Kamu harus login terlebih dahulu',
        showConfirmButton: false,
        timer: 1500,
      });
      history.push('/');
    }
  }, [history]);
  function handdleBack() {
    history.push('/');
  }
  const [formData, setFormData] = useState({
    permohonan_ahli_waris: '',
    keterangan_menginggal_dunia_lurah: '',
    keterangan_meninggal_dunia_rumah_sakit: '',
    keterangan_kepolisian: '',
    fotokopi_kp: '',
    fotokopi_kk: '',
    fotokopi_sk_pengangkatan: '',
    fotokopi_sk_pensiun: '',
    lampiran: '',
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
        method: 'POST',
        url: `${host}/data/uploads/kematian`,
        data: newFormData,
        headers: {
          token: localStorage.token,
        },
      });
      Swal.fire({
        icon: 'success',
        title: 'Pengajuan Claim success',
        showConfirmButton: false,
        timer: 1500,
      });
      history.push('/profile');
    } catch (err) {
      let msg = '';
      if (err.response) {
        if (Array.isArray(err.response.data.msg)) {
          msg = err.response.data.msg.join('<br>');
        } else {
          msg = err.response.data.msg;
        }
      } else if (err.request) {
        msg = err.request;
      } else {
        msg = err.message;
      }
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        html: `${msg}`,
      });
    }
  };
  return (
    <motion.div initial="init" animate="in" exit="out" variants={pageTransition}>
      <h1 style={{ textAlign: 'center', marginTop: 20, marginBottom: 20 }}>Pengajuan Claim Kematian</h1>
      <Container>
        <Form onSubmit={onFormSubmit}>
          <Form.Group>
            <Form.Label>Surat Permohonan dari ahli waris</Form.Label>
            <Form.File.Input name="permohonan_ahli_waris" onChange={onFormChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Surat keterangan meninggal dunia dari lurah </Form.Label>
            <Form.File.Input name="keterangan_menginggal_dunia_lurah" onChange={onFormChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Surat keterangan meninggal dari RS apabila peserta meninggal nya di Rumah Sakit</Form.Label>
            <Form.File.Input name="keterangan_meninggal_dunia_rumah_sakit" onChange={onFormChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Surat Keterangan dari Kepolisian apabila peserta meninggal dunia akibat kecelakaan </Form.Label>
            <Form.File.Input name="keterangan_kepolisian" onChange={onFormChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Photo copy kartu peserta </Form.Label>
            <Form.File.Input name="fotokopi_kp" onChange={onFormChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Photo Copy kartu keluarga </Form.Label>
            <Form.File.Input name="fotokopi_kk" onChange={onFormChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Photo Copy SK pengangkatan </Form.Label>
            <Form.File.Input name="fotokopi_sk_pengangkatan" onChange={onFormChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Photo Copy Sk.Pensiun </Form.Label>
            <Form.File.Input name="fotokopi_sk_pensiun" onChange={onFormChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Lampiran </Form.Label>
            <Form.File.Input name="lampiran" onChange={onFormChange} />
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
