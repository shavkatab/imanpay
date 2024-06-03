import { makeStyles } from "@mui/styles";
import { rem } from "utils/pxToRem";

export const useStyles = makeStyles({
  root: {
    "& .MuiDialog-paper": {
      margin: 0,
      width: "100%",
      maxWidth: "100%",
      maxHeight: "100%",
      borderRadius: 0,
      height: "100vh",
    },
  },
});
