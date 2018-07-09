/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Alert, Animated, Dimensions, StyleSheet, TouchableOpacity, View} from 'react-native';
import {createStackNavigator} from 'react-navigation';

import Game from './game';
import Home from './home';

// type Props = {};

const App = createStackNavigator({
  Home: {screen: Home},
  Play: {screen: Game},
});

export default App;
