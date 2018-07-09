import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';

export default class Home extends Component {
    static navigationOptions = {
        title: "Home"
    }

    render() {
        const { navigate } = this.props.navigation;

        return (
        <Button
            title="Play game"
            onPress={()=> navigate('Play')}
        />);
    }
}