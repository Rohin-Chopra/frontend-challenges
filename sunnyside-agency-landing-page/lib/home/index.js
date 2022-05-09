import Head from 'next/head';
import { Fragment } from 'react';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import { StyledHeader } from './style';

const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>Sunny Side Agency</title>
      </Head>
      <StyledHeader>
        <Navbar />
        <h1>WE ARE CREATIVES</h1>
      </StyledHeader>
    </Fragment>
  );
};

export default Home;
