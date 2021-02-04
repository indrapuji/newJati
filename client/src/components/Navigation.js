import React, { useState } from 'react';
import { Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default () => {
  const [navbar, setNavbar] = useState(false);

  function changeBackground() {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  window.addEventListener('scroll', changeBackground);
  return (
    <>
      <Navbar collapseOnSelect expand="lg" sticky="top" className={navbar ? 'navbar active' : 'navbar'}>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-around">
          <Link to="/">Home</Link>
          <NavDropdown title="Pembaharuan">
            <NavDropdown.Item href="https://cms.jatisejahtera.or.id/login" style={{ color: 'blue' }}>
              Admin
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Profile">
            <NavDropdown.Item>
              <Link to="/profile/about">Company Profile</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/profile/kepengurusan">Kepengurusan</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/profile/cabang">Alamat Kantor YKP3JS</Link>
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Program">
            <NavDropdown.Item>
              <Link to="/program/pendidikan">Pendidikan</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/program/sosial">Sosial</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/program/perumahan">Perumahan</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/program/kesehatan">Kesehatan</Link>
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Data">
            <NavDropdown.Item>
              <Link to="/data/realisasipendidikan">Data Realisasi Pendidikan</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/data/realisasiperumahan">Data Realisasi Perumahan</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/data/realisasikesehatan">Data Realisasi Kesehatan</Link>
            </NavDropdown.Item>
          </NavDropdown>
          <Link to="/berita">Berita</Link>
          <Link to="/galery">Galery</Link>
          <Link to="/contact">Kontak</Link>
          {localStorage.token ? <Link to="/profile">User</Link> : <Link to="/login">Login</Link>}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
