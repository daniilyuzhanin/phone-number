import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  button: {
    background: 'linear-gradient(104.34deg, #41522E -15.34%, #BE8022 145.95%)',
  },
}); 

export const PhoneFormButton = () => {
  const classes = useStyles();

  const { button } = classes;  

  return (
    <Button
      className={button}
        style={{
          textTransform: 'none', 
          fontSize: '1rem',
          fontStyle: 'normal',
          fontWeight: 500,
          lineHeight: '1.5rem',
          letterSpacing: '0em',
        }}
        color="primary"
        variant="contained"
        fullWidth
        type="submit"
        id="signinSubmit"
        size="large"
    >
      Сохранить
    </Button>
  )
}