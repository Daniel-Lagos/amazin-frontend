import { NextPage } from 'next';
import { Layout } from '../components/layouts';
import { Box, Typography } from '@mui/material';


// https://images.unsplash.com/photo-1622730000579-e6bde344d6a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80
const LoginPage: NextPage = () => {
  return (
    <Layout title={'login'}>
      <Box display={'flex'} flexDirection={'column'} height={'100%'}
           justifyContent={'center'}>
        <Typography>
          START FOR FREE
        </Typography>
        <Typography>
          Create New account
          <span style={{ color: 'blue' }}>
            .
          </span>
        </Typography>
        <Typography>
          Already A member? Log In
        </Typography>

        <Box>
          <Typography>
            form
          </Typography>
        </Box>

      </Box>
    </Layout>
  );
};

export default LoginPage;
