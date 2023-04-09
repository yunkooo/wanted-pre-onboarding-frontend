import { Box, Heading, Stack, Link } from '@chakra-ui/react';
import LoginForm from '../../components/LoginForm';

const SignIn = () => {
  return (
    <Box w='sm' rounded={'lg'} bg={'gray.50'} py={8} px={10} textAlign={'center'}>
      <Heading fontSize={'3xl'} mb={6}>
        Login
      </Heading>
      <Stack spacing={6}>
        <LoginForm />
        <Link color={'gray'} _hover={{ color: 'black' }} href='/signup'>
          Sign Up
        </Link>
      </Stack>
    </Box>
  );
};

export default SignIn;
