import React from 'react';
import Directory from '../../components/directory/Directory'
import './HomePage.styles.scss';

import  { HomePageContainer } from './HomePage.styles.jsx';

const HomePage = () => (
  <HomePageContainer>
    <Directory />
  </HomePageContainer>
)

export default HomePage