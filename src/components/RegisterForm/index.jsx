import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Stack, useToast } from '@chakra-ui/react';
import CommonButton from '../common/CommonButton';
import CommonInput from '../common/CommonInput';
import useInput from '../../lib/hook/useInput';
import { validation, validationError } from '../../lib/utils/validation';
import { registerApi } from '../../api/auth';

const RegisterForm = () => {
  const toastMessage = useToast();
  const navigate = useNavigate();
  const [{ email, password, rePassword }, onChage] = useInput({ email: '', password: '', rePassword: '' });

  const isDisabled =
    !!email &&
    !!password &&
    !!rePassword &&
    validation.isEmailCheck(email).value &&
    validation.isPasswordCheck(password).value &&
    validation.isPasswordCheck(rePassword).value;

  const submitHandler = async e => {
    e.preventDefault();
    if (password !== rePassword) {
      toastMessage({
        title: `${validationError.PASSWORD_CHECK_ERROR}`,
        status: 'error',
        duration: 3000,
        isClosable: false,
      });
      return;
    }

    const res = await registerApi(email, password);

    if (res?.status === 400) {
      toastMessage({
        title: `${res?.data.message}`,
        status: 'error',
        duration: 3000,
        isClosable: false,
      });
    }
    if (res?.status === 201) {
      return navigate('/signin');
    }
  };

  return (
    <form onSubmit={submitHandler}>
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
          errorMSG={validation.isPasswordCheck(rePassword).message}
        />

        <CommonButton
          type='submit'
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
