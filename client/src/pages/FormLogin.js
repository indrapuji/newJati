import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import host from '../hooks/host';

export default () => {
  const history = useHistory();
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
  const [dataForm, setDataForm] = useState({
    nama: '',
    password: '',
  });
  const onFormChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setDataForm({
      ...dataForm,
      [name]: value,
    });
  };
  const onFormSubmit = async (e) => {
    try {
      e.preventDefault();
      const { data } = await axios({
        method: 'POST',
        url: `${host}/users/login/anggota`,
        data: dataForm,
      });
      localStorage.setItem('token', data.access_token);
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
        title: 'Nama Atau Password salah',
        html: `${msg}`,
      });
    }
  };
  return (
    <motion.div initial="init" animate="in" exit="out" variants={pageTransition}>
      <div className="wrapper fadeInDown ">
        <div id="formContent">
          <div className="fadeIn first">
            <h1>Login</h1>
          </div>
          <form onSubmit={onFormSubmit}>
            <input type="text" className="fadeIn second textInput" name="nama" placeholder="nama" onChange={onFormChange} />
            <div style={{ fontSize: 10, color: 'grey' }}>*Penulisan nama gunakan huruf kecil, tanpa gelar</div>
            <input type="password" className="fadeIn third textInput" name="password" placeholder="password" onChange={onFormChange} />
            <div style={{ fontSize: 10, color: 'grey' }}>*Penulisan Pasword gunakan NIK</div>
            <div style={{ marginTop: '3%', marginBottom: '3%', marginLeft: '7%', marginRight: '7%' }}>
              <Button className="fadeIn fourth" block type="submit">
                Login
              </Button>
            </div>
            <div style={{ marginTop: '3%', marginBottom: '3%', marginLeft: '7%', marginRight: '7%' }}>
              <Button className="fadeIn fourth" block onClick={() => history.push('/')}>
                Back to Home
              </Button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};
