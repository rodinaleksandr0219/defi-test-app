import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { CssBaseline } from '@material-ui/core'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { Web3ReactProvider } from '@web3-react/core'

import Home from '../components/Home'
import { getLibrary } from '../providers'

const Index = () => {

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
          primary: {
            main: '#512da8',
          },
          secondary: {
            main: '#ab47bc',
          },
        },
      }),
    [prefersDarkMode],
  );

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Home />
      </ThemeProvider>
    </Web3ReactProvider>
  )
}

export default Index
