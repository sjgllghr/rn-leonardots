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
        if (Platform.OS == 'ios') {
          return (
          <FadeInView 
              size = {this.state.size} 
              id={this.props.id}
              x={this.state.x}
              y={this.state.y}
              color={this.state.color}
          />);
        } else {
          return (
            <View
              size={this.state.size}
              id={this.props.id}
              x={this.state.x}
              y={this.state.y}
              color={this.state.color}
            />);
        }
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
          position: 'absolute',
          left: this.props.x,
          top: this.props.y,
          backgroundColor: this.props.color,
          width: this.props.size,
          height: this.props.size,
          borderRadius: this.props.size / 2
        }}
        >
        {this.props.children}
        </Animated.View>
      )
    }
}

class CircleView extends Component {
    render() {
      console.log("circleview " + this.props.x + " " + this.props.y);
      return <View
        id={this.props.id}
        style={{
          ...this.props.style,
          position: 'absolute',
          left: this.props.x,
          top: this.props.y,
          backgroundColor: this.props.color,
          width: this.props.size,
          height: this.props.size,
          borderRadius: this.props.size / 2
        }}
        >
        {this.props.children}
        </View>
    }
}