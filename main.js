import Expo from 'expo';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import { MainNavigator } from './screens/MainNavigator';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}

Expo.registerRootComponent(App);
