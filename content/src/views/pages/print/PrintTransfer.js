import React, { useState } from 'react';
import {
  CContainer,
  CRow,
  CCol,
  CInput,
  CFormGroup,
  CForm,
  CLabel,
  CCardFooter,
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import newAlert from '../../../components/NewAlert';

const AddGalery = () => {
  const [formData, setFormData] = useState({
    nama_pengirim: '',
    alamat_pengirim: '',
    telp_pengirim: '',
    norek_pengirim: '',
    nama_penerima: '',
    alamat_penerima: '',
    telp_penerima: '',
    norek_penerima: '',
    bank_cabang: '',
    jumlah: 0,
  });

  const onFormChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const submitForm = async (e) => {
    e.preventDefault();
    console.log(formData);
    newAlert({ status: 'success', message: 'Berhasil' });
  };
  return (
    <CContainer>
      <CRow className="justify-content-center">
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
              <strong>Data Transfer</strong>
            </CCardHeader>
            <CCardBody>
              <CForm onSubmit={submitForm}>
                <CLabel htmlFor="text-input">
                  <strong>Detail Pengirim</strong>
                </CLabel>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">
                      <small>Nama</small>
                    </CLabel>
                  </CCol>
                  <CCol md="9">
                    <CInput custom size="sm" name="nama_pengirim" onChange={onFormChange} />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">
                      <small>Alamat</small>
                    </CLabel>
                  </CCol>
                  <CCol md="9">
                    <CInput custom size="sm" name="alamat_pengirim" onChange={onFormChange} />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">
                      <small>Telepon</small>
                    </CLabel>
                  </CCol>
                  <CCol md="9">
                    <CInput custom size="sm" name="telp_pengirim" onChange={onFormChange} />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">
                      <small>Nasabah - No Rekening</small>
                    </CLabel>
                  </CCol>
                  <CCol md="9">
                    <CInput custom size="sm" name="norek_pengirim" onChange={onFormChange} />
                  </CCol>
                </CFormGroup>
                <br />
                <CLabel htmlFor="text-input">
                  <strong>Detail Penerima</strong>
                </CLabel>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">
                      <small>Nama</small>
                    </CLabel>
                  </CCol>
                  <CCol md="9">
                    <CInput custom size="sm" name="nama_penerima" onChange={onFormChange} />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">
                      <small>Alamat</small>
                    </CLabel>
                  </CCol>
                  <CCol md="9">
                    <CInput custom size="sm" name="alamat_penerima" onChange={onFormChange} />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">
                      <small>Telepon</small>
                    </CLabel>
                  </CCol>
                  <CCol md="9">
                    <CInput custom size="sm" name="telp_penerima" onChange={onFormChange} />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">
                      <small>No Rekening</small>
                    </CLabel>
                  </CCol>
                  <CCol md="9">
                    <CInput custom size="sm" name="norek_penerima" onChange={onFormChange} />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">
                      <small>Bank - Cabang (Kota - Negara)</small>
                    </CLabel>
                  </CCol>
                  <CCol md="9">
                    <CInput custom size="sm" name="bank_cabang" onChange={onFormChange} />
                  </CCol>
                </CFormGroup>
                <br />
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">
                      <small>Jumlah Dana</small>
                    </CLabel>
                  </CCol>
                  <CCol md="9">
                    <CInput custom size="sm" name="jumlah" onChange={onFormChange} />
                  </CCol>
                </CFormGroup>
                <CCardFooter>
                  <CButton type="submit" size="sm" color="primary" className="float-right" onClick={submitForm}>
                    <CIcon name="cil-scrubber" /> Print
                  </CButton>
                </CCardFooter>
              </CForm>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  );
};

export default AddGalery;
