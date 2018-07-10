import React, {Component} from 'react';
import {Animated, Dimensions} from 'react-native';

import {randomPosition, generateColor, randomSize} from './util';

let {height:H, width: W} = Dimensions.get("window");

export default class Circle extends Component {
    constructor (props) {
        super(props);

        this.state = {
          x: randomPosition(W/2),
          y: randomPosition(H/2),
          color: generateColor(),
          size: randomSize(),
        };
    }

    render() {
        return (
        <FadeInView 
            size = {this.state.size} 
            id={this.props.id}
            x={this.state.x}
            y={this.state.y}
            color={this.state.color}
        />);
    }
}

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