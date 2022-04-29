import { NextPage } from 'next';
import { Layout } from '../components/layouts';
import {
  Box, Button, Grid, TextField, Typography
} from '@mui/material';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { ChangeEvent, useState } from 'react';


const LoginPage: NextPage = () => {

  const [form, setForm] = useState({});

  const handlerForm = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    event.preventDefault();
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });

  };

  const registerUser = async () => {

    const resp = await fetch(`${process.env.BACKEND_URL}sign-up`, {
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form),
      method: 'POST'
    });
    const { success = false, token = '' } = await resp.json();
    if (success)
      localStorage.setItem('token', token);


  };

  return (
    <Layout title={'login'}>
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

        <Grid container width={'50%'} spacing={4} pt={4}>
          <Grid item xs={6}>
            <TextField
              type={'text'}
              placeholder={'First name'}
              fullWidth
              InputProps={{
                endAdornment: <BadgeOutlinedIcon/>
              }}
              name={'name'}
              onChange={handlerForm}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              type={'text'}
              placeholder={'Last name'}
              fullWidth
              name={'lastName'}
              InputProps={{
                endAdornment: <BadgeOutlinedIcon/>
              }}
              onChange={handlerForm}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type={'text'}
              placeholder={'Email'}
              fullWidth
              name={'email'}
              InputProps={{
                endAdornment: <EmailOutlinedIcon/>
              }}
              onChange={handlerForm}
            />
          </Grid>
          <Grid item xs={6}>
            <Button
              fullWidth
              variant={'contained'}
              style={{ borderRadius: '50px', padding: '12px 0' }}
            >
              change method
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              fullWidth
              variant={'contained'}
              style={{ borderRadius: '50px', padding: '12px 0' }}
              onClick={registerUser}
            >
              Create Acount
            </Button>
          </Grid>

        </Grid>

      </Box>
    </Layout>
  );
};

export default LoginPage;
