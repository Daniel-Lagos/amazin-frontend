import { Box, Typography } from '@mui/material';
import { signOut } from 'next-auth/react';

export const Navbar = () => {
  return (
    <Box>
      <Box
        maxWidth={'1440px'}
        padding={'10px 24px'}
        display={'flex'}
        alignItems={'center'}
        alignSelf={'flex-start'}
        height={'100px'}
        margin={'0 auto'}>
        <Box
          justifyContent={'space-between'}
          display={'flex'}
          width={'40%'}>
          <Typography>
            Amazin
          </Typography>
          <Typography onClick={() => signOut()} style={{ cursor: 'pointer' }}>
            Log out
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
