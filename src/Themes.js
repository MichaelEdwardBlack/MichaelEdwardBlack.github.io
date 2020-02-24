import { createMuiTheme } from '@material-ui/core/styles';

const common = {
  palette: {
    primary: {
      light: "rgb(173, 136, 247)",
      main: "#996bf5",
      dark: "rgb(107, 74, 171)"
    },
    secondary: {
      light: "#91ff35",
      main: "#76ff03",
      dark: "#52b202",
      contrastText: '#ffcc00',
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff"
    },
    warning: {
      light: "#ffb74d",
      main: "#ff9800",
      dark: "#f57c00",
      contrastText: "rgba(0, 0, 0, 0.87)"
    },
    info: {
      light: "#64b5f6",
      main: "#2196f3",
      dark: "#1976d2",
      contrastText: "#fff"
    },
    success: {
      light: "#81c784",
      main: "#4caf50",
      dark: "#388e3c",
      contrastText: "rgba(0, 0, 0, 0.87)"
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  }
}

export const light = createMuiTheme({
  palette: {
    type: 'light',
    primary: common.palette.primary,
    secondary: common.palette.secondary,
    error: common.palette.error,
    warning: common.palette.warning,
    info: common.palette.info,
    success: common.palette.success,
    contrastThreshold: common.palette.contrastThreshold,
    tonalOffset: common.palette.tonalOffset,
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
    },
    divider: "rgba(0, 0, 0, 0.12)",
    background: {
      paper: "#fff",
      default: "#fafafa"
    },
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 0.04)",
      hoverOpacity: 0.04,
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
      focusOpacity: 0.12,
      activatedOpaciy: 0.12
    }
  }
});

export const dark = createMuiTheme({
  palette: {
    type: "dark",
    primary: common.palette.primary,
    secondary: common.palette.secondary,
    error: common.palette.error,
    warning: common.palette.warning,
    info: common.palette.info,
    success: common.palette.success,
    contrastThreshold: common.palette.contrastThreshold,
    tonalOffset: common.palette.tonalOffset,
    text: {
      primary: "#fff",
      secondary: "rgba(255, 255, 255, 0.7)",
      disabled: "rgba(255, 255, 255, 0.5)",
      hint: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)"
    },
    divider: "rgba(255, 255, 255, 0.12)",
    background: {
      paper: "#424242",
      default: "#303030"
    },
    action: {
      active: "#fff",
      hover: "rgba(255, 255, 255, 0.08)",
      hoverOpacity: 0.08,
      selected: "rgba(255, 255, 255, 0.16)",
      selectedOpacity: 0.16,
      disabled: "rgba(255, 255, 255, 0.3)",
      disabledBackground: "rgba(255, 255, 255, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(255, 255, 255, 0.12)",
      focusOpacity: 0.12,
      activatedOpaciy: 0.24
    }
  }
})
