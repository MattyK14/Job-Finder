import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import _ from 'lodash';
import { AppLoading } from 'expo';
import Slides from '../components/Slides';

const SLIDE_DATA = [
  { id: 0, text: 'Welcome to the Job App', color: '#03A9F4' },
  { id: 1, text: 'Use this to get a job', color: '#009688' },
  { id: 2, text: 'Set your location, then swipe away', color: '#03A9F4' }
];

class WelcomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: null,
    };
  }

  async componentWillMount() {
    let token = await AsyncStorage.getItem('fb_token');

    if (token) {
      this.props.navigation.navigate('map');
      this.setState({ token });
    }
    else {
          this.setState({ token: false });
    }
  }

  onSlidesComplete = () => {
    this.props.navigation.navigate('auth');
  }

  render() {
    if (_.isNull(this.state.token)) {
      return <AppLoading />;
    }
    return (
      <Slides data={SLIDE_DATA} onSlidesComplete={this.onSlidesComplete} />
    );
  }
}

export default WelcomeScreen;
