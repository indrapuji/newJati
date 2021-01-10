import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
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
    nama: '',
    tgl_lahir: '',
    no_induk: '',
    satuan_kerja: '',
    golongan_pangkat: '',
    alamat: '',
    kelurahan: '',
    kecamatan: '',
    kota: '',
    kodepos: '',
    provinsi: '',
    no_telp: '',
    kota_pensiun: '',
    permohonan_pensiunan: '',
    pernyataan_dari_pensiunan: '',
    fotokopi_kp: '',
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
        url: `${host}/data/uploads/nilai-hidup`,
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
      <h1 style={{ textAlign: 'center', marginTop: 20, marginBottom: 20 }}>Pengajuan Claim Manfaat Nilai Hidup</h1>
      <Container>
        <Form onSubmit={onFormSubmit}>
          <Form.Group as={Row}>
            <Form.Label column sm="2">
              Nama <span style={{ color: 'red' }}>*</span>
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" placeholder="Nama" name="nama" onChange={onFormChange} />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="2">
              Tanggal Lahir <span style={{ color: 'red' }}>*</span>
            </Form.Label>
            <Col sm="10">
              <Form.Control type="date" name="tgl_lahir" onChange={onFormChange} />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="2">
              NIP/NPP/NIK <span style={{ color: 'red' }}>*</span>
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" placeholder="NIP / NPP / NIK" name="no_induk" onChange={onFormChange} />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="2">
              Satuan Kerja <span style={{ color: 'red' }}>*</span>
            </Form.Label>
            <Col xs={5}>
              <Form.Control placeholder="Satuan Kerja Saat Pensiun" name="satuan_kerja" onChange={onFormChange} />
            </Col>
            <Col>
              <Form.Control placeholder="Golongan Pangkat Saat Pensiun" name="golongan_pangkat" onChange={onFormChange} />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="2">
              Alamat <span style={{ color: 'red' }}>*</span>
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" placeholder="Alamat" name="alamat" onChange={onFormChange} />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="2"></Form.Label>
            <Col xs={5}>
              <Form.Control placeholder="Kelurahan / Desa" name="kelurahan" onChange={onFormChange} />
            </Col>
            <Col>
              <Form.Control placeholder="Kecamatan" name="kecamatan" onChange={onFormChange} />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="2"></Form.Label>
            <Col xs={4}>
              <Form.Control placeholder="Kota / Kabupaten" name="kota" onChange={onFormChange} />
            </Col>
            <Col>
              <Form.Control placeholder="Kodepos" name="kodepos" onChange={onFormChange} />
            </Col>
            <Col>
              <Form.Control placeholder="Provinsi" name="provinsi" onChange={onFormChange} />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="2">
              No HP Pensiunan <span style={{ color: 'red' }}>*</span>
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" placeholder="No HP Pensiunan" name="no_telp" onChange={onFormChange} />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm="2">
              Kota Tempat Pensiun <span style={{ color: 'red' }}>*</span>
            </Form.Label>
            <Col sm="10">
              <Form.Control type="text" placeholder="Kota Tempat Pensiun" name="kota_pensiun" onChange={onFormChange} />
            </Col>
          </Form.Group>
          <Form.Group>
            <Form.Label>Surat permohonan pensiunan perum perhutani</Form.Label>
            <Form.File.Input name="permohonan_pensiunan" onChange={onFormChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Surat pernyataan dari pensiunan perum perhutani </Form.Label>
            <Form.File.Input name="pernyataan_dari_pensiunan" onChange={onFormChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Photo Copy kartu peserta</Form.Label>
            <Form.File.Input name="fotokopi_kp" onChange={onFormChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Photo Copy SK Pensiun </Form.Label>
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
