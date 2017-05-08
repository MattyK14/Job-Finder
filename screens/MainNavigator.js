import { TabNavigator, StackNavigator } from 'react-navigation';

import AuthScreen from './AuthScreen';
import WelcomeScreen from './WelcomeScreen';
import MapScreen from './MapScreen';
import DeckScreen from './DeckScreen';
import SettingsScreen from './SettingsScreen';
import ReviewScreen from './ReviewScreen';


export const MainNavigator = TabNavigator({
  welcome: { screen: WelcomeScreen },
  auth: { screen: AuthScreen },
  main: {
    screen: TabNavigator({
      map: { screen: MapScreen },
      deck: { screen: DeckScreen },
      review: {
        screen: StackNavigator({
          review: { screen: ReviewScreen },
          settings: { screen: SettingsScreen },
        })
      }
    })
  }
}, {
  lazy: true,
  navigationOptions: {
    tabBarVisible: false
  }
});
