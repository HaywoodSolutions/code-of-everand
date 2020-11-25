import * as React from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import { Dimensions } from 'react-native';
import BottomBar from './BottomBar/BottomBar';
import { scaleH } from './Scales';

class Game extends React.Component {
  componentDidMount() {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'red'}}>
          <Image source={require('../../../assets/ExamplarScreen.png')} style={{width: '100%', height: '100%'}} resizeMode='stretch' />
        </View>
        <View style={{flex: 0, height: scaleH * 47}}>
          <BottomBar />
        </View>
      </View>
    );
  }
}

export default Game;