import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

interface DialogCustomProps {
  title?: string;
  children: React.ReactNode;
  onClose: () => void;
  open: boolean;
  width?: "xs" | "sm" | "md" | "lg" | "xl";
  onSubmit?: () => void;
  showSubmitButton?: boolean;
  showCancelButton?: boolean;
  handleSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

const DialogCustom = ({
  children,
  onClose,
  open,
  title,
  width = "sm",
  handleSubmit,
  showSubmitButton = true,
  showCancelButton = true,
}: DialogCustomProps) => {
  return (
    <Dialog maxWidth={width} fullWidth open={open} onClose={onClose}>
      <DialogTitle textAlign="center" fontSize={30} fontWeight={600}>
        {title || "Default Title"}
      </DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          {children}
          <DialogActions>
            {showCancelButton && <Button onClick={onClose}>Cancel</Button>}
            {showSubmitButton && (
              <Button type="submit">
                Save
              </Button>
            )}
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DialogCustom;
