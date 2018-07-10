import React, {Component} from 'react';
import {Alert, StyleSheet, TouchableOpacity, View} from 'react-native';

import Circle from './circle';

export default class Game extends Component {
    static navigationOptions = {
      header: null,
    };
  
    constructor(props) {
      super(props);
  
      this.state = {
        index: 0,
        circles: [0],
      }
    }

    restart() {
        this.setState({
            index: 0,
            circles: [0]
        });
    }
  
    _onPressButton(i) {
      if (i != this.state.index) {
        // Clear board in background
        this.setState({
          circles: []
        });

        const { navigate } = this.props.navigation;

        Alert.alert(
          "Oops!", 
          "You got " + this.state.index + " in a row.",
          [
            {text: "Play again", onPress: () => this.restart()},
            {text: "Quit", onPress: () => navigate('Home')}
          ]
        );
      } else {
        this.state.circles.push(this.state.index + 1);
        this.setState({
          index: this.state.index + 1,
          circles: this.state.circles
        });
      }
    }
  
    render() {
      let views = this.state.circles.map((i) => {
        
      return (
        <TouchableOpacity 
          key={i}
          onPress={this._onPressButton.bind(this, i)}
        >
          <Circle id={i} key={"circle" + i}/>
        </TouchableOpacity>)
      });

      console.log(views);
  
      return (
        <View style={styles.container}>
          {views}
          {/* <View style={styles.test}/> */}
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
    // test: {
    //   backgroundColor: 'purple',
    //   height: 50,
    //   width: 50,
    //   borderRadius: 25,
    //   top: 595.2,
    //   left: 36.8,
    //   position: 'absolute'
    // }
  });