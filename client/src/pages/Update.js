import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import axios from 'axios';
import Swal from 'sweetalert2';
import host from '../hooks/host';

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
  const history = useHistory();
  const [dataForm, setDataForm] = useState({
    nama: '',
    no_induk: '',
    email: '',
    tgl_lahir: '',
    no_ktp: '',
    no_bpjs: '',
    nama_bank: '',
    no_rekening: '',
    satuan_kerja: '',
    golongan_pangkat: '',
    no_telp: '',
    alamat: '',
    kelurahan: '',
    kecamatan: '',
    kota: '',
    kodepos: '',
    provinsi: '',
    nama_pasangan: '',
    tgl_lahir_pasangan: '',
    no_telp_pasangan: '',
    no_ktp_pasangan: '',
    no_bpjs_pasangan: '',
    nama_bank_pasangan: '',
    no_rekening_pasangan: '',
    nama_anak: '',
    tgl_lahir_anak: '',
    no_tlp_anak: '',
    no_ktp_anak: '',
    no_bpjs_anak: '',
    nama_bank_anak: '',
    no_rekening_anak: '',
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
        method: 'POST',
        url: `${host}/users/super/pengkinian-data`,
        data: dataForm,
      });
      Swal.fire({
        icon: 'success',
        title: 'Record data success',
        showConfirmButton: false,
        timer: 1500,
      });
      history.push('/');
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
      <Navigation />
      <Container>
        <div style={{ marginTop: 50 }}>
          <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 30 }}>Update Data</p>
          <p style={{ textAlign: 'center' }}>Silahkan Melakukan Pengkinian Data melalui Link ini</p>
          <p style={{ textAlign: 'center', marginTop: -15 }}>
            <a href={'https://forms.gle/7XLsMVPZYMkQewbs7'} target="_blank" rel="noopener noreferrer">
              https://forms.gle/7XLsMVPZYMkQewbs7
            </a>
          </p>
        </div>
        <div style={{ marginBottom: 50, marginTop: 50 }}>
          <h3 style={{ fontWeight: 'bold', marginBottom: 20 }}>Data Diri</h3>
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
                NIP/NPP/NIK <span style={{ color: 'red' }}>*</span>
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="NIP / NPP / NIK" name="no_induk" onChange={onFormChange} />
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
                No KTP <span style={{ color: 'red' }}>*</span>
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="No KTP" name="no_ktp" onChange={onFormChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                No BPJS
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="No BPJS" name="no_bpjs" onChange={onFormChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                Data Bank
              </Form.Label>
              <Col xs={3}>
                <Form.Control placeholder="Nama Bank" name="nama_bank" onChange={onFormChange} />
              </Col>
              <Col>
                <Form.Control placeholder="No Rekening" name="no_rekening" onChange={onFormChange} />
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
                Alamat Email
              </Form.Label>
              <Col sm="10">
                <Form.Control type="email" placeholder="Alamat Email" name="email" onChange={onFormChange} />
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
            <h3 style={{ fontWeight: 'bold', marginBottom: 20, marginTop: 40 }}>Data Istri / Suami</h3>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                Nama Istri / Suami
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="Nama" name="nama_pasangan" onChange={onFormChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                Tanggal Lahir Istri / Suami
              </Form.Label>
              <Col sm="10">
                <Form.Control type="date" name="tgl_lahir_pasangan" onChange={onFormChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                No Telp Istri / Suami
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="No Telp Rumah" name="no_telp_pasangan" onChange={onFormChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                No KTP Istri / Suami
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="No KTP" name="no_ktp_pasangan" onChange={onFormChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                No BPJS Istri / Suami
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="No BPJS" name="no_bpjs_pasangan" onChange={onFormChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                Data Bank Istri / Suami
              </Form.Label>
              <Col xs={3}>
                <Form.Control placeholder="Nama Bank" name="nama_bank_pasangan" onChange={onFormChange} />
              </Col>
              <Col>
                <Form.Control placeholder="No Rekening" name="no_rekening_pasangan" onChange={onFormChange} />
              </Col>
            </Form.Group>
            <h3 style={{ fontWeight: 'bold', marginBottom: 20, marginTop: 40 }}>Data anak yang masih dalam tanggungan</h3>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                Nama Anak
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="Nama" name="nama_anak" onChange={onFormChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                Tanggal Lahir Anak
              </Form.Label>
              <Col sm="10">
                <Form.Control type="date" name="tgl_lahir_anak" onChange={onFormChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                No Telp Anak
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="No Telp Rumah" name="no_tlp_anak" onChange={onFormChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                No KTP Anak
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="No KTP" name="no_ktp_anak" onChange={onFormChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                No BPJS Anak
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder="No BPJS" name="no_bpjs_anak" onChange={onFormChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                Data Bank Anak
              </Form.Label>
              <Col xs={3}>
                <Form.Control placeholder="Nama Bank" name="nama_bank_anak" onChange={onFormChange} />
              </Col>
              <Col>
                <Form.Control placeholder="No Rekening" name="no_rekening_anak" onChange={onFormChange} />
              </Col>
            </Form.Group>
            <Button variant="primary" size="lg" type="submit" block>
              Kirim
            </Button>
          </Form>
        </div>
      </Container>
      <Footer />
    </motion.div>
  );
};
