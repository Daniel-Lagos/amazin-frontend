import { Layout } from '../layouts';
import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link'

export default function AccessDenied() {
  return (
    <Layout title={'Access-Resticted'} withBackground={false} withMenu={false}>
      <Box width={'100%'}
           height={'100%'}
           justifyContent={'center'}
           alignItems={'center'}
           display={'flex'}
           flexDirection={'column'}>
        <Box>
          <Typography>
            you don&apos;t have access
          </Typography>
          <br/>
          <Link href={'/log-in'} passHref>
            <Button
              variant={'contained'}
              style={{
                borderRadius: '50px', padding: '12px 0', width: '10rem'
              }}
            >
              Log in
            </Button>
          </Link>
        </Box>
      </Box>
    </Layout>
  );
}
