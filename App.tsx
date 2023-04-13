import React from 'react';

import {store} from './src/redux/store';
import {Provider} from 'react-redux';
import Rootnavigation from './src/router/rootnavigation';
import Coins from './src/modules/crypro/Coins';

const App = () => {
  return (
    <Provider store={store}>
      {/* <Rootnavigation /> */}
      <Coins />
    </Provider>
  );
};

export default App;
