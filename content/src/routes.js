import React from 'react';

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));

const Pendidikan = React.lazy(() => import('./views/pages/pendidikan/Pendidikan'));
const AddPendidikan = React.lazy(() => import('./views/pages/pendidikan/AddPendidikan'));
const Perumahan = React.lazy(() => import('./views/pages/perumahan/Perumahan'));
const AddPerumahan = React.lazy(() => import('./views/pages/perumahan/AddPerumahan'));
const Kesehatan = React.lazy(() => import('./views/pages/kesehatan/Kesehatan'));
const AddKesehatan = React.lazy(() => import('./views/pages/kesehatan/AddKesehatan'));
const Berita = React.lazy(() => import('./views/pages/berita/Berita'));
const AddBerita = React.lazy(() => import('./views/pages/berita/AddBerita'));
const Galeri = React.lazy(() => import('./views/pages/galeri/Galeri'));
const AddGaleri = React.lazy(() => import('./views/pages/galeri/AddGaleri'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/realisasi/pendidikan', exact: true, name: 'Pendidikan', component: Pendidikan },
  { path: '/realisasi/pendidikan/add', exact: true, name: 'Tambah Data Realisasi Pendidikan', component: AddPendidikan },
  { path: '/realisasi/perumahan', exact: true, name: 'Perumahan', component: Perumahan },
  { path: '/realisasi/perumahan/add', exact: true, name: 'Tambah Data Realisasi Perumahan', component: AddPerumahan },
  { path: '/realisasi/kesehatan', exact: true, name: 'Kesehatan', component: Kesehatan },
  { path: '/realisasi/kesehatan/add', exact: true, name: 'Tambah Data Realisasi Kesehatan', component: AddKesehatan },
  { path: '/berita', exact: true, name: 'Berita', component: Berita },
  { path: '/berita/add', exact: true, name: 'Tambah Berita', component: AddBerita },
  { path: '/galeri', exact: true, name: 'Galeri', component: Galeri },
  { path: '/galeri/add', exact: true, name: 'Tambah Galeri', component: AddGaleri },
];

export default routes;
