/* https://mui.com/customization/theming/ */
import { createTheme, ThemeOptions } from '@mui/material/styles';
// import { Secondary } from 'components/v2/Button/index.stories';

const fontFamily = ['ProximaNova', 'Arial', 'sans-serif'].join(',');

export const FONTS = {
  primary: fontFamily,
  secondary: fontFamily,
};

// rgb(18 22 56)
// #1f3f58
// bottom  rgb(38 132 137)

// default:rgba(31, 32, 40, 1)
//  interactive.primary: 'rgba(58, 120, 255, 1)',
//  main: 'rgba(58, 120, 255, 1)',
// secondery.main: 'rgba(40, 41, 49, 1)',
// Secondary.light:'rgba(56, 57, 68, 1)'
/* #47143D  */

export const PALETTE = {
  mode: 'dark',
  background: {
    default: '#46173a',
    paper: '#69205a',
    black: '#1F2028',
  },
  primary: {
    light: '#EBBF6E',
    main: '#EBBF6E',
    dark: 'var(--color-blue-hover)',
  },
  secondary: {
    light: '#B99750',
    main: 'rgba(40, 41, 49, 1)',
    dark: 'rgba(31, 32, 40, 1)',
  },
  text: {
    primary: 'rgba(255, 255, 255, 1)',
    secondary: 'rgb(223 223 225)',
    disabled: 'rgba(161, 161, 161, 1)',
  },
  button: {
    main: 'rgb(92 34 92)',
    medium: '#a32d8c',
    dark: 'rgba(27, 67, 152, 1)',
  },
  interactive: {
    primary: 'rgb(38 132 137)',
    success: 'rgba(24, 223, 139, 1)',
    success50: 'rgba(24, 223, 139, 0.5)',
    error: 'rgba(233, 61, 68, 1)',
    error50: 'rgba(233, 61, 68, 0.5)',
    tan: 'rgba(255, 231, 206, 1)',
    delimiter: 'rgba(49, 50, 60, 1)',
    warning: 'rgba(220, 148, 68, 1)',
    hover: 'rgba(255, 255, 255, 0.08)',
  },
};

export const BREAKPOINTS = {
  values: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1280,
    xxl: 1440,
  },
};

export const SPACING = 4;

export type TypographyVariant =
  | 'button'
  | 'caption'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'inherit'
  | 'overline'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2'
  | 'small1'
  | 'small2'
  | undefined;

export const SHAPE = {
  borderRadius: {
    verySmall: SPACING,
    small: SPACING * 2,
    medium: SPACING * 4,
    large: SPACING * 6,
  } as any, // our custom types seem to clash with the default MUI types
  iconSize: {
    small: SPACING * 3,
    medium: SPACING * 4,
    large: SPACING * 5,
    xLarge: SPACING * 6,
    xxLarge: SPACING * 10,
  },
  footerHeight: '56px',
  bannerHeight: '56px',
  drawerWidthDesktop: '224px',
  drawerWidthTablet: '80px',
};

export default createTheme({
  spacing: SPACING,
  palette: PALETTE,
  breakpoints: BREAKPOINTS,
  shape: SHAPE,
  typography: {
    fontFamily: FONTS.primary,
    color: PALETTE.text.primary,
    lineHeight: 1.5,
    h1: {
      fontSize: '2.5rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 700,
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: '1.875rem',
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
    },
    body2: {
      fontSize: '1rem',
      fontWeight: 600,
      letterSpacing: '0.3px',
    },
    small1: {
      fontSize: '0.875rem',
      fontWeight: 600,
      color: PALETTE.text.secondary,
    },
    small2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      color: PALETTE.text.secondary,
    },
    tiny: {
      fontSize: '0.75rem',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: '#8d2b77',
          borderRadius: SHAPE.borderRadius.large,
          padding: SPACING * 6,
          boxShadow: 'none',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
        paper: {
          padding: 0,
          borderRadius: 0,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        hiddenLabel: {
          /* fix for andtd base styles override. TODO: can be deleted when global antd styles will be removed */
          '& legend': {
            display: 'none',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          top: 0,
          border: 'none',
        },
      },
    },
  },
} as ThemeOptions);
