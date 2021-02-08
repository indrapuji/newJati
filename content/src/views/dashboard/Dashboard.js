import React, { useEffect, useState } from 'react';
import WidgetsDropdown from './WidgetsDropdown';
import WidgetsCard from './WidgetsCard';
import DashboardCount from '../../utilities/DashboardCount';
import axios from 'axios';
import HostUrl from '../../utilities/HostUrl';

const Dashboard = () => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const { data } = await axios({
        method: 'GET',
        url: HostUrl + '/content',
      });
      setCardData(DashboardCount(data));
    } catch (error) {
      console.log(error);
    }
  };
  console.log(cardData);

  return (
    <>
      <h1 style={{ textAlign: 'center', marginBottom: 50 }}>Dashboard</h1>
      <WidgetsDropdown data={cardData.dataDropdown} />
      <WidgetsCard data={cardData.dataCard} />
    </>
  );
};

export default Dashboard;
