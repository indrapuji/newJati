import React from 'react';
import { CCard, CCardBody, CCardHeader, CCol, CDataTable, CRow, CButton } from '@coreui/react';

import usersData from '../../users/UsersData';

const fields = ['Title', 'Image'];

const Tables = () => {
  return (
    <>
      <CRow>
        <CCol xs="12" lg="12">
          <CCard>
            <CCardHeader>
              <strong>Galeri</strong>
            </CCardHeader>
            <CCol>
              <div style={{ marginTop: 15 }}>
                <CButton color="success" to="/galeri/add">
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
