import { NextPage } from 'next';
import { Layout } from '../components/layouts';
import { Box, Typography } from '@mui/material';


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
