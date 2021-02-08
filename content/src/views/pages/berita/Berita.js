import React, { useEffect, useState } from 'react';
import { CCard, CCardBody, CCardHeader, CCol, CDataTable, CRow, CButton } from '@coreui/react';
import axios from 'axios';
import HostUrl from '../../../utilities/HostUrl';
import newAlert from '../../../components/NewAlert';

const fields = [
  { key: 'title', label: 'Title', _style: { width: '40%' } },
  { key: 'text', label: 'Deskripsi', _style: { width: '40%' } },
  { key: 'image_url', label: 'Image Path' },
  { key: 'action', _style: { width: '10%' } },
];

const Berita = () => {
  const [dataBerita, setDataBerita] = useState([]);
  useEffect(() => {
    getBerita();
  }, []);

  const getBerita = async () => {
    try {
      const { data } = await axios({
        method: 'GET',
        url: HostUrl + '/content?category=berita',
      });
      setDataBerita(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const { data } = await axios({
        method: 'DELETE',
        url: HostUrl + '/content/' + id,
      });
      newAlert({ status: 'success', message: 'Berhasil' });
      getBerita();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <CRow>
        <CCol xs="12" lg="12">
          <CCard>
            <CCardHeader>
              <strong>Berita</strong>
            </CCardHeader>
            <CCol>
              <div style={{ marginTop: 15 }}>
                <CButton color="success" to="/berita/add">
                  Tambah
                </CButton>
              </div>
            </CCol>
            <CCardBody>
              <CDataTable
                items={dataBerita}
                fields={fields}
                itemsPerPage={10}
                pagination
                scopedSlots={{
                  action: (item, index) => {
                    return (
                      <td>
                        <CButton
                          color="danger"
                          // variant="outline"
                          // shape="pill"
                          size="sm"
                          onClick={() => {
                            handleDelete(item.id);
                          }}
                        >
                          Delete
                        </CButton>
                      </td>
                    );
                  },
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Berita;
