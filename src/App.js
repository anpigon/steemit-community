import React from 'react';
import GlobalStyles from './Styles/GlobalStyles';
import { HashRouter as Router } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from "react-apollo-hooks";
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import client from './Apollo/Client';
import Theme from './Styles/Theme';
import Routes from "./Routes";

function App() {
  return (
    <ApolloProvider client={ client }>
      {/* <ThemeProvider theme={ Theme }>
        <>*/}
          <GlobalStyles/> 
          <Router>
            <Routes />
          </Router>
        {/* </>
      </ThemeProvider> */}
    </ApolloProvider>
  );
}

export default App;
