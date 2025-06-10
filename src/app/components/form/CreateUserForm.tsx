import InputCustom from "@/app/ui/InputCustom";
import { FormData } from "@/types";
import { Container, Grid } from "@mui/material";
interface FormProps{
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  formData: FormData
}
const CreateUserForm = ({handleChange,handleSubmit ,formData}:FormProps ) => {
  // const [formData, setFormData] = useState<FormData>({
  //   name: "",
  //   email: "",
  //   password: "",
  // });
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setFormData((prev: FormData) => ({
  //     ...prev,
  //     [e.target.name]: e.target.value,
  //   }));
  // };
  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log(formData);
  // };
  return (
    <Container sx={{ marginTop: 5 }}>
      <form onSubmit={handleSubmit}>
        <Grid container alignItems="center" direction="column" spacing={2}>
          <Grid size={{ xs: 12, md: 12 }}>
            <InputCustom
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              size="small"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid size={{ xs: 12, md: 12 }}>
            <InputCustom
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              size="small"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid size={{ xs: 12, md: 12 }}>
            <InputCustom
              label="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              size="small"
              fullWidth
              variant="outlined"
            />
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default CreateUserForm;
