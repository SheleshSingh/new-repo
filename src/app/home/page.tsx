"use client";
import { Delete, Edit } from "@mui/icons-material";
import {
  Button,
  Container,
  Grid,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { pink } from "@mui/material/colors";
import { useEffect, useState } from "react";
import DialogCustom from "../ui/DialogCustom";
import CreateUserForm from "../components/form/CreateUserForm";

interface ApiData {
  id: string;
  email: string;
  password: string;
}
const Home = () => {
  const [api, setApi] = useState<ApiData[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://67cfd4fb823da0212a837a02.mockapi.io/apiData/createData"
        );
        const data = await res.json();
        setApi(data);
      } catch (error: unknown) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <Container maxWidth="lg" sx={{ marginTop: 5 }}>
      <Grid container spacing={2} padding={5} component={Paper} elevation={3}>
        <Button variant="contained" onClick={() => setOpen(true)}>
          User create
        </Button>
        <TableContainer>
          <Table>
            <TableHead sx={{ backgroundColor: pink[500] }}>
              <TableRow>
                <TableCell align="center">Id</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Password</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {api.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} align="center">
                    {loading ? "Loading..." : "No data available"}
                  </TableCell>
                </TableRow>
              ) : (
                api.slice(0, 10).map((item) => (
                  <TableRow key={item.id}>
                    <TableCell align="center">{item.id}</TableCell>
                    <TableCell align="center">{item.email}</TableCell>
                    <TableCell align="center">{item.password}</TableCell>
                    <TableCell align="center">
                      <IconButton color="primary" aria-label="edit">
                        <Edit />
                      </IconButton>
                      <IconButton color="secondary" aria-label="delete">
                        <Delete />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      {open && (
        <DialogCustom
          title="Create User"
          open={open}
          onClose={handleClose}
          width="sm"
          handleSubmit={handleSubmit}
        >
          <CreateUserForm formId="create-user-form" />
        </DialogCustom>
      )}
    </Container>
  );
};

export default Home;
