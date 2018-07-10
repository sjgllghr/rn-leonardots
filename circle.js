import React, {Component} from 'react';
import {Animated, Dimensions, Platform, View} from 'react-native';

import {negPosRandom, posRandom, generateColor, randomSize} from './util';

let {height:H, width: W} = Dimensions.get("window");

export default class Circle extends Component {
    constructor (props) {
        super(props);

        let {x, y} = this.randomPosition();

        console.log(x + ", " + y);

        this.state = {
          x: x,
          y: y,
          color: generateColor(),
          size: randomSize(),
        };
    }

    randomPosition() {
        console.log(Platform.OS);
        if (Platform.OS == 'ios') {
            return {x: negPosRandom(W/2), y: negPosRandom(H/2)};
        } else {
            return {x: posRandom(W), y: posRandom(H)};
        }
    }

    render() {
        return (
        <FadeInView 
            id={this.props.id}
            style={{
              height: this.state.size,
              width: this.state.size,
              borderRadius: this.state.size / 2,
              top: this.state.y,
              left: this.state.x,
              backgroundColor: this.state.color,
              position: 'absolute'
            }}
        />);
    }
}

class FadeInView extends Component {
    state = {
      fadeAnim: new Animated.Value(0.01),
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
        }}
        >
        {this.props.children}
        </Animated.View>
      )
    }
}