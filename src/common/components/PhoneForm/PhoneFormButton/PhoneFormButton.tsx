import { Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { getDatabase, ref, onValue } from "firebase/database";
import { useDispatch } from 'react-redux';

import { setPhoneList } from 'store/list/list-slice';

const useStyles = makeStyles({
  button: {
    background: 'linear-gradient(104.34deg, #41522E -15.34%, #BE8022 145.95%)',
  },
});

type PhoneListType = Array<string>;

export const PhoneFormButton = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const db = getDatabase();
  const dbRef = ref(db, 'phoneNumber');

  const { button } = classes;  

  const phoneList : PhoneListType = [];
  

  const handleClick = () => {
    onValue(dbRef, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const dataValue = Object.values(childSnapshot.val()).reverse().join('');
        phoneList.push(dataValue)
      });
      dispatch(setPhoneList(phoneList))
    }, {
      onlyOnce: true
    });
  }

  return (
    <Button
      className={button}
      onClick={handleClick}
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