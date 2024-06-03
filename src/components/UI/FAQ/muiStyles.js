import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    width: "100%",
    backgroundColor: "f5f5f5",

    "& .MuiAccordion-root.Mui-expanded ": {
      marginBottom: "0",
    },
    "& .MuiAccordionSummary-content": {
      margin: "30px 0 30px !important",
    },
    "& .MuiAccordionDetails-root": {
      padding: "0 20px 20px !important",
    },
    "& .MuiAccordion-rounded": {
      borderRadius: 0,
      backgroundColor: "transparent",
      boxShadow: "none",
    },
    "@media (max-width: 768px)": {
      "& .MuiAccordionSummary-content": {
        margin: "20px 0 20px !important",
      },
      "& .MuiAccordionSummary-root": {
        padding: 0,
        columnGap: "12px",
      },
      "& .MuiAccordionDetails-root": {
        padding: "0 0 20px !important",
      },
    },
  },
});
