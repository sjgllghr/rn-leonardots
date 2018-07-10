import React, {Component} from 'react';
import {Alert, Animated, Dimensions, StyleSheet, TouchableOpacity, View} from 'react-native';

import {randomPosition, generateColor, randomSize} from './util';

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

export default class Game extends Component {
    static navigationOptions = {
      header: null,
    };
  
    constructor(props) {
      super(props);
  
      this.state = {
        index: 0,
        circles: [{
          x: randomPosition(W/2), 
          y: randomPosition(H/2),
          color: generateColor(),
          size: randomSize()
        }],
      }
    }

    // This is kinda slow, but is it better than reseting before confirming?
    reset() {
        this.setState({
            index: 0,
            circles: [{
              x: randomPosition(W/2), 
              y: randomPosition(H/2),
              color: generateColor(),
              size: randomSize()
            }]
        });
    }
  
    _onPressButton(i) {
      if (i != this.state.index) {
        const { navigate } = this.props.navigation;

        Alert.alert(
          "Oops!", 
          "You got " + this.state.index + " in a row.",
          [
            {text: "Play again", onPress: () => this.reset()},
            {text: "Quit", onPress: () => navigate('Home')}
          ]
        );
        // this.setState({
        //   index: 0,
        //   circles: [{x: negPosRandom(W/2), y: negPosRandom(H/2)}]
        // });
      } else {
        // Alert.alert('You pressed the circle ' + i);
        console.log(this);
        this.state.circles.push({
          x: randomPosition(W/2), 
          y: randomPosition(H/2),
          color: generateColor(),
          size: randomSize()
        });
        this.setState({
          index: this.state.index + 1,
          circles: this.state.circles
        });
      }
    }
  
    render() {
      console.log(this.state.circles);
  
      let views = this.state.circles.map((circle, i) => {
        console.log(i + " " + circle.x + " " + circle.y);
        
        return <TouchableOpacity key={i}
            onPress={this._onPressButton.bind(this, i)}>
              <FadeInView 
              id={i}
              x={circle.x}
              y={circle.y}
              color={circle.color}
              size={circle.size}
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
  });