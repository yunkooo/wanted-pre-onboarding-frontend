import React from 'react';
import { Stack, useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import CommonButton from '../common/CommonButton';
import CommonInput from '../common/CommonInput';
import useInput from '../../lib/hook/useInput';
import { validation } from '../../lib/utils/validation';
import { loginApi } from '../../api/auth';

export default function LoginForm() {
  const toastMessage = useToast();
  const navigate = useNavigate();
  const [{ email, password }, onChage] = useInput({ email: '', password: '', rePassword: '' });

  const isDisabled =
    !!email && !!password && validation.isEmailCheck(email).value && validation.isPasswordCheck(password).value;

  const submitHandler = async e => {
    e.preventDefault();

    const res = await loginApi(email, password);

    if (res?.status === 401) {
      toastMessage({
        title: '이메일 또는 비밀번호가 틀렸습니다.',
        status: 'error',
        duration: 3000,
        isClosable: false,
      });
    }
    if (res?.status === 404) {
      toastMessage({
        title: `${res?.data.message}`,
        status: 'error',
        duration: 3000,
        isClosable: false,
      });
    }
    if (res?.status === 200) {
      localStorage.setItem('token', res.data.access_token);
      return navigate('/todo');
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

        <CommonButton
          type='submit'
          children={'로그인'}
          bg={'blue.400'}
          color={'white'}
          _hover={{ bg: 'blue.500' }}
          isDisabled={!isDisabled}
        />
      </Stack>
    </form>
  );
}
