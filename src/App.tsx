import './App.scss';
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { PhoneForm } from 'common/components/PhoneForm';
import { PhoneTable } from 'common/components/PhoneTable';
import { setPhoneList } from 'store/list/list-slice';

type PhoneListType = Array<string>;

export const App = () => {

  const dispatch = useDispatch();


  const db = getDatabase();
  const dbRef = ref(db, 'phoneNumber');
  const phoneList : PhoneListType = [];

  useEffect(() => {
    onValue(dbRef, (snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const dataValue = Object.values(childSnapshot.val()).reverse().join('');
        phoneList.push(dataValue)
      });
      dispatch(setPhoneList(phoneList))
    }, {
      onlyOnce: true
    });
  })


  return (
    <div className="wrapper">
      <PhoneForm />
      <PhoneTable />
    </div>
  );
}