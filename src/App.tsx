import React from 'react';
import { Container } from './GlobalStyles';
import { RoutesStructure } from './router';

export const App: React.FC = () => {
  return (
    <Container>
      <RoutesStructure />
    </Container>
  );
};
