import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from 'react';
import {
  Alert,
  Button,
  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
  TextField
} from '@mui/material';

interface Props {
  open: boolean,
  setOpen: Dispatch<SetStateAction<boolean>>
}


export const ForgotPassword: FC<Props> = ({ open, setOpen }) => {

  const [touched, setTouched] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleClose = () => {
    setOpen(false);
    setTouched(false);
    setShowMessage(false);
  };

  const restorePassword = async () => {
    const resp = await fetch(
      `${process.env.BACKEND_URL}user/forgot-password`, {
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email }),
        method: 'POST'
      });
    const data = await resp.json();
    setMessage(data.message);
    setShowMessage(true);
  };

  const handlerEmail = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  return (<>
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle>Forgot the password</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Set your Email
        </DialogContentText>
        <TextField
          margin={'normal'}
          type={'text'}
          placeholder={'Email'}
          fullWidth
          name={'confirmEmail'}
          onBlur={() => setTouched(true)}
          onChange={handlerEmail}
        />

      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>
          Cancel
        </Button>
        <Button
          onClick={restorePassword}>
          send Email
        </Button>
      </DialogActions>
      {
        showMessage && (
          <Alert onClose={handleClose} severity={'warning'}
                 style={{ zIndex: 99 }} sx={{ width: '100%' }}>
            {message}
          </Alert>
        )
      }
    </Dialog>
  </>);
};
