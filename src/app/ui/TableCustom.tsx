import { ApiData, Column, TableProps } from "@/types";
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { useState } from "react";

const TableCustom = ({
  columns = [],
  rows = [],
  actions = [],
  pageCount = 10,
}: TableProps) => {
  const [page, setPage] = useState(0);
  const [rowPerPage, setRowPerPage] = useState(pageCount);
  const handleChangePage = (e: unknown, newPage: number) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRowPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };
  const paginatedRows = rows.slice(
    page * rowPerPage,
    page * rowPerPage + rowPerPage
  );
  return (
    <>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 510 }}>
          <Table size="small">
            <TableHead>
              <TableRow>
                {columns.map((column: Column, index: number) => (
                  <TableCell key={index}>{column.headerName}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedRows.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={columns.length} align="center">
                    No data available
                  </TableCell>
                </TableRow>
              ) : (
                rows.length > 0 &&
                (rows as ApiData[]).map((row, rowIndex) => (
                  <TableRow key={rowIndex}>
                    {columns.map((column: Column, index: number) => (
                      <TableCell key={index}>{row[column.field]}</TableCell>
                    ))}
                    {actions.map((action, index) => (
                      <TableCell key={index}>
                        <IconButton
                          size="small"
                          onClick={() => action.onClick(row)}
                        >
                          {action.icon}
                        </IconButton>
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          count={rows.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
        />
      </Paper>
    </>
  );
};

export default TableCustom;
