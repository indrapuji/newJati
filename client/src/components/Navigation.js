import React, { useState } from "react";
import { Navbar, NavDropdown, DropdownButton, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default () => {
  const [navbar, setNavbar] = useState(false);

  function changeBackground() {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }

  window.addEventListener("scroll", changeBackground);
  return (
    <>
      <Navbar collapseOnSelect expand="lg" sticky="top" className={navbar ? "navbar active" : "navbar"}>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-around">
          <Link to="/">Home</Link>
          <NavDropdown title="Pembaharuan">
            <NavDropdown.Item href="https://jatisejahtera-cms.vercel.app/" style={{ color: "blue" }}>
              Admin
            </NavDropdown.Item>
          </NavDropdown>
          {/* <Link to="/pembaharuan">Pembaharuan</Link> */}
          <NavDropdown title="Profile">
            <NavDropdown.Item>
              <Link to="/profile/about">Tentang Kami</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/profile/kepengurusan">Kepengurusan</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/profile/cabang">Alamat Kantor YKP3JS</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/profile/sejarah">Sejarah Singkat Yayasan</Link>
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
            {/* <Link to="/data/realisasi">Data Realisasi</Link> */}
            <DropdownButton style={{ left: 10 }} drop="right" variant="link" title="Data Realisasi">
              <Dropdown.Item>
                <Link to="/data/realisasipendidikan">Pendidikan</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="/data/realisasiperumahan">Perumahan</Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="/data/realisasikesehatan">Kesehatan</Link>
              </Dropdown.Item>
              {/* <Dropdown.Item>
                <Link to="/data/realisasisosial">Sosial</Link>
              </Dropdown.Item> */}
            </DropdownButton>

            {/* <NavDropdown.Item>
              <Link to="/data/update">Pengkinian Data</Link>
            </NavDropdown.Item> */}
            {/* <NavDropdown.Item>
              <Link to="/data/claim">Pengajuan Claim</Link>
            </NavDropdown.Item> */}
            {/* <NavDropdown.Item href="https://jatisejahtera-cms.vercel.app/" style={{ color: "blue" }}>
              Admin
            </NavDropdown.Item> */}
          </NavDropdown>
          <Link to="/berita">Berita</Link>
          <Link to="/galery">Galery</Link>
          <Link to="/contact">Kontak</Link>
          {localStorage.token ? <Link to="/profile">Profile</Link> : <Link to="/login">Login</Link>}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
