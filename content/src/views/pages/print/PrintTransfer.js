import React, { useState, useRef } from "react";
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
  CImg,
  CInputRadio,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import newAlert from "../../../components/NewAlert";
import { useReactToPrint } from "react-to-print";
import ComponentToPrint from "./ComponentToPrint";
import BCA from "../../../assets/images/BCA.png";
import BRI from "../../../assets/images/BRI.png";
import BTN from "../../../assets/images/BTN.png";
import MANDIRI from "../../../assets/images/MANDIRI.png";

const AddGalery = () => {
  const [dataPrint, setDataPrint] = useState("");
  const [formData, setFormData] = useState({
    nama_pengirim: "",
    alamat_pengirim: "",
    telp_pengirim: "",
    norek_pengirim: "",
    nama_penerima: "",
    alamat_penerima: "",
    telp_penerima: "",
    norek_penerima: "",
    bank_cabang: "",
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
    const {
      nama_pengirim,
      alamat_pengirim,
      telp_pengirim,
      norek_pengirim,
      nama_penerima,
      alamat_penerima,
      telp_penerima,
      norek_penerima,
      bank_cabang,
      jumlah,
    } = formData;
    if (
      nama_pengirim === "" ||
      alamat_pengirim === "" ||
      telp_pengirim === "" ||
      norek_pengirim === "" ||
      nama_penerima === "" ||
      alamat_penerima === "" ||
      telp_penerima === "" ||
      norek_penerima === "" ||
      bank_cabang === "" ||
      jumlah === ""
    ) {
      newAlert({ status: "error", message: "Isi Semua Form" });
      return;
    }
    setDataPrint(formData);
    // newAlert({ status: "success", message: "Berhasil" });
  };
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    pageStyle: `@page {
      size: legal;
      margin: 0px;
    }

    @media all {
      .pagebreak {
        display: none;
      }
    }

    @media print {
      .pagebreak {
        display: block;
        page-break-before: always;
        page-break-after: always;
      }
    }`,
  });
  return (
    <CContainer>
      <CRow className="justify-content-center">
        {!dataPrint ? (
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
                  <CFormGroup row>
                    <CCol md="3">template</CCol>
                    <CCol md="2" style={{ marginLeft: 20 }}>
                      <CInputRadio />
                      <CImg src={BCA} style={{ width: 100 }} />
                    </CCol>
                    <CCol md="2">
                      <CInputRadio />
                      <CImg src={BRI} style={{ width: 100 }} />
                    </CCol>
                    <CCol md="2">
                      <CInputRadio />
                      <CImg src={BTN} style={{ width: 100 }} />
                    </CCol>
                    <CCol md="2">
                      <CInputRadio />
                      <CImg src={MANDIRI} style={{ width: 100 }} />
                    </CCol>
                  </CFormGroup>
                  <CCardFooter>
                    <CButton type="submit" size="sm" color="primary" className="float-right" onClick={submitForm}>
                      <CIcon name="cil-scrubber" /> Prosess
                    </CButton>
                  </CCardFooter>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        ) : (
          <CCol xs="12" md="12">
            <CCard>
              <CCardHeader>
                <strong>Preview</strong>
              </CCardHeader>
              <CCardBody>
                <CRow>
                  <CCol md="6">
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
                        <CLabel htmlFor="text-input">
                          <small>{formData.nama_penerima}</small>
                        </CLabel>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="text-input">
                          <small>Alamat</small>
                        </CLabel>
                      </CCol>
                      <CCol md="9">
                        <CLabel htmlFor="text-input">
                          <small>{formData.alamat_penerima}</small>
                        </CLabel>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="text-input">
                          <small>Telepon</small>
                        </CLabel>
                      </CCol>
                      <CCol md="9">
                        <CLabel htmlFor="text-input">
                          <small>{formData.telp_penerima}</small>
                        </CLabel>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="text-input">
                          <small>No Rekening</small>
                        </CLabel>
                      </CCol>
                      <CCol md="9">
                        <CLabel htmlFor="text-input">
                          <small>{formData.norek_penerima}</small>
                        </CLabel>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="text-input">
                          <small>Cabang</small>
                        </CLabel>
                      </CCol>
                      <CCol md="9">
                        <CLabel htmlFor="text-input">
                          <small>{formData.bank_cabang}</small>
                        </CLabel>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="text-input">
                          <small>Nominal</small>
                        </CLabel>
                      </CCol>
                      <CCol md="9">
                        <CLabel htmlFor="text-input">
                          <small>{formData.jumlah}</small>
                        </CLabel>
                      </CCol>
                    </CFormGroup>
                  </CCol>
                  <CCol md="6">
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
                        <CLabel htmlFor="text-input">
                          <small>{formData.nama_pengirim}</small>
                        </CLabel>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="text-input">
                          <small>Alamat</small>
                        </CLabel>
                      </CCol>
                      <CCol md="9">
                        <CLabel htmlFor="text-input">
                          <small>{formData.alamat_pengirim}</small>
                        </CLabel>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="text-input">
                          <small>Telepon</small>
                        </CLabel>
                      </CCol>
                      <CCol md="9">
                        <CLabel htmlFor="text-input">
                          <small>{formData.telp_pengirim}</small>
                        </CLabel>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="text-input">
                          <small>No Rekening</small>
                        </CLabel>
                      </CCol>
                      <CCol md="9">
                        <CLabel htmlFor="text-input">
                          <small>{formData.norek_pengirim}</small>
                        </CLabel>
                      </CCol>
                    </CFormGroup>
                  </CCol>
                </CRow>
                <CCardFooter>
                  <CButton type="submit" size="sm" color="primary" className="float-right" onClick={handlePrint}>
                    <CIcon name="cil-scrubber" /> Print
                  </CButton>
                </CCardFooter>
              </CCardBody>
            </CCard>
          </CCol>
        )}
      </CRow>
      <ComponentToPrint ref={componentRef} dataPrint={dataPrint} />
    </CContainer>
  );
};

export default AddGalery;
