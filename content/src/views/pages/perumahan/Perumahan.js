import React, { useEffect, useState } from 'react';
import { CCard, CCardBody, CCardHeader, CCol, CDataTable, CRow, CButton, CImg } from '@coreui/react';
import axios from 'axios';
import HostUrl from '../../../utilities/HostUrl';
import newAlert from '../../../components/NewAlert';

const fields = [
  { key: 'title', label: 'Deskripsi', _style: { width: '60%' } },
  { key: 'image_url', label: 'Path', _style: { width: '20%' } },
  { key: 'image', label: 'Image', _style: { width: '20%' } },
  { key: 'action', _style: { width: '10%' } },
];
const Perumahan = () => {
  const [dataPerumahan, setDataPerumahan] = useState([]);
  useEffect(() => {
    getPerumahan();
  }, []);

  const getPerumahan = async () => {
    try {
      const { data } = await axios({
        method: 'GET',
        url: HostUrl + '/content?category=perumahan',
      });
      setDataPerumahan(data);
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
      getPerumahan();
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
              <strong>Data Realisasi Perumahan</strong>
            </CCardHeader>
            <CCol>
              <div style={{ marginTop: 15 }}>
                <CButton color="success" to="/realisasi/perumahan/add">
                  Tambah
                </CButton>
              </div>
            </CCol>
            <CCardBody>
              <CDataTable
                items={dataPerumahan}
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
                  image: (item) => (
                    <td>
                      <CImg src={item.image_url} height={100} />
                      {item.status}
                    </td>
                  ),
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Perumahan;
