import { TextField } from "@mui/material";
import React from "react";

interface InputCustomProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  size?: "small" | "medium";
  variant?: "outlined" | "filled" | "standard";
  fullWidth?: boolean;
}

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
