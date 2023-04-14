import React from 'react';
import { Button, Icon } from '@chakra-ui/react';
import { GrLogout } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';

export default function LogoutBtn() {
  const navigate = useNavigate();

  const logOutHandler = () => {
    localStorage.removeItem('token');
    return navigate('signin');
  };

  return (
    <Button bg={'inherit'} position={'absolute'} top={'40px'} boxSize={'6'} onClick={logOutHandler}>
      <Icon as={GrLogout} />
    </Button>
  );
}
