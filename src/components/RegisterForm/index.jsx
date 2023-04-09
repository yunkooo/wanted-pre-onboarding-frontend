import React from 'react';
import { Stack } from '@chakra-ui/react';
import CommonButton from '../common/CommonButton';
import CommonInput from '../common/CommonInput';
import useInput from '../../lib/hook/useInput';
import { validation } from '../../lib/utils/validation';

const RegisterForm = () => {
  const [{ email, password, rePassword }, onChage] = useInput({ email: '', password: '', rePassword: '' });

  const isDisabled =
    !!email &&
    !!password &&
    !!rePassword &&
    validation.isEmailCheck(email).value &&
    validation.isPasswordCheck(password).value &&
    validation.isPasswordReCheck(password, rePassword).value;

  return (
    <form>
      <Stack spacing={3}>
        <CommonInput
          id='email'
          type='email'
          name='email'
          placeholder='이메일 입력'
          label='Email'
          testid='email-input'
          onChange={onChage}
          errorMSG={validation.isEmailCheck(email).message}
        />
        <CommonInput
          id='password'
          type='password'
          name='password'
          placeholder='비밀번호 입력'
          label='Password'
          testid='password-input'
          onChange={onChage}
          errorMSG={validation.isPasswordCheck(password).message}
        />
        <CommonInput
          id='passwordCheck'
          type='password'
          name='rePassword'
          placeholder='비밀번호 확인 입력'
          label='Password check'
          onChange={onChage}
          errorMSG={validation.isPasswordReCheck(password, rePassword).message}
        />

        <CommonButton
          children={'회원가입'}
          bg={'blue.400'}
          color={'white'}
          _hover={{ bg: 'blue.500' }}
          isDisabled={!isDisabled}
        />
      </Stack>
    </form>
  );
};

export default RegisterForm;
