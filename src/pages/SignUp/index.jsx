import { Box, FormControl, FormLabel, Heading, Input, Stack, Link } from '@chakra-ui/react';
import CommonButton from '../../components/common/Button';

const SignUp = () => {
  return (
    <Box w='sm' rounded={'lg'} bg={'gray.50'} py={8} px={10} textAlign={'center'}>
      <Heading fontSize={'3xl'} mb={6}>
        Login
      </Heading>
      <Stack spacing={6}>
        <form>
          <Stack spacing={3}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type='email' />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input type='password' />
            </FormControl>
            <CommonButton children={'로그인'} bg={'blue.400'} color={'white'} _hover={{ bg: 'blue.500' }} />
          </Stack>
        </form>
        <Link color={'gray'} _hover={{ color: 'black' }}>
          Sign in
        </Link>
      </Stack>
    </Box>
  );
};

export default SignUp;
