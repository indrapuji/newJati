import React from "react"; // useEffect, useState
// import { CCard, CCol, CRow, CDataTable, CFormGroup, CLabel } from "@coreui/react";

const EmployeePrint = React.forwardRef((props, ref) => {
  // eslint-disable-next-line
  const { dataPrint } = props;

  return (
    <div className="print-container">
      <div className="print-page page-break" ref={ref}></div>
    </div>
  );
});

export default EmployeePrint;
