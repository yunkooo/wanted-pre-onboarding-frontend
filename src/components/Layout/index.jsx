import { Flex } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <Flex minH={'100vh'} align={'center'} justify={'center'} flexDirection={'column'}>
      <Outlet />
    </Flex>
  );
};

export default Layout;
