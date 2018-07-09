/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Alert, Animated, Dimensions, StyleSheet, TouchableOpacity, View} from 'react-native';

type Props = {};

let {height:H, width: W} = Dimensions.get("window");

class FadeInView extends Component {
  state = {
    fadeAnim: new Animated.Value(0),
    pos: new Animated.ValueXY,
  }

  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        duration: 1000,
      }
    ).start();
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View
        id={this.props.id}
        style={{
        ...this.props.style,
        opacity: fadeAnim,
        position: "absolute",
        left: this.props.x,
        top: this.props.y,
      }}
      >
      {this.props.children}
      </Animated.View>
    )
  }
}

function negPosRandom(n) {
  let val = Math.random() * n;
  let neg = Math.floor(Math.random() * 2);
  console.log(neg);
  return neg == 1 ? val : -1 * val;
}

export default class App extends Component<Props> {
  constructor(props) {
    super(props);

    let circles = [{x: negPosRandom(W/2), y: negPosRandom(H/2)}];

    this.state = {
      index: 0,
      circles: circles,
    }
  }

  _onPressButton(i) {
    Alert.alert('You pressed the circle ' + i);
    console.log(this);
    this.state.circles.push({x: negPosRandom(W/2), y: negPosRandom(H/2)});
    this.setState({
      index: this.state.index + 1,
      circles: this.state.circles
    });
  }

  render() {
    console.log(this.state.circles);

    let views = this.state.circles.map((coord, i) => {
      console.log(i + " " + coord.x + " " + coord.y);
      return <TouchableOpacity key={i}
          onPress={this._onPressButton.bind(this, i)}>
            <FadeInView 
            style={styles.circle} 
            id={i}
            x={coord.x}
            y={coord.y}
            />
          </TouchableOpacity>
    });

    console.log(views);

    return (
      <View style={styles.container}>
        {views}
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
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'purple',
  },
});
