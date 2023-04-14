import React from 'react';
import { Button } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

export default function CancelBtn({ func }) {
  return (
    <Button bg={'inherit'} w={2} data-testid='cancel-button' onClick={func}>
      <CloseIcon />
    </Button>
  );
}
