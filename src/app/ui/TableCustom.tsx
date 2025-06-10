import { Column, TableProps } from "@/types";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";




const TableCustom = ({
  columns = [],
  rows = [],
  actions = [],
  loading,
}: TableProps) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          {columns.map((column, index) => (
            <TableRow key={index}>
              <TableCell>{column.label}</TableCell>
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell colSpan={columns.length} align="center">
                Loading...
              </TableCell>
            </TableRow>
          ) : (
            rows.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {columns.map((column: Column, index: number) => (
                  <TableCell key={index}>{row[column.id]}</TableCell>
                ))}
              </TableRow>
            ))
          )}
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
