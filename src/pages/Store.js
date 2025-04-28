import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  margin-top: 50px;
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
`;

const Button = styled.a`
  display: inline-block;
  margin: 10px;
  padding: 10px 20px;
  background-color: #e0e0e0;
  border: none;
  text-decoration: none;
  color: black;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #d5d5d5;
  }
`;

const Store = () => {
  return (
    <Container>
      <Title>Магазины</Title>
      <Subtitle>Выберите магазин для подробной информации:</Subtitle>
      <Button href="https://www.amazon.com" target="_blank" rel="noopener noreferrer">
        Amazon
      </Button>
      <Button href="https://www.ebay.com" target="_blank" rel="noopener noreferrer">
        eBay
      </Button>
      <Button href="https://www.etsy.com" target="_blank" rel="noopener noreferrer">
        Etsy
      </Button>
    </Container>
  );
};

export default Store;