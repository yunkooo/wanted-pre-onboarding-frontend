import React from 'react';
import { Stack } from '@chakra-ui/react';
import CommonButton from '../common/CommonButton';
import CommonInput from '../common/CommonInput';

export default function LoginForm() {
  return (
    <form>
      <Stack spacing={3}>
        <CommonInput
          id='email'
          type='email'
          placeholder='이메일 입력'
          label='Email'
          testid='email-input'
          errorMSG={''}
        />
        <CommonInput
          id='password'
          type='password'
          placeholder='비밀번호 입력'
          label='Password'
          testid='password-input'
          errorMSG={''}
        />

        <CommonButton children={'로그인'} bg={'blue.400'} color={'white'} _hover={{ bg: 'blue.500' }} />
      </Stack>
    </form>
  );
}
