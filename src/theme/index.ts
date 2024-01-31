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
          50: '#AAA',
          100: '#BBB',
          200: "#CCC",
          300: "#DDD",
          400: "#EEE"
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