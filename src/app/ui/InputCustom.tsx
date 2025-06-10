import { InputCustomProps } from "@/types";
import { TextField } from "@mui/material";

const InputCustom = ({
  label,
  name,
  value,
  onChange,
  size,
  variant,
  fullWidth,
  ...props
}: InputCustomProps) => {
  return (
    <div>
      <TextField
        label={label}
        name={name}
        value={value}
        onChange={onChange}
        size={size}
        variant={variant}
        fullWidth={fullWidth}
        {...props}
      />
    </div>
  );
};

export default InputCustom;
