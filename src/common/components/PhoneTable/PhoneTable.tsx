import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { getDatabase, ref } from "firebase/database";
import { useList } from 'react-firebase-hooks/database';

import { Wrapper } from '../Wrapper/Wrapper';

export const PhoneTable = () => {

  const db = getDatabase();

  const [snapshots] = useList(ref(db, 'phoneNumbers'));

  return (
    <Wrapper>
      
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Номер Телефона</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {snapshots && (
              <div>
              {snapshots.map((el) => {
                return (
                  <TableRow
                    key={el.key}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell key={(el.val()).phone} component="th" scope="row">
                      {`${(el.val()).selector} ${(el.val()).phone}`}
                    </TableCell>
                  </TableRow>
                )
              })}
            </div> 
            )}
        </TableBody>
      </Table>

      
      </Wrapper>
      
  );
}