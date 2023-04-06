import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './lib/styles/theme.js';
import Router from './Router.js';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router />
    </ChakraProvider>
  );
}

export default App;
