import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { collection } from "firebase/firestore"; 
import { useCollection } from 'react-firebase-hooks/firestore';

import { phoneNumberDB } from '../../../base';
import { Wrapper } from '../Wrapper/Wrapper';

export const PhoneTable = () => {
  const [value] = useCollection(
    collection(phoneNumberDB, 'phoneNumbers'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  return (
    <Wrapper>
      
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Номер Телефона</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {value && (
            <div>
              {value.docs.map((phoneDoc, index) => {
                return (
                  <TableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell key={(phoneDoc.data()).phone} component="th" scope="row">
                      {`${(phoneDoc.data()).selector} ${(phoneDoc.data()).phone}`}
                    </TableCell>
                  </TableRow>
                )
              })}
            </div> 
            )
          }
        </TableBody>
      </Table>

      
      </Wrapper>
      
  );
}