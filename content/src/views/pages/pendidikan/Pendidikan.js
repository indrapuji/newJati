import React from 'react';
import { CCard, CCardBody, CCardHeader, CCol, CDataTable, CRow, CButton } from '@coreui/react';

import usersData from '../../users/UsersData';

const fields = ['Image', 'Title'];

const Tables = () => {
  return (
    <>
      <CRow>
        <CCol xs="12" lg="12">
          <CCard>
            <CCardHeader>
              <strong>Data Realisasi Pendidikan</strong>
            </CCardHeader>
            <CCol>
              <div style={{ marginTop: 15 }}>
                <CButton color="success" to="/realisasi/pendidikan/add">
                  Tambah
                </CButton>
              </div>
            </CCol>
            <CCardBody>
              <CDataTable items={usersData} fields={fields} itemsPerPage={5} pagination />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Tables;
