// https://mui.com/material-ui/customization/theming/

import { createTheme } from "@mui/material";
import { rem } from "utils/pxToRem";

const fontfamily =
  "'Gilroy', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif";

export default createTheme({
  typography: {
    fontFamily: [fontfamily].join(","),
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: "20px",
          paddingRight: "20px",
          "@media (min-width: 600px)": {
            paddingLeft: "15px",
            paddingRight: "15px",
          },
        },
        maxWidthLg: {
          "@media (min-width: 1280px)": {
            maxWidth: "1200px",
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          padding: `${rem(12)} ${rem(40)}`,
          fontWeight: 600,
          fontSize: rem(17),
          lineHeight: rem(24),
          borderRadius: rem(14),
          transition: "all 0.25s ease-in-out",
          textTransform: "none",
          "&:hover": {
            transform: "translateY(-1px)",
          },
        },
        textPrimary: {
          background: "var(--primary-color)",
          color: "#fff",
          "&:hover": {
            background: "var(--primary-color)",
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          margin: 0,
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          width: "100%",
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          padding: 0,
          color: "var(--primary-color)!important",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          border: "none!important",
        },
        input: {
          padding: rem(12),
          background: "#f6f6f6",
          borderRadius: rem(10),
          border: "1px solid transparent",
          "&:focus": {
            outline: "none",
            borderColor: "var(--primary-color)!important",
          },
          "&:hover": {
            borderColor: "var(--primary-color)!important",
          },
          fontSize: rem(15),
          lineHeight: rem(24),
          height: rem(48),
          color: "#252c32",
          transition: "all 0.25s ease-in-out",
          boxSizing: "border-box",
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: 0,
          color: "var(--primary-color)!important",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: rem(30),
          // boxShadow: '0px 1px 12px rgba(0, 0, 0, 0.08)'
        },
      },
    },
  },
});
