import { ThemeProvider, createTheme } from '@mui/material/styles';



export const theme = createTheme({
    palette: {
      common:{
        black: "#404041",
        white: "#FFF"
      },
        primary: {
          dark: '#497e25',
          main: '#60a630',
          light: '#86ce55',
        },
        secondary: {
          dark: '#003E7F',
          main: '#3170b7',
          light: "#4c8acf"
        },
        info: {
          main: '#3170B7',
          dark: '#003E7F',
          light: "#4c8acf"
        },
        grey:{
          50: '#EEE',
          100: '#DDD',
          200: "#CCC",
          300: "#BBB",
          400: "#AAA",
          500: "#999",
          600: "#888",
          700: "#777",
          800: "#666",
          900: "#555"
        }
    },
    typography: {
      h1: {
        fontSize: "8rem",
        fontWeight: 900,
        color: "#FFF"
      },
      h2: {
        fontSize: 30,
        fontWeight: 900
      },
      h3: {
        fontSize: "2.5rem",
        fontWeight: 700,
        color: "#000"
      },
      subtitle1: {
        fontSize: 22
      },
      subtitle2: {
        fontSize: 18,
      },
      body1: {
        fontSize: 12,
      },
      body2: {
        fontSize: 9,
      },
      button: {
        fontSize: 12,
        fontWeight: 900,
        textTransform: 'none'
      },
    }
})