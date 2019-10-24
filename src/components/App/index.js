import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import dayjs from 'dayjs';

// Include Pages in the router
import Calendar from '../../pages/Calendar';

// Call store
import store from '../../store';

import 'dayjs/locale/es'

dayjs.locale('es');

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <GlobalStyle />
          <div className="container">
            <Switch>
              <Route path="/" exact component={Calendar} />
            </Switch>
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
