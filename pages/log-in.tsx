import { NextPage } from 'next';
import { Layout } from '../components/layouts';
import { Box, Typography } from '@mui/material';
import { LogInForm } from '../components/ui/';


const SignInPage: NextPage = () => {

  return (
    <Layout title={'login'} withMenu={false}>
      <Box display={'flex'} flexDirection={'column'} height={'100%'}
           justifyContent={'center'}>
        <Typography variant={'body1'} py={2} fontWeight={'bold'}>
          START FOR FREE
        </Typography>
        <Typography variant={'h4'} py={2}>
          Create new account
          <span style={{ color: 'blue' }}>
            .
          </span>
        </Typography>
        <Typography variant={'body1'} py={2}>
          Already A member? Log In
        </Typography>
        <LogInForm/>
      </Box>
    </Layout>
  );
};

export default SignInPage;
