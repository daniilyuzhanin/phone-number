import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
// import { getDatabase, ref, onValue, query, get, child } from "firebase/database";
// import { useDispatch } from 'react-redux';

import { Wrapper } from '../Wrapper/Wrapper';
// import { setCategories } from '../../../store/list/list-slice';

function createData(name: string, calories: number) {
  return { name, calories };
}




export const PhoneTable = () => {

  // const dispatch = useDispatch();

  // const db = getDatabase();
  // const dbRef = ref(db, 'phoneNumber');


  // onValue(dbRef, (snapshot) => {
  //   snapshot.forEach((childSnapshot) => {
  //     const childData = childSnapshot.val();
  //     dispatch(setCategories(childData))
  //   });
  // }, {
  //   onlyOnce: true
  // });
  


  const rows = [
    createData('Frozen yoghurt', 157777779),
    createData('Ice cream sandwich', 237777777),
    createData('Eclair', 267777772),
    createData('Cupcake', 305777777),
    createData('Gingerbread', 3567777777),
  ];

  


  return (
    <Wrapper>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Селектор</TableCell>
            <TableCell align="right">Номер телефона</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
            </TableRow>
          ))}

        </TableBody>
      </Table>
      </Wrapper>
  );
}