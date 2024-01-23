import { ThemeProvider, createTheme } from '@mui/material/styles';



export const theme = createTheme({
    palette: {
        primary: {
          main: '#60a630',
        },
        secondary: {
          main: '#FFF',
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
        fontWeight: 900,
        color: "#000"
      },
      subtitle1: {
        fontSize: 12,
      },
      button: {
        fontSize: 12,
        fontWeight: 900
      },
      body2: {
        fontSize: 12,
      }
    }
})