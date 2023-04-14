import React from 'react';
import { Button } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

export default function UpdateBtn() {
  return (
    <Button type='submit' data-testid='submit-button' bg={'inherit'} w={2}>
      <CheckIcon />
    </Button>
  );
}
