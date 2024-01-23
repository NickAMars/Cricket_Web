import { ThemeProvider, createTheme } from '@mui/material/styles';



export const theme = createTheme({
    palette: {
        primary: {
          main: '#60a630',
        },
        secondary: {
          main: '#FFF',
        },
    },
    typography: {
      h1: {
        fontSize: 40,
      },
      h2: {
        fontSize: 30,
      },
      h3: {
        fontSize: 20,
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