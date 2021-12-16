import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { useSelector } from 'react-redux';

import { listSelector } from 'store/list/selectors';


import { Wrapper } from '../Wrapper/Wrapper';

export const PhoneTable = () => {
  const phoneValues = Object.values(useSelector(listSelector));

  return (
    <Wrapper>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Номер Телефона</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {phoneValues.map((element, index) => {
            return (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {element}
              </TableCell>
            </TableRow>
            )
          })}
        </TableBody>
      </Table>
      </Wrapper>
  );
}