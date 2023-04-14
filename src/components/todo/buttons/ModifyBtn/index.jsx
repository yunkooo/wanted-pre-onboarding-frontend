import React from 'react';
import { Button } from '@chakra-ui/react';
import { EditIcon } from '@chakra-ui/icons';

export default function ModifyBtn({ func }) {
  return (
    <Button mt={0} bg={'inherit'} w={'min-content'} data-testid='modify-button' onClick={func}>
      <EditIcon />
    </Button>
  );
}
