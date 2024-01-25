import { ThemeProvider, createTheme } from '@mui/material/styles';



export const theme = createTheme({
    palette: {
        primary: {
          dark: '#497e25',
          main: '#60a630',
          light: '#86ce55',
        },
        secondary: {
          dark: '#DDD',
          main: '#FFF',
        },
        info: {
          main: '#3170B7'
        },
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