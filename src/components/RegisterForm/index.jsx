import React from 'react';
import { Stack } from '@chakra-ui/react';
import CommonButton from '../common/CommonButton';
import CommonInput from '../common/CommonInput';

const RegisterForm = () => {
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
        <CommonInput
          id='passwordCheck'
          type='password'
          placeholder='비밀번호 확인 입력'
          label='Password check'
          errorMSG={''}
        />

        <CommonButton children={'회원가입'} bg={'blue.400'} color={'white'} _hover={{ bg: 'blue.500' }} />
      </Stack>
    </form>
  );
};

export default RegisterForm;
