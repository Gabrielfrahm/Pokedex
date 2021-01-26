import React from 'react';
import Feed from '../../components/Feed';

import { Container } from './styles';

const DashBoard: React.FC = () => {
  return (
    <Container>
      <Feed />
    </Container>
  );
};

export default DashBoard;
