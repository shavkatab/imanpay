import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { makeStyles, withStyles } from "@mui/styles";

export const useStyles = makeStyles({
  root: {
    "& .MuiPaper-root": {
      borderRadius: 0,
    },
  },
  list: {
    width: "50vw",
    "@media (max-width: 600px)": {
      width: "100vw",
    },
  },
  fullList: {
    width: "auto",
  },
});

export const Accordion = withStyles({
  root: {
    background: "#fff",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

export const AccordionSummary = withStyles({
  root: {
    backgroundColor: "#fff",
    padding: "0",
    minHeight: 0,
  },
  content: {
    margin: "0!important",
    display: "flex",
    justifyContent: "space-between",
  },
})(MuiAccordionSummary);

export const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: "20px 0",
    fontSize: "20px",
    lineHeight: "24px",
  },
}))(MuiAccordionDetails);
