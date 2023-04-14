import { FormControl, FormHelperText, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import React from 'react';

export default function CommonInput({
  id,
  type,
  onChange,
  placeholder,
  value,
  name,
  label = '',
  testid,
  errorMSG = '',
  helpMSG = '',
}) {
  return (
    <FormControl id={id} isInvalid={errorMSG}>
      {label ? <FormLabel>{label}</FormLabel> : null}
      <Input type={type} name={name} onChange={onChange} placeholder={placeholder} value={value} data-testid={testid} />
      {!errorMSG ? <FormHelperText>{helpMSG}</FormHelperText> : <FormErrorMessage>{errorMSG}</FormErrorMessage>}
    </FormControl>
  );
}
