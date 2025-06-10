"use client";
import { Button, Container, Grid, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import DialogCustom from "../ui/DialogCustom";
import CreateUserForm from "../components/form/CreateUserForm";
import TableCustom from "../ui/TableCustom";
import { ApiData, FormData } from "@/types";
import { column } from "@/mock";

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
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev: FormData) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };
  
  return (
    <Container maxWidth="lg" sx={{ marginTop: 5 }}>
      <Grid container spacing={2} padding={5} component={Paper} elevation={3}>
        <Button variant="contained" onClick={() => setOpen(true)}>
          User create
        </Button>
        <TableCustom
          columns={column}
          rows={api}
          actions={["edit", "delete"]}
          loading={loading}
        />
      </Grid>
      {open && (
        <DialogCustom
          title="Create User"
          open={open}
          onClose={handleClose}
          width="sm"
          handleSubmit={handleSubmit}
        >
          <CreateUserForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            formData={formData}
          />
        </DialogCustom>
      )}
    </Container>
  );
};

export default Home;
