import { ChangeEvent, useState } from 'react';
import Link from 'next/link';
import {
  Alert, AlertColor, Button, Grid, Snackbar, TextField
} from '@mui/material';
import { useRouter } from 'next/router';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { ChangePasswordModal } from './ChangePasswordModal';
import { emailRegExp as isValidEmail } from '../../utils';

interface formProps {
  password: string,
  email: string,
}

export const SignInForm = () => {
  const [form, setForm] = useState<formProps>({
    email: '',
    password: ''
  });
  const [snackBarStatus, setSnackBarStatus] = useState<AlertColor>('success');
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [touched, setTouched] = useState(false);
  const [showModal, setShowModal] = useState(false);
  let isValidForm = true;
  const router = useRouter();

  const handlerForm = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    event.preventDefault();
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  const loginUser = async () => {

    const resp = await fetch(`${process.env.BACKEND_URL}auth/sign-in`, {
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form),
      method: 'POST'
    });
    const data = await resp.json();
    if (data.success) {
      if (data?.user?.firstLogin) {
        setShowModal(true);
      } else {
        setSnackBarStatus('success');
        router.push('/');
      }
    } else {
      setSnackBarStatus('error');
      setMessage(data.message);
    }
    localStorage.setItem('token', data.token);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const validForm = (): boolean => {
    Object.keys(form).forEach(value => {
      // @ts-ignore
      if (form[value].length === 0) {
        isValidForm = false;
      }
    });
    return !isValidForm;
  };

  return (
    <Grid container width={'50%'} spacing={4} pt={4}>
      <Grid item xs={12}>
        <TextField
          autoComplete={'off'}
          type={'text'}
          placeholder={'Email'}
          fullWidth
          helperText={touched && !isValidEmail.test(form.email) &&
          'Email is Invalid'}
          error={touched && !isValidEmail.test(form.email)}
          name={'email'}
          InputProps={{
            endAdornment: <EmailOutlinedIcon/>
          }}
          onBlur={() => setTouched(true)}
          onChange={handlerForm}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          type={'password'}
          // type={'text'}
          placeholder={'Password'}
          fullWidth
          helperText={form.password.length <= 0 && touched &&
          'Password is required'}
          error={form.password.length <= 0 && touched}
          name={'password'}
          InputProps={{
            endAdornment: <VisibilityOutlinedIcon/>
          }}
          onBlur={() => setTouched(true)}
          onChange={handlerForm}
        />
      </Grid>
      <Grid item xs={6}>
        <Link href={'/sign-up'} passHref>
          <Button
            fullWidth
            variant={'contained'}
            style={{ borderRadius: '50px', padding: '12px 0' }}
          >
            Sign up
          </Button>
        </Link>
      </Grid>
      <Grid item xs={6}>
        <Button
          fullWidth
          variant={'contained'}
          style={{ borderRadius: '50px', padding: '12px 0' }}
          onClick={loginUser}
          disabled={validForm()}
        >
          Log in
        </Button>
      </Grid>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={open}
        onClose={handleClose}
        message="I love snacks"
        key={'top-center'}
      >
        <Alert onClose={handleClose} severity={snackBarStatus}
               sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
      <ChangePasswordModal open={showModal} setOpen={setShowModal}
                           email={form.email}/>
    </Grid>
  );
};
