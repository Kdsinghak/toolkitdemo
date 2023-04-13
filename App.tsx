import React from 'react';

import {store} from './src/redux/store';
import {Provider} from 'react-redux';
import Rootnavigation from './src/router/rootnavigation';
import Coins from './src/modules/crypro/Coins';
import codePush from 'react-native-code-push';

let codePushOptions = {checkFrequency: codePush.CheckFrequency.ON_APP_RESUME};
const App = () => {
  return (
    <Provider store={store}>
      {/* <Rootnavigation /> */}
      <Coins />
    </Provider>
  );
};

export default codePush(codePushOptions)(App);
