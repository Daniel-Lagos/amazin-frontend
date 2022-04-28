import { NextPage } from 'next';
import { Layout } from '../components/layouts';
import {
  Box, Button, Grid, TextField, Typography
} from '@mui/material';


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

        <Grid container width={'50%'} spacing={4}>
          <Grid item xs={6}>
            <TextField
              type={'text'}
              placeholder={'input'}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type={'text'}
              placeholder={'input'}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type={'text'}
              placeholder={'input'}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <Button fullWidth variant={'contained'}>
              change method
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button fullWidth variant={'contained'} >
              Create Acount
            </Button>
          </Grid>

        </Grid>

      </Box>
    </Layout>
  );
};

export default LoginPage;
