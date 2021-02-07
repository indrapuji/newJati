import React, {
  useState,
  // useEffect
} from 'react';
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
  CInputFile,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import HostUrl from '../../../utilities/HostUrl';
import newAlert from '../../../components/NewAlert';

const RegisterCompany = () => {
  const [formData, setFormData] = useState({
    nama: '',
    kode_perusahaan: '',
    alamat_1: '',
    alamat_2: '',
    provinsi: '',
    kota: '',
    kecamatan: '',
    kelurahan: '',
    kode_pos: '',
    telepon: '',
    pic: '',
    email: '',
  });

  const history = useHistory();
  const onFormChange = (event) => {
    const { value, name } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const submitForm = async (e) => {
    try {
      e.preventDefault();
      const { nama, kode_perusahaan, alamat_1 } = formData;
      if (nama === '' || kode_perusahaan === '' || alamat_1 === '') {
        newAlert({ status: 'error', message: 'Isi Semua Form' });
        return;
      }
      await axios({
        method: 'POST',
        url: HostUrl + '/company/create',
        data: formData,
        headers: {
          token: localStorage.getItem('token'),
        },
      });
      newAlert({ status: 'success', message: 'Berhasil' });
      history.push('/perusahaan');
    } catch (error) {
      // const { msg } = error.response.data;
      newAlert({ status: 'error', message: 'Gunakan kode perusahaan lain' });
      console.log(error.response.data);
    }
  };
  return (
    <CContainer>
      <CRow className="justify-content-center">
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
              <strong>Tambah Galeri</strong>
            </CCardHeader>
            <CCardBody>
              <CForm onSubmit={submitForm}>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">
                      <small>Title</small>
                    </CLabel>
                  </CCol>
                  <CCol md="9">
                    <CInput custom size="sm" name="nama" onChange={onFormChange} />
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol md="3">
                    <CLabel htmlFor="text-input">
                      <small>image</small>
                    </CLabel>
                  </CCol>
                  <CCol md="9">
                    <CInputFile id="file-input" size="sm" name="file-input" onChange={onFormChange} />
                  </CCol>
                </CFormGroup>
                <CCardFooter>
                  <CButton type="submit" size="sm" color="primary" className="float-right" onClick={submitForm}>
                    <CIcon name="cil-scrubber" /> Simpan
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

export default RegisterCompany;
