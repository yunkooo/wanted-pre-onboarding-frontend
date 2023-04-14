import React from 'react';
import { Button } from '@chakra-ui/react';

export default function CommonButton({ testId, children, isDisabled = false, ...rest }) {
  return (
    <Button data-testid={testId} isDisabled={isDisabled} {...rest}>
      {children}
    </Button>
  );
}
