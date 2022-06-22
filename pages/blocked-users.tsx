import { NextPage } from 'next';
import { Layout } from '../components/layouts';
import { Box } from '@mui/material';


const BlockedUsersPage: NextPage = () => {

  return (
    <Layout title={'blocked-users'}>
      <Box display={'flex'} flexDirection={'column'} height={'100%'}
           justifyContent={'center'}>
        <table className="table-auto">
          <thead>
            <tr>
              <th>Song</th>
              <th>Artist</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
              <td>Malcolm Lockyer</td>
              <td>1961</td>
            </tr>
            <tr>
              <td>Witchy Woman</td>
              <td>The Eagles</td>
              <td>1972</td>
            </tr>
            <tr>
              <td>Shining Star</td>
              <td>Earth, Wind, and Fire</td>
              <td>1975</td>
            </tr>
          </tbody>
        </table>
      </Box>
    </Layout>
  );
};

export default BlockedUsersPage;
