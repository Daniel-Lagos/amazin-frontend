import { Box, Typography } from '@mui/material';

export const Navbar = () => {
  return (
    <Box >
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
          <Typography>
            Home
          </Typography>
          <Typography>
            Join
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
