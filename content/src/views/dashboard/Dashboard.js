import React from 'react';
import WidgetsDropdown from './WidgetsDropdown';
import WidgetsCard from './WidgetsCard';

const Dashboard = () => {
  const dataDropdown = {
    pendidikan: {
      nama: 'Pendidikan',
      count: 3,
    },
    perumahan: {
      nama: 'Perumahan',
      count: 4,
    },
    kesehatan: {
      nama: 'Kesehatan',
      count: 5,
    },
  };
  const dataCard = {
    berita: {
      nama: 'Berita',
      count: 3,
    },
    galeri: {
      nama: 'Galeri',
      count: 4,
    },
  };
  return (
    <>
      <h1 style={{ textAlign: 'center', marginBottom: 50 }}>Dashboard</h1>
      <WidgetsDropdown data={dataDropdown} />
      <WidgetsCard data={dataCard} />
    </>
  );
};

export default Dashboard;
