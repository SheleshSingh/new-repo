import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

interface TableProps {
  columns: string[];
  rows: string[][];
  actions: string[];
}
const TableCustom = ({ columns = [], rows = [], actions = [] }: TableProps) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          {columns.map((column, index) => (
            <TableRow key={index}>
              <TableCell>{column}</TableCell>
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {rows.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {row.map((cell, index) => (
                <TableCell key={index}>{cell}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
        {actions.map((action, index) => (
          <TableRow key={index}>
            <TableCell>{action}</TableCell>
          </TableRow>
        ))}
      </Table>
    </TableContainer>
  );
};

export default TableCustom;
