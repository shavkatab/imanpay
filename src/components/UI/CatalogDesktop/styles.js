import { makeStyles } from "@mui/styles";
import { rem } from "utils/pxToRem";

export const useStyles = makeStyles({
  root: {
    "& .MuiDialog-paper": {
      margin: rem(16),
      width: "100%",
      maxWidth: rem(1200),
    },
  },
});

export const useStylesPagination = makeStyles({
  root: {
    "& .MuiPaginationItem-root": {
      color: "var(--secondary-color)",
      fontWeight: 500,
      fontSize: rem(18),
      lineHeight: rem(24),
    },
  },
});
