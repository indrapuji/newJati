import React, { useState, useEffect } from 'react';
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
  const [profileData, setProfileData] = useState('');
  const [dataForm, setDataForm] = useState({
    nama: '',
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

  const getProfileData = async () => {
    try {
      const { data } = await axios({
        method: 'GET',
        url: `${host}/users/profile`,
        headers: {
          token: localStorage.token,
        },
      });
      setProfileData(data);
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

  useEffect(() => {
    if (!localStorage.token) history.push('/');
    getProfileData();
    // eslint-disable-next-line
  }, [history]);

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
        method: 'PUT',
        url: `${host}/users/edit-anggota`,
        data: dataForm,
        headers: {
          token: localStorage.token,
        },
      });
      Swal.fire({
        icon: 'success',
        title: 'Update data success',
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
      <Navigation />
      <Container>
        <div style={{ marginTop: 50 }}>
          <p style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 30 }}>Update Data</p>
        </div>
        <div style={{ marginBottom: 50, marginTop: 50 }}>
          <h3 style={{ fontWeight: 'bold', marginBottom: 20 }}>Data Diri</h3>
          <Form onSubmit={onFormSubmit}>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                Nama <span style={{ color: 'red' }}>*</span>
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder={profileData.nama} name="nama" onChange={onFormChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                Tanggal Lahir <span style={{ color: 'red' }}>*</span>
              </Form.Label>
              <Col sm="10">
                <Form.Control type="date" placeholder={profileData.tgl_lahir} name="tgl_lahir" onChange={onFormChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                No KTP <span style={{ color: 'red' }}>*</span>
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder={profileData.no_ktp} name="no_ktp" onChange={onFormChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                No BPJS
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder={profileData.no_bpjs} name="no_bpjs" onChange={onFormChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                Data Bank
              </Form.Label>
              <Col xs={3}>
                <Form.Control
                  placeholder={profileData.nama_bank === '-' ? 'Nama Bank' : profileData.nama_bank}
                  name="nama_bank"
                  onChange={onFormChange}
                />
              </Col>
              <Col>
                <Form.Control
                  placeholder={profileData.no_rekening === '-' ? 'No Rekening' : profileData.no_rekening}
                  name="no_rekening"
                  onChange={onFormChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                Satuan Kerja <span style={{ color: 'red' }}>*</span>
              </Form.Label>
              <Col xs={5}>
                <Form.Control
                  placeholder={profileData.satuan_kerja === '-' ? 'Satuan Kerja' : profileData.satuan_kerja}
                  name="satuan_kerja"
                  onChange={onFormChange}
                />
              </Col>
              <Col>
                <Form.Control
                  placeholder={profileData.golongan_pangkat === '-' ? 'Golongan / Pangkat' : profileData.golongan_pangkat}
                  name="golongan_pangkat"
                  onChange={onFormChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                Alamat Email
              </Form.Label>
              <Col sm="10">
                <Form.Control type="email" placeholder={profileData.email} name="email" onChange={onFormChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                No HP Pensiunan <span style={{ color: 'red' }}>*</span>
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder={profileData.no_telp} name="no_telp" onChange={onFormChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                Alamat <span style={{ color: 'red' }}>*</span>
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder={profileData.alamat} name="alamat" onChange={onFormChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2"></Form.Label>
              <Col xs={5}>
                <Form.Control
                  placeholder={profileData.kelurahan === '-' ? 'Kelurahan' : profileData.kelurahan}
                  name="kelurahan"
                  onChange={onFormChange}
                />
              </Col>
              <Col>
                <Form.Control
                  placeholder={profileData.kecamatan === '-' ? 'Kecamatan' : profileData.kecamatan}
                  name="kecamatan"
                  onChange={onFormChange}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2"></Form.Label>
              <Col xs={4}>
                <Form.Control placeholder={profileData.kota === '-' ? 'Kota' : profileData.kota} name="kota" onChange={onFormChange} />
              </Col>
              <Col>
                <Form.Control placeholder={profileData.kodepos === '-' ? 'Kodepos' : profileData.kodepos} name="kodepos" onChange={onFormChange} />
              </Col>
              <Col>
                <Form.Control
                  placeholder={profileData.provinsi === '-' ? 'Provinsi' : profileData.provinsi}
                  name="provinsi"
                  onChange={onFormChange}
                />
              </Col>
            </Form.Group>
            <h3 style={{ fontWeight: 'bold', marginBottom: 20, marginTop: 40 }}>Data Istri / Suami</h3>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                Nama Istri / Suami
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder={profileData.nama_pasangan} name="nama_pasangan" onChange={onFormChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                Tanggal Lahir Istri / Suami
              </Form.Label>
              <Col sm="10">
                <Form.Control type="date" placeholder={profileData.tgl_lahir_pasangan} name="tgl_lahir_pasangan" onChange={onFormChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                No Telp Istri / Suami
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder={profileData.no_telp_pasangan} name="no_telp_pasangan" onChange={onFormChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                No KTP Istri / Suami
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder={profileData.no_ktp_pasangan} name="no_ktp_pasangan" onChange={onFormChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                No BPJS Istri / Suami
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder={profileData.no_bpjs_pasangan} name="no_bpjs_pasangan" onChange={onFormChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                Data Bank Istri / Suami
              </Form.Label>
              <Col xs={3}>
                <Form.Control
                  placeholder={profileData.nama_bank_pasangan === '-' ? 'Nama Bank' : profileData.nama_bank_pasangan}
                  name="nama_bank_pasangan"
                  onChange={onFormChange}
                />
              </Col>
              <Col>
                <Form.Control
                  placeholder={profileData.no_rekening_pasangan === '-' ? 'No Rekening' : profileData.no_rekening_pasangan}
                  name="no_rekening_pasangan"
                  onChange={onFormChange}
                />
              </Col>
            </Form.Group>
            <h3 style={{ fontWeight: 'bold', marginBottom: 20, marginTop: 40 }}>Data anak yang masih dalam tanggungan</h3>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                Nama Anak
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder={profileData.nama_anak} name="nama_anak" onChange={onFormChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                Tanggal Lahir Anak
              </Form.Label>
              <Col sm="10">
                <Form.Control type="date" placeholder={profileData.tgl_lahir_anak} name="tgl_lahir_anak" onChange={onFormChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                No Telp Anak
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder={profileData.no_tlp_anak} name="no_tlp_anak" onChange={onFormChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                No KTP Anak
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder={profileData.no_ktp_anak} name="no_ktp_anak" onChange={onFormChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                No BPJS Anak
              </Form.Label>
              <Col sm="10">
                <Form.Control type="text" placeholder={profileData.no_bpjs_anak} name="no_bpjs_anak" onChange={onFormChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm="2">
                Data Bank Anak
              </Form.Label>
              <Col xs={3}>
                <Form.Control
                  placeholder={profileData.nama_bank_anak === '-' ? 'Nama Bank' : profileData.nama_bank_anak}
                  name="nama_bank_anak"
                  onChange={onFormChange}
                />
              </Col>
              <Col>
                <Form.Control
                  placeholder={profileData.no_rekening_anak === '-' ? 'No Rekening' : profileData.no_rekening_anak}
                  name="no_rekening_anak"
                  onChange={onFormChange}
                />
              </Col>
            </Form.Group>
            <Button variant="primary" size="lg" type="submit" block>
              Update
            </Button>
          </Form>
        </div>
      </Container>
      <Footer />
    </motion.div>
  );
};
