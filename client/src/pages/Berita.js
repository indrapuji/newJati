import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Col, Row, Container, Image } from 'react-bootstrap';
import { motion } from 'framer-motion';
import axios from 'axios';
import host from '../hooks/host';

export default () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    getNews();
  }, []);
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

  const getNews = async () => {
    try {
      const { data } = await axios({
        method: 'GET',
        url: host + '/content?category=berita',
      });
      setNews(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <motion.div initial="init" animate="in" exit="out" variants={pageTransition}>
      <Navigation />
      <Container>
        <p style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 50 }}>Berita</p>
        <Container>
          {news &&
            news.map((item, index) => {
              return (
                <Row ley={index} style={{ marginBottom: 10 }}>
                  <Col md="4">
                    <Image src={item.image_url} rounded style={{ height: 200, width: 300 }} />
                  </Col>
                  <Col>
                    <motion.div whileHover={{ scale: 1.1 }}>
                      <p style={{ fontWeight: 'bold' }}>{item.title}</p>
                      <p>{item.text}</p>
                    </motion.div>
                  </Col>
                </Row>
              );
            })}
        </Container>
      </Container>
      <Footer />
    </motion.div>
  );
};
