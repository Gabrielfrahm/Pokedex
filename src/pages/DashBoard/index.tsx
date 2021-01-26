import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
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
