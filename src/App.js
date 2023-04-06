import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './lib/styles/theme.js';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className='app'></div>
    </ChakraProvider>
  );
}

export default App;
