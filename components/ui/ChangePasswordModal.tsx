import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from 'react';
import {
  Button,
  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
  TextField
} from '@mui/material';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { useRouter } from 'next/router';
import { passwordRegExp as isValidPassword } from '../../utils';

interface Props {
  open: boolean,
  email: string,
  setOpen: Dispatch<SetStateAction<boolean>>
}

interface formProps {
  password: string,
  confirmPassword: string,
}

export const ChangePasswordModal: FC<Props> = ({ open, setOpen, email }) => {

  const [touched, setTouched] = useState(false);
  const [form, setForm] = useState<formProps>({
    confirmPassword: '',
    password: ''
  });
  const router = useRouter();

  const handleClose = () => {
    setOpen(false);
    setTouched(false);
  };

  const changePassword = async () => {
    const resp = await fetch(
      `${process.env.BACKEND_URL}auth/change-pass/${email}`, {
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ newPassword: form.password }),
        method: 'PATCH'
      });
    const data = await resp.json().catch(e=>console.log(e));
    if (data.success) {
      sessionStorage.setItem('token', data.token);
      router.push('/');
    }
  };

  const handlerPassword = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    event.preventDefault();
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Change Password</DialogTitle>
      <DialogContent>
        <DialogContentText>
          change you password
        </DialogContentText>
        <TextField
          margin={'normal'}
          type={'password'}
          placeholder={'Password'}
          fullWidth
          helperText={!isValidPassword.test(form.password) && touched &&
          'Password is not secure'}
          error={!isValidPassword.test(form.password) && touched}
          name={'password'}
          InputProps={{
            endAdornment: <VisibilityOutlinedIcon/>
          }}
          onBlur={() => setTouched(true)}
          onChange={handlerPassword}
        />
        <TextField
          margin={'normal'}
          type={'password'}
          placeholder={'Password'}
          fullWidth
          helperText={form.password !== form.confirmPassword && touched &&
          'Passwords do not match'}
          error={form.password !== form.confirmPassword && touched}
          name={'confirmPassword'}
          InputProps={{
            endAdornment: <VisibilityOutlinedIcon/>
          }}
          onBlur={() => setTouched(true)}
          onChange={handlerPassword}
        />

      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>
          Cancel
        </Button>
        <Button
          disabled={(form.password !== form.confirmPassword ||
            !isValidPassword.test(form.password))}
          onClick={changePassword}>
          change Password
        </Button>
      </DialogActions>
    </Dialog>
  );
};
