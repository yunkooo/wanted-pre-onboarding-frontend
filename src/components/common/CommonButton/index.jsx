import React from 'react';
import { Button } from '@chakra-ui/react';

export default function CommonButton({ children, isDisabled = false, ...rest }) {
  return (
    <Button isDisabled={isDisabled} {...rest}>
      {children}
    </Button>
  );
}
