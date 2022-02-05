import GitHubIcon from '@mui/icons-material/GitHub';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { Outlet } from 'react-router-dom';

export default function Layout(props) {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar color='transparent' elevation={0} position='static'>
          <Toolbar>
            <Typography
              variant='h5'
              color='primary'
              component='div'
              sx={{ flexGrow: 1, mr: '10%' }}
            >
              CRAZYCRYPTO.COM
            </Typography>
            <Tooltip title='GitHub'>
              <IconButton
                size='large'
                edge='start'
                color='primary'
                aria-label='github'
                sx={{ mr: 0 }}
                target='_blank'
                href='https://github.com/hugoguzman/fema-buyouts-orgtypes.git'
              >
                <GitHubIcon />
              </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>
      </Box>
      <Outlet />
    </>
  );
}
