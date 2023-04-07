import { Box, Heading } from '@chakra-ui/react';
import RegisterForm from '../../components/RegisterForm';

const SignUp = () => {
  return (
    <Box w='sm' rounded={'lg'} bg={'gray.50'} py={8} px={10} textAlign={'center'}>
      <Heading fontSize={'3xl'} mb={6}>
        Create Account
      </Heading>
      <RegisterForm />
    </Box>
  );
};

export default SignUp;
