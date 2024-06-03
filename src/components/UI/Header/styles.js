import { makeStyles } from "@mui/styles";
import { rem } from "utils/pxToRem";

export const useStyles = makeStyles(() => ({
  paper: {
    boxShadow: "0px 1px 12px rgba(0, 0, 0, 0.08)",
    width: rem(200),
    top: `${rem(70)}!important`,
  },
}));
