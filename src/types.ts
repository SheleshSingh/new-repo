export interface ApiData {
  id: string;
  email: string;
  password: string;
  [key: string]: string | number;
}

export interface TableProps {
  columns: Column[];
  rows: { [key: string]: string | number }[];
  actions?: { icon: React.ReactNode; onClick: (row: ApiData) => void }[];
  pageCount?: number;
}
export interface Column {
  field: string;
  headerName: string;
}

export interface InputCustomProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  size?: "small" | "medium";
  variant?: "outlined" | "filled" | "standard";
  fullWidth?: boolean;
}
export interface DialogCustomProps {
  title?: string;
  children: React.ReactNode;
  onClose: () => void;
  open: boolean;
  width?: "xs" | "sm" | "md" | "lg" | "xl";
  onSubmit?: () => void;
  showSubmitButton?: boolean;
  showCancelButton?: boolean;
  handleSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  formId?: string;
}
export interface FormData {
  name: string;
  email: string;
  password: string;
}
