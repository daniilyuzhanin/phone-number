import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { Wrapper } from '../Wrapper/Wrapper';

function createData(name: string, calories: number) {
  return { name, calories };
}

const rows = [
  createData('Frozen yoghurt', 157777779),
  createData('Ice cream sandwich', 237777777),
  createData('Eclair', 267777772),
  createData('Cupcake', 305777777),
  createData('Gingerbread', 3567777777),
];

export const PhoneTable = () => {
  return (
    <Wrapper>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Country</TableCell>
            <TableCell align="right">Phone number</TableCell>
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