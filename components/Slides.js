import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const { width } = Dimensions.get('window');

class Slides extends Component {
  renderLastSlide(index) {
    if (index === this.props.data.length - 1) {
      return (
        <Button
          buttonStyle={styles.butonStyle}
          title="Continue"
          raised
          onPress={this.props.onSlidesComplete}
        />
      );
    }
  }

  renderSlides() {
    return this.props.data.map((slide, index) => {
      return (
        <View style={[styles.slideStyle, { backgroundColor: slide.color }]} key={slide.id}>
          <Text style={styles.textStyle}>{slide.text}</Text>
          {this.renderLastSlide(index)}
        </View>
      );
    });
  }

  render() {
    return (
      <ScrollView pagingEnabled horizontal style={{ flex: 1 }}>
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

const styles = {
  textStyle: {
    fontSize: 30,
    color: '#FFFFFF',
  },
  slideStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width,
  },
  butonStyle: {
    backgroundColor: '#0288D1',
    marginTop: 15,
  }
};

export default Slides;
