import Expo from 'expo';
import React from 'react';

import { MainNavigator } from './screens/MainNavigator';

class App extends React.Component {
  render() {
    return (
        <MainNavigator />
    );
  }
}

Expo.registerRootComponent(App);
