function DashboardCount(newData) {
  let result = [];
  let countPendidikan = 0;
  let countPerumahan = 0;
  let countKesehatan = 0;
  let countBerita = 0;
  let countGaleri = 0;
  for (let i = 0; i < newData.length; i++) {
    if (newData[i].category === 'pendidikan') {
      countPendidikan++;
    }
    if (newData[i].category === 'perumahan') {
      countPerumahan++;
    }
    if (newData[i].category === 'kesehatan') {
      countKesehatan++;
    }
    if (newData[i].category === 'berita') {
      countBerita++;
    }
    if (newData[i].category === 'galeri') {
      countGaleri++;
    }
  }
  result = {
    dataDropdown: {
      pendidikan: { nama: 'Pendidikan', count: countPendidikan },
      perumahan: { nama: 'Perumahan', count: countPerumahan },
      kesehatan: { nama: 'Kesehatan', count: countKesehatan },
    },
    dataCard: {
      berita: { nama: 'Berita', count: countBerita },
      galeri: { nama: 'Galeri', count: countGaleri },
    },
  };
  return result;
}

export default DashboardCount;
