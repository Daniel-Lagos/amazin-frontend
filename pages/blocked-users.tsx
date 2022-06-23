import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Alert, Box, AlertColor, Snackbar } from '@mui/material';

import { Layout } from '../components/layouts';

interface user {
  _id: string,
  name: string,
  lastName: string,
  firstLogin: boolean,
  role: string,
  email: string,
  attempts: number,
  status: boolean
}

interface AppState {
  user: Array<user>
}

const BlockedUsersPage: NextPage = () => {

  const [snackBarStatus, setSnackBarStatus] = useState<AlertColor>('success');
  const [users, setUsers] = useState<AppState['user']>([]);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const router = useRouter();

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = async () => {
    await fetch(`${process.env.BACKEND_URL}admin/users-blocked`)
      .then(res => res.json())
      .then(data => {
        const { users } = data;
        setUsers(users)
      })
  }

  const handleClose = () => {
    setOpen(false);
    window.location.reload
  };



  return (
    <Layout title={'blocked-users'}>
      <Box display={'flex'} flexDirection={'column'} height={'100%'}
        justifyContent={'center'}>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Nombre y Apellido
                </th>
                <th scope="col" className="px-6 py-3">
                  Correo
                </th>
                <th scope="col" className="px-6 py-3">
                  Accion
                </th>
              </tr>
            </thead>
            <tbody>
              {users?.map(user => (
                <tr key={user._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    {user.name} {user.lastName}
                  </th>
                  <td className="px-6 py-4">
                    {user.email}
                  </td>
                  <td className="px-6 py-4">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={async () => {
                        await fetch(`${process.env.BACKEND_URL}admin/unlock-user`, {
                          method: 'POST',
                          headers: {
                            'Content-Type': 'application/json'
                          },
                          body: JSON.stringify({
                            email: user.email
                          })
                        }).
                          then(res => res.json()
                            .then(data => {
                              const { success, message } = data;
                              setMessage(message);
                              if (!success) setSnackBarStatus('error')
                              setOpen(true);
                              router.push('/blocked-users');
                            }))
                      }}
                    >
                      Desbloquear
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
      </Box>
    </Layout>
  );
};

export default BlockedUsersPage;
