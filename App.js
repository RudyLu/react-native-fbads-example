/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import { LoginButton, AccessToken } from 'react-native-fbsdk';
import { NativeAdsManager, AdSettings } from 'react-native-fbads';

import NativeAdView from './src/NativeAdView';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

AdSettings.clearTestDevices();
AdSettings.setLogLevel('debug');
AdSettings.addTestDevice(AdSettings.currentDeviceHash);

const adsManager = new NativeAdsManager('526836238189901_559425528264305');

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View
        style={{
          justifyContent: 'center',
          backgroundColor: '#fff',
          padding: 20,
        }}
      >
        <NativeAdView adsManager={adsManager} adChoicePosition="bottomRight" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
