import { DialogCustomProps } from "@/types";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

const DialogCustom = ({
  children,
  onClose,
  open,
  title,
  width = "sm",
  showSubmitButton = true,
  showCancelButton = true,
  formId,
}: DialogCustomProps) => {
  return (
    <Dialog maxWidth={width} fullWidth open={open} onClose={onClose}>
      <DialogTitle textAlign="center" fontSize={30} fontWeight={600}>
        {title || "Default Title"}
      </DialogTitle>
      <DialogContent>
        {children}
        <DialogActions>
          {showCancelButton && <Button onClick={onClose}>Cancel</Button>}
          {showSubmitButton && (
            <Button type="submit" form={formId}>
              Save
            </Button>
          )}
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default DialogCustom;
