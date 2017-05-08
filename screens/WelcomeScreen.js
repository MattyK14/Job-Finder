import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Slides from '../components/Slides';

const SLIDE_DATA = [
  { id: 0, text: 'Welcome to the Job App', color: '#03A9F4' },
  { id: 1, text: 'Use this to get a job', color: '#009688' },
  { id: 2, text: 'Set your location, then swipe away', color: '#03A9F4' }
];

class WelcomeScreen extends Component {
  onSlidesComplete = () => {
    this.props.navigation.navigate('auth');
  }

  render() {
    return (
      <Slides data={SLIDE_DATA} onSlidesComplete={this.onSlidesComplete} />
    );
  }
}

export default WelcomeScreen;
