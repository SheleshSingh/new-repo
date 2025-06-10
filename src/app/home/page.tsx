"use client";
import { Button, Container, Grid, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import DialogCustom from "../ui/DialogCustom";
import CreateUserForm from "../components/form/CreateUserForm";
import TableCustom from "../ui/TableCustom";
import { ApiData } from "@/types";
import { column } from "@/mock";
import { Delete, Edit } from "@mui/icons-material";
import InfoIcon from "@mui/icons-material/Info";

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
  const actions = [
    {
      icon: <Edit />,
      onClick: (row: ApiData) => console.log("hello edit", row.id),
    },
    {
      icon: <Delete />,
      onClick: (row: ApiData) => console.log(row.id, "hello delete"),
    },
    {
      icon: <InfoIcon />,
      onClick: (row: ApiData) => console.log(row.id, "hello info"),
    },
  ];
  if (loading) return <div>Loading...</div>;
  return (
    <Container maxWidth="lg" sx={{ marginTop: 5 }}>
      <Grid container spacing={2} padding={5} component={Paper} elevation={3}>
        <Button variant="contained" onClick={() => setOpen(true)}>
          User create
        </Button>
        <TableCustom columns={column} rows={api} actions={actions} />
      </Grid>

      {open && (
        <DialogCustom
          title="Create User"
          open={open}
          onClose={handleClose}
          width="sm"
          formId="create-user-form"
        >
          <CreateUserForm formId="create-user-form" />
        </DialogCustom>
      )}
      <TableCustom
        columns={column}
        rows={api}
        actions={actions}
        pageCount={10}
      />
    </Container>
  );
};
export default Home;
