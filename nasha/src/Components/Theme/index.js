import { createTheme } from "@material-ui/core/styles";

const Theme = createTheme({
  overrides: {
    MuiTypography: {
      root: {
        fontFamily: "shabnam !important",
      },
    },
    MuiTab: {
      root: {
        fontFamily: "shabnam !important",
      },
    },
    MuiButton: {
      label: {
        fontFamily: "shabnam !important",
      },
    },
    MuiMenuItem: {
      root: {
        fontFamily: "shabnam !important",
      },
    },
  },
});

export default Theme;
