import React from 'react';
import CIcon from '@coreui/icons-react';

const _nav = [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Content'],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Data Realisasi',
    route: '/realisasi',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Pendidikan',
        to: '/realisasi/pendidikan',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Perumahan',
        to: '/realisasi/perumahan',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Kesehatan',
        to: '/realisasi/kesehatan',
      },
    ],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Berita',
    to: '/berita',
    icon: <CIcon name="cil-chart-pie" customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Galeri',
    to: '/galeri',
    icon: <CIcon name="cil-star" customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Print'],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Transfer',
    to: '/transfer',
    icon: <CIcon name="cil-star" customClasses="c-sidebar-nav-icon" />,
  },
];

export default _nav;
