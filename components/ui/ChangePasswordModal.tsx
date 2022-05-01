import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from 'react';
import {
  Button,
  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider,
  TextField
} from '@mui/material';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import { useRouter } from 'next/router';

interface Props {
  open: boolean,
  setOpen: Dispatch<SetStateAction<boolean>>
}

interface formProps {
  password: string,
  confirmPassword: string,
}

export const ChangePasswordModal: FC<Props> = ({ open, setOpen }) => {

  const [touched, setTouched] = useState(false);
  const [form, setForm] = useState<formProps>({
    confirmPassword: '',
    password: ''
  });
  const router = useRouter();

  const handleClose = () => {
    setOpen(false);
    setTouched(false)
  };

  const changePassword = async () => {
    const resp = await fetch(`${process.env.BACKEND_URL}sign-in`, {
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form),
      method: 'POST'
    });
    const data = await resp.json();
    if (data.success) {
      localStorage.setItem('token', data.token);
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
          helperText={form.password.length <= 0 && touched &&
          'Password is required'}
          error={form.password.length <= 0 && touched}
          name={'password'}
          InputProps={{
            endAdornment: <BadgeOutlinedIcon/>
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
            endAdornment: <BadgeOutlinedIcon/>
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
            form.password.length === 0)}
          onClick={changePassword}>
          change Password
        </Button>
      </DialogActions>
    </Dialog>
  );
};
