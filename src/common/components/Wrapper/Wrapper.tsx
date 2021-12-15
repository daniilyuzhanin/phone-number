import {
  Box,
  Paper,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { PropsWithChildren } from 'react';


const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '1rem 1rem',
  },
  wrapper: {
    padding: '2rem',
    minHeight: '20rem',
    width: '25.5rem',
    margin: '0 auto',
  },
});

export const Wrapper = ({ children }: PropsWithChildren<{}>) => {
  const classes = useStyles();

  const { container, wrapper } = classes;

  return (
    <Box 
      className={container}
      sx={{
        '& .MuiTextField-root': { mb: 3, width: '1' },
        }}
    >
      <Paper 
      elevation={10}
      className={wrapper}
      sx={{ borderRadius: '1rem' }}
      >
        {children}
      </Paper>
    </Box>
  );
};
