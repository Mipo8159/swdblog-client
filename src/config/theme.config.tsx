import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";

export enum ThemePalette {
  BG = "#12181b",
  LIME = "#C8FA5F",
  FONT_BLOGAL = "'JetBrains Mono', monospace",

  ERROR_MAIN = "#f44336",
  BG_ERROR_MAIN = "rgba(244,67,54,0.1)",
}

type ThemeProp = {
  children: JSX.Element;
};

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: ThemePalette.BG,
    },
    primary: {
      main: ThemePalette.LIME,
    },
  },
  typography: {
    fontFamily: ThemePalette.FONT_BLOGAL,
  },
  components: {
    MuiButton: {
      defaultProps: {
        style: {
          textTransform: "none",
          borderRadius: "0.5em",
          boxShadow: "none",
          width: "100%",
        },
      },
    },
    MuiAlert: {
      defaultProps: {
        style: {
          borderRadius: "0.8em",
          fontSize: "1em",
        },
      },
      styleOverrides: {
        standardError: {
          border: `1px solid ${ThemePalette.ERROR_MAIN}`,
          background: ThemePalette.BG_ERROR_MAIN,
        },
      },
    },
  },
});

export const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline /> {children}
    </ThemeProvider>
  );
};
