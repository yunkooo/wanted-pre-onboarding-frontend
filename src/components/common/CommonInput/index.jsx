import { FormControl, FormHelperText, FormErrorMessage, FormLabel, Input, Stack } from '@chakra-ui/react';
import React from 'react';

export default function CommonInput({
  id,
  type,
  onChange,
  placeholder,
  value,
  label,
  testid,
  errorMSG = '',
  helpMSG = '',
}) {
  return (
    <FormControl id={id} isInvalid={errorMSG}>
      <FormLabel>{label}</FormLabel>
      <Input type={type} onChange={onChange} placeholder={placeholder} value={value} data-testid={testid} />
      {!errorMSG ? <FormHelperText>{helpMSG}</FormHelperText> : <FormErrorMessage>{errorMSG}</FormErrorMessage>}
    </FormControl>
  );
}
