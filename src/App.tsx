import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

import GlobalStyles from './GlobalStyles';

import Index from './Page/index';

const App: React.FC = () => (
  <Provider store={store}>
    <Index />
    <GlobalStyles />
  </Provider>
);

export default App;
